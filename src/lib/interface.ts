export interface workProps {
  title: string;
  time: string;
  description: string[];
  image: string;
  index: number;
  url: string;
}

export interface experienceProps {
  title: string;
  position: string;
  description: string[];
  timeline: string;
  image: string;
  index: number;
  url: string;
}

export interface TextProps {
  text: string;
  positions: {
    cameraPosition: [number, number, number];
    textPosition: [number, number, number];
  };
}

export interface Positions {
  cameraPosition: [number, number, number];
  textPosition: [number, number, number];
}

export interface CertificateProps {
  index: number;
  text: string;
  time: string;
  image: string;
  url: string;
}
