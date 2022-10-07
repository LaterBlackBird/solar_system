import React from "react";
import { Canvas } from "@react-three/fiber";
import SolarSystem from "./Components/organisms/SolarSystem";

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [-20, 5, 45], fov: 45 }}>
        <SolarSystem />
      </Canvas>
    </div>
  );
}

export default App;
