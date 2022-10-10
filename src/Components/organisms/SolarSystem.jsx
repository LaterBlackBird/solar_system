import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";

import Sun from '../molecules/Sun';
import Planet from "../molecules/Planet";

import "./solarSystem.css";

function App() {

  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={.1} />
      <Stars radius={400} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
      <Sun />
      {planets.map(planet => (
        <Planet planetName={planet} />
      ))}
    </>
  );
}

export default App;
