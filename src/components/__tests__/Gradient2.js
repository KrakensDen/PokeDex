import React from "react";

const Gradient2 = ({ color1, color2 = color1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 700 700"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(150, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ffflux-gradient"
        >
          <stop stopColor="hsl(0, 0%, 100%)" stopOpacity={0.01} offset="0%" />
          <stop stopColor="hsl(0, 0%, 0%)" stopOpacity={0.01} offset="100%" />
        </linearGradient>
        <filter
          id="ffflux-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.002 0.002"
            numOctaves={2}
            seed={2}
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feGaussianBlur
            stdDeviation="10 10"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            edgeMode="duplicate"
            result="blur"
          />
          <feBlend
            mode="vivid light"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            in2="blur"
            result="blend"
          />
          <feColorMatrix
            type="vivid light"
            values={3}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="blend"
            result="colormatrix"
          />
        </filter>
      </defs>
      <rect
        width={700}
        height={700}
        fill="url(#ffflux-gradient)"
        filter="url(#ffflux-filter)"
      />
    </svg>
  );
};

export default Gradient2;
