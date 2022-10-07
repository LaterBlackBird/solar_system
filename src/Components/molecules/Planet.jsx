import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";

import CelestialBody from "../atoms/CelestialBody";

import mercuryMap from "../../assets/mercury_map.jpg";
import venusMap from "../../assets/venus_map.jpg";
import earthMap from "../../assets/earth_map.png";
import marsMap from "../../assets/mars_map.jpg";
import jupiterMap from "../../assets/jupiter_map.jpg";
import saturnMap from "../../assets/saturn_map.jpg";
import uranusMap from "../../assets/uranus_map.jpg";
import neptuneMap from "../../assets/neptune_map.jpg";
import plutoMap from "../../assets/pluto_map.jpg";
import planetData from "../../planetData.json";

const Planet = ({ planetName }) => {
  
  const [
    mercuryTexture,
    venusTexture,
    earthTexture,
    marsTexture,
    jupiterTexture,
    saturnTexture,
    uranusTexture,
    neptuneTexture,
    plutoTexture,
  ] = useLoader(TextureLoader, [
    mercuryMap,
    venusMap,
    earthMap,
    marsMap,
    jupiterMap,
    saturnMap,
    uranusMap,
    neptuneMap,
    plutoMap,
  ]);

  let texture;
  switch (planetName) {
    case 'Mercury':
      texture = mercuryTexture;
      break;
    case 'Venus':
      texture = venusTexture;
      break;
    case 'Earth':
      texture = earthTexture;
      break;
    case 'Mars':
      texture = marsTexture;
      break;
    case 'Jupiter':
      texture = jupiterTexture;
      break;
    case 'Saturn':
      texture = saturnTexture;
      break;
    case 'Uranus':
      texture = uranusTexture;
      break;
    case 'Neptune':
      texture = neptuneTexture;
      break;
    case 'Pluto':
      texture = plutoTexture;
      break;
    default:
      break;
  };

  const planetPosition = useRef();
  const ringPosition = useRef();
  const sunRadius = planetData.Sun.diameter / 2;
  const planetRadius = planetData[planetName].diameter / 2;
  const distanceFromSunCenter = planetData[planetName].distanceFromSun + (sunRadius * 300);

  const orbitSpeedScaleFactor = 100; //smaller numbers = slower
  const distanceFromSunScaleFactor = 30000000;

  const saturnRingInnerDiameter = 74570;
  const saturnRingOuterDiameter = 136780;
  const saturnRingSmoothness = 30; //range is 3~30


  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / (planetData[planetName].revolultionPeriod / orbitSpeedScaleFactor);
    const orbit = distanceFromSunCenter / distanceFromSunScaleFactor
    planetPosition.current.position.x = orbit * Math.sin(time);
    planetPosition.current.position.z = orbit * Math.cos(time);

    if (planetName === "Saturn") {
      ringPosition.current.position.x = planetPosition.current.position.x
      ringPosition.current.position.z = planetPosition.current.position.z
    }
  });
  
  return (
    <>
      <CelestialBody ref={planetPosition} texture={texture} planetRadius={planetRadius} />
      
      {planetName === "Saturn" && (
        <mesh ref={ringPosition} rotation={[-90, 0, 0]}>
          <ringGeometry args={[(saturnRingInnerDiameter / 100000), (saturnRingOuterDiameter / 100000), saturnRingSmoothness]} />
          <meshStandardMaterial side={DoubleSide} />
        </mesh>
      )}
    </>
  );
}

export default Planet;
