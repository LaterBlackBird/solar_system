import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";

import Planet from "./Components/atoms/Planet";
import sunMap from "./assets/sun_map.jpg";
import mercuryMap from "./assets/mercury_map.jpg";
import venusMap from "./assets/venus_map.jpg";
import earthMap from "./assets/earth_map.png";
import marsMap from "./assets/mars_map.jpg";
import jupiterMap from "./assets/jupiter_map.jpg";
import saturnMap from "./assets/saturn_map.jpg";
import uranusMap from "./assets/uranus_map.jpg";
import neptuneMap from "./assets/neptune_map.jpg";
import plutoMap from "./assets/pluto_map.jpg";

import "./App.css";

function App() {
  const [
    sunTexture,
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
    sunMap,
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

  const Sun = () => {
    return (
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[((1392700 / 2)/1000000)]} />
        <meshStandardMaterial map={sunTexture} />
      </mesh>
    );
  };

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [-20, 5, 35], fov: 45 }}>
        <OrbitControls />
        <ambientLight />
        <pointLight
          position={[0, 0, 0]}
          color="white"
          intensity={10}
          castShadow
        />
        <Stars />
        <Sun />
        <Planet planetName={"Mercury"} texture={mercuryTexture} />
        <Planet planetName={"Venus"} texture={venusTexture} />
        <Planet planetName={"Earth"} texture={earthTexture} />
        <Planet planetName={"Mars"} texture={marsTexture} />
        <Planet planetName={"Jupiter"} texture={jupiterTexture} />
        <Planet planetName={"Saturn"} texture={saturnTexture} />
        <Planet planetName={"Uranus"} texture={uranusTexture} />
        <Planet planetName={"Neptune"} texture={neptuneTexture} />
        <Planet planetName={"Pluto"} texture={plutoTexture} />
      </Canvas>
    </div>
  );
}

export default App;
