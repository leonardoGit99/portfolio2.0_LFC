"use client"
import React, { useState } from 'react';
import animationData from '@/app/data/confetti.json';
import Lottie from 'react-lottie';
import MagicBtn from './MagicBtn';
import { IoCopyOutline } from 'react-icons/io5';

function CustomLottie() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText('leonardofuentesclaros@gmail.com');
  }
  return (
    <>
      <Lottie
        options={{
          loop: copied,
          autoplay: copied,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
      />
        <MagicBtn
          title={copied ? 'Email Copied!' : 'Copy my email'}
          icon={<IoCopyOutline />}
          position="left"
          otherClasses='!bg-[#161a31] lg:px-16'
          handleClick={handleCopy}
        />
    </>
  )
}

export default CustomLottie