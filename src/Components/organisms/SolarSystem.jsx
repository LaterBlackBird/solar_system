import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";

import Sun from '../molecules/Sun';
import Planet from "../molecules/Planet";

import "./solarSystem.css";

function App() {

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={.1} />
      <Stars radius={400} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
      <Sun />
      <Planet planetName={"Mercury"} />
      <Planet planetName={"Venus"} />
      <Planet planetName={"Earth"} />
      <Planet planetName={"Mars"} />
      <Planet planetName={"Jupiter"} />
      <Planet planetName={"Saturn"} />
      <Planet planetName={"Uranus"} />
      <Planet planetName={"Neptune"} />
      <Planet planetName={"Pluto"} />
    </>
  );
}

export default App;
