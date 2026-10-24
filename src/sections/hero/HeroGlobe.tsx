"use client";

import dynamic from "next/dynamic";
import { Component, useSyncExternalStore } from "react";
import { SvgGlobe } from "./SvgGlobe";

const Globe = dynamic(() => import("@/three/Globe"), {
  ssr: false,
  loading: () => <SvgGlobe />,
});

let webglSupport: boolean | undefined;

function hasWebGL() {
  if (webglSupport === undefined) {
    try {
      const canvas = document.createElement("canvas");
      webglSupport = Boolean(
        canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
      );
    } catch {
      webglSupport = false;
    }
  }
  return webglSupport;
}

const subscribe = () => () => {};

/** Falls back to the SVG globe if the 3D scene throws (e.g. a lost WebGL context). */
class GlobeBoundary extends Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <SvgGlobe /> : this.props.children;
  }
}

export function HeroGlobe() {
  const webgl = useSyncExternalStore(subscribe, hasWebGL, () => false);

  return (
    <div className="relative aspect-square w-full max-w-[460px] justify-self-center">
      {webgl ? (
        <GlobeBoundary>
          <Globe />
        </GlobeBoundary>
      ) : (
        <SvgGlobe />
      )}
      <div className="absolute bottom-[8%] left-0 rounded-[10px] border border-line-2 bg-surface px-3.5 py-2.5 font-mono text-xs text-muted">
        <span className="text-accent">●</span> live building data
      </div>
    </div>
  );
}
