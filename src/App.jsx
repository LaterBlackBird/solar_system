import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import "./App.css";

function App() {
  const Sun = () => {
    return (
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[5]} />
        <meshLambertMaterial color="orange" />
      </mesh>
    );
  };

  const Mercury = () => {
    const mercuryRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      mercuryRef.current.position.x = 10 * Math.sin(time);
      mercuryRef.current.position.z = 9 * Math.cos(time);
    });

    return (
      <mesh ref={mercuryRef}>
        <sphereGeometry args={[0.25]} castShadow />
        <meshStandardMaterial color={0xa83232} />
      </mesh>
    );
  };

  const Venus = () => {
    const venusRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .75;
      venusRef.current.position.x = 15 * Math.sin(time);
      venusRef.current.position.z = 14 * Math.cos(time);
    });

    return (
      <mesh ref={venusRef}>
        <sphereGeometry args={[.2]} castShadow />
        <meshStandardMaterial color={0xe3df12} />
      </mesh>
    );
  };

  const Earth = () => {
    const earthRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .5;
      earthRef.current.position.x = 25 * Math.sin(time);
      earthRef.current.position.z = 20 * Math.cos(time);
    });

    return (
      <mesh ref={earthRef}>
        <sphereGeometry args={[.5]} castShadow />
        <meshStandardMaterial color={0x111070} />
      </mesh>
    );
  };

  const Mars = () => {
    const marsRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .4;
      marsRef.current.position.x = 35 * Math.sin(time);
      marsRef.current.position.z = 30 * Math.cos(time);
    });

    return (
      <mesh ref={marsRef}>
        <sphereGeometry args={[.5]} castShadow />
        <meshStandardMaterial color={0xfc032c} />
      </mesh>
    );
  };

  const Jupiter = () => {
    const jupiterRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .35;
      jupiterRef.current.position.x = 45 * Math.sin(time);
      jupiterRef.current.position.z = 40 * Math.cos(time);
    });

    return (
      <mesh ref={jupiterRef}>
        <sphereGeometry args={[1.5]} castShadow />
        <meshStandardMaterial color={0xc47d78} />
      </mesh>
    );
  };

  const Saturn = () => {
    const saturnRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .3;
      saturnRef.current.position.x = 55 * Math.sin(time);
      saturnRef.current.position.z = 60 * Math.cos(time);
    });

    return (
      <mesh ref={saturnRef}>
        <sphereGeometry args={[.1]} castShadow />
        <meshStandardMaterial color={0x73714c} />
      </mesh>
    );
  };

  const Uranus = () => {
    const uranusRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .25;
      uranusRef.current.position.x = 75 * Math.sin(time);
      uranusRef.current.position.z = 70 * Math.cos(time);
    });

    return (
      <mesh ref={uranusRef}>
        <sphereGeometry args={[.6]} castShadow />
        <meshStandardMaterial color={0x02f5f1} />
      </mesh>
    );
  };

  const Neptune = () => {
    const neptuneRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .2;
      neptuneRef.current.position.x = 85 * Math.sin(time);
      neptuneRef.current.position.z = 80 * Math.cos(time);
    });

    return (
      <mesh ref={neptuneRef}>
        <sphereGeometry args={[.7]} castShadow />
        <meshStandardMaterial color={0x1302cc} />
      </mesh>
    );
  };

  const Pluto = () => {
    const plutoRef = useRef();

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * .15;
      plutoRef.current.position.x = 95 * Math.sin(time);
      plutoRef.current.position.z = 90 * Math.cos(time);
    });

    return (
      <mesh ref={plutoRef}>
        <sphereGeometry args={[.05]} castShadow />
        <meshStandardMaterial color={'white'} />
      </mesh>
    );
  };

  return (
    <div id="canvas-container">
      <Canvas shadowMap camera={{ position: [0, 10, 150], fov: 45 }}>
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
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
        <Pluto />
      </Canvas>
    </div>
  );
}

export default App;
