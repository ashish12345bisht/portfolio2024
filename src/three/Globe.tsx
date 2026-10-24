"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

const ACCENT = "#7c93ff";
const RING = "#3a3f4d";
const FAINT = "#262a35";
const RADIUS = 1.6;

/** Point on the sphere from latitude/longitude in degrees. */
function toVector(lat: number, lon: number, r = RADIUS) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function circle(points = 96, rotate?: THREE.Euler) {
  return Array.from({ length: points + 1 }, (_, i) => {
    const a = (i / points) * Math.PI * 2;
    const v = new THREE.Vector3(Math.cos(a) * RADIUS, 0, Math.sin(a) * RADIUS);
    return rotate ? v.applyEuler(rotate) : v;
  });
}

// Sites linked back to a hub in Sydney (Conserve It) — Delhi is where I work from.
const SITES: [number, number][] = [
  [-33.9, 151.2],
  [-31.9, 115.9],
  [28.6, 77.2],
  [1.3, 103.8],
  [35.7, 139.7],
  [-41.3, 174.8],
];
const HUB = SITES[0];

function arc(from: THREE.Vector3, to: THREE.Vector3) {
  const mid = from.clone().add(to).multiplyScalar(0.5);
  mid.setLength(RADIUS + from.distanceTo(to) * 0.35);
  return new THREE.QuadraticBezierCurve3(from, mid, to);
}

function Pulse({
  curve,
  offset,
}: {
  curve: THREE.QuadraticBezierCurve3;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * 0.25 + offset) % 1;
    ref.current?.position.copy(curve.getPoint(t));
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.018, 8, 8]} />
      <meshBasicMaterial color="#eceef3" />
    </mesh>
  );
}

function Scene({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);

  const { rings, nodes, arcs } = useMemo(() => {
    const rings = [
      { points: circle(), color: RING },
      // Meridians: tip the circle upright, then spin it around the Y axis.
      ...[0, 0.25, 0.5, 0.75].map((t) => ({
        points: circle(96, new THREE.Euler(Math.PI / 2, t * Math.PI, 0, "YXZ")),
        color: FAINT,
      })),
      ...[-0.55, 0.55].map((y) => ({
        points: circle().map((v) =>
          v
            .clone()
            .multiplyScalar(Math.sqrt(1 - y * y))
            .setY(y * RADIUS),
        ),
        color: FAINT,
      })),
    ];
    const hub = toVector(...HUB);
    const nodes = SITES.map(([lat, lon]) => toVector(lat, lon, RADIUS * 1.005));
    const arcs = nodes.slice(1).map((n) => arc(hub, n));
    return { rings, nodes, arcs };
  }, []);

  useFrame(({ pointer }, delta) => {
    const g = group.current;
    if (!g || !animate) return;
    g.rotation.y += delta * 0.08;
    // Gentle tilt towards the cursor.
    g.rotation.x = THREE.MathUtils.lerp(
      g.rotation.x,
      -0.4 - pointer.y * 0.15,
      0.05,
    );
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, pointer.x * 0.08, 0.05);
  });

  // The outline circle faces the camera, so the sphere always reads as a sphere.
  const outline = useMemo(
    () => circle(128, new THREE.Euler(Math.PI / 2, 0, 0)),
    [],
  );

  return (
    <>
      <Line points={outline} color={RING} lineWidth={1.2} />
      <group ref={group} rotation={[-0.4, 1.7, 0]}>
        {rings.map((r, i) => (
          <Line key={i} points={r.points} color={r.color} lineWidth={1} />
        ))}
        {arcs.map((c, i) => (
          <Line
            key={i}
            points={c.getPoints(48)}
            color={ACCENT}
            lineWidth={1.2}
            dashed
            dashSize={0.04}
            gapSize={0.05}
            transparent
            opacity={0.75}
          />
        ))}
        {animate &&
          arcs.map((c, i) => (
            <Pulse key={i} curve={c} offset={i / arcs.length} />
          ))}
        {nodes.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[i === 0 ? 0.045 : 0.03, 16, 16]} />
            <meshBasicMaterial color={i === 0 ? ACCENT : "#eceef3"} />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default function Globe() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const animate = !useReducedMotion();

  // Stop rendering frames while the hero is scrolled out of view.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (wrapper.current) observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        frameloop={visible && animate ? "always" : "demand"}
      >
        <Scene animate={animate} />
      </Canvas>
    </div>
  );
}
