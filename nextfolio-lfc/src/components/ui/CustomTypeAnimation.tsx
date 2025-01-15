"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function CustomTypeAnimation({ sequences }: { sequences: string[] }) {
  const [isMounted, setIsMounted] = useState(false);
  const delayTime = 3500; // Delay time before mounting

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, delayTime);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [delayTime]);

  
  if (!isMounted) {
    return <span>a Software Developer|</span>; // O algún componente de carga
  }

  return (
    <TypeAnimation
      sequence={[
        sequences[0],
        1800, 
        sequences[1],
        1800, 
      ]}
      wrapper="span"
      speed={73}
      repeat={Infinity}
      className="md:tracking-wider text-sm md:text-lg lg:text-2xl"
    />
  );
}

export default CustomTypeAnimation;
