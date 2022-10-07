import React, { forwardRef } from "react";

const CelestialBody = forwardRef(({ texture, planetRadius }, planetPosition) => {
  const planetSizeScaleFactor = 100000;

  return (
    <mesh ref={planetPosition}>
      <sphereGeometry
        args={[planetRadius / planetSizeScaleFactor]}
        castShadow
        recievesShadow
      />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
});

export default CelestialBody;
