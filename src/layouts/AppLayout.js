import React from "react";
import AppHead from "./AppHead";
import Footer from "./Footer/Footer";
import { PageContainer } from "../components/styled/containers/Container.styles";
import Navbar from "./Navbar";
import styled from "styled-components";

const AppLayout = ({ children, title, description, headTitle }) => {
  return (
    <BGImage>
      <BGFilter>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 700 700"
          id={"Noise"}
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency={0.2}
                numOctaves={4}
                seed={15}
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              />
              <feSpecularLighting
                surfaceScale={14}
                specularConstant={1.4}
                specularExponent={20}
                lightingColor="#1240bb"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth={3} elevation={117} />
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width={700} height={700} fill="transparent" />
          <rect
            width={700}
            height={700}
            fill="#0070ff"
            filter="url(#nnnoise-filter)"
          />
        </svg>
        <AppHead headTitle={headTitle} description={description} />
        <Navbar title={title} />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </BGFilter>
    </BGImage>
  );
};

const BGImage = styled.div`
  background: #0d0d0d;

  #Noise {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    opacity: 0.15;
  }
`;

const BGFilter = styled.div`
  backdrop-filter: blur(2px);
  background: #88888811;
`;

export default AppLayout;
