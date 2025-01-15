"use client"
import React, { useState } from 'react';
import animationData from '@/data/confetti.json';
import Lottie from 'react-lottie';
import MagicBtn from './MagicBtn';
import { IoCloudDownload, IoCloudDownloadOutline, IoCodeDownloadSharp, IoCopyOutline, IoDownload, IoDownloadOutline, IoDownloadSharp } from 'react-icons/io5';
import { IoIosDownload, IoMdDownload } from 'react-icons/io';

function CustomLottie() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    window.open("/Leonardo Fuentes Claros_CV.pdf");
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
          title={copied ? 'CV opened!' : 'Download my CV'}
          icon={<IoCloudDownloadOutline/>}
          position="left"
          otherClasses='!bg-[#161a31] lg:px-16'
          handleClick={handleCopy}
        />
    </>
  )
}

export default CustomLottie