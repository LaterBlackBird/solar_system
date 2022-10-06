import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import planetData from "../../planetData.json";

function Planet({ planetName, texture }) {
  const planetRef = useRef();
  const ringRef = useRef();
  const sunRadius = planetData.Sun.diameter / 2;
  const distanceFromSunCenter =
    planetData[planetName].distanceFromSun + sunRadius;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / (planetData[planetName].revolultionPeriod / 500);
    planetRef.current.position.x = (distanceFromSunCenter / 30000000) * Math.sin(time);
    planetRef.current.position.z = (distanceFromSunCenter / 30000000) * Math.cos(time);
    if (planetName === "Saturn") {
      ringRef.current.position.x = planetRef.current.position.x
      ringRef.current.position.z = planetRef.current.position.z
    }
  });
  

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry
          args={[planetData[planetName].diameter / 2 / 100000]}
          castShadow
          recievesShadow
        />
        <meshStandardMaterial map={texture} />
      </mesh>
      {planetName === "Saturn" && (
        <mesh ref={ringRef} rotation={[-90, 0, 0]}>
          <ringGeometry args={[74570 / 100000, 136780 / 100000, 30]} />
          <meshStandardMaterial side={DoubleSide} />
        </mesh>
      )}
    </>
  );
}

export default Planet;
