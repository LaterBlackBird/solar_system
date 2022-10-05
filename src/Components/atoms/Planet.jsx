import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from "@react-three/fiber";
import planetData from '../../planetData.json'

function Planet({ planetName }) {
  const planetRef = useRef();
  const scale = 100000;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()/2;
    planetRef.current.position.x = (planetData[planetName].distanceFromSun/30000000) * Math.sin(time);
    planetRef.current.position.z = (planetData[planetName].distanceFromSun/30000000) * Math.cos(time);
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[(planetData[planetName].diameter/2)/scale]} castShadow />
      <meshStandardMaterial color={0xa83232} />
    </mesh>
  );
}

export default Planet