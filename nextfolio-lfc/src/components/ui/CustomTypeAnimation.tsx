"use client"
import { TypeAnimation } from 'react-type-animation';

function CustomTypeAnimation({ sequences }: { sequences: string[] }) {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        sequences[0],
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        sequences[1],
        2000
      ]}
      wrapper="span"
      speed={58}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='md:tracking-wider text-sm md:tex-lg lg:text-2xl'
    />
  );
};
export default CustomTypeAnimation;