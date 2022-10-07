import React from "react";

const SunSpotLight = ({ position, angle }) => {

  return (
    <>
      <spotLight position={position} angle={angle} penumbra={0} intensity={1} />
    </>
  );
};

export default SunSpotLight;
