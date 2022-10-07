import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import sunMap from "../../assets/sun_map.jpg";
import SunSpotLight from "../atoms/SunSpotLight";

import planetData from "../../planetData.json";
import CelestialBody from "../atoms/CelestialBody";

const Sun = () => {
  const planetPosition = useRef();

  const [sunTexture] = useLoader(TextureLoader, [sunMap]);
  const sunRadius = planetData.Sun.diameter / 2;
  const spotLightDistance = 8.5;
  const secondarySpotLightDistance = 5.5;
  const spotLightAngle = 739.4;
  const secondarySpotLightAngle = 739;

  return (
    <>
      <pointLight position={[0, 0, 0]} color="white" intensity={4} castShadow />
      <SunSpotLight position={[spotLightDistance, 0, 0]} angle={spotLightAngle} />
      <SunSpotLight position={[-spotLightDistance, 0, 0]} angle={spotLightAngle} />
      <SunSpotLight position={[0, spotLightDistance, 0]}angle={spotLightAngle} />
      <SunSpotLight position={[0, -spotLightDistance, 0]}angle={spotLightAngle} />
      <SunSpotLight position={[0, 0, spotLightDistance]} angle={spotLightAngle} />
      <SunSpotLight position={[0, 0, -spotLightDistance]} angle={spotLightAngle} />
      <SunSpotLight position={[secondarySpotLightDistance, secondarySpotLightDistance, secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[-secondarySpotLightDistance, secondarySpotLightDistance, secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[-secondarySpotLightDistance, -secondarySpotLightDistance, secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[-secondarySpotLightDistance, -secondarySpotLightDistance, -secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[-secondarySpotLightDistance, secondarySpotLightDistance, -secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[secondarySpotLightDistance, secondarySpotLightDistance, -secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[secondarySpotLightDistance, -secondarySpotLightDistance, -secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <SunSpotLight position={[secondarySpotLightDistance, -secondarySpotLightDistance, secondarySpotLightDistance]} angle={secondarySpotLightAngle} />
      <CelestialBody texture={sunTexture} planetRadius={sunRadius} ref={planetPosition}/>
    </>
  );
};

export default Sun;
