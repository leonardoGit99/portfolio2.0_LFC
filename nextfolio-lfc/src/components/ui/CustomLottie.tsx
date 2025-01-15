"use client"
import React from 'react';
import Lottie from 'react-lottie';
import MagicBtn from './MagicBtn';
import { IoCloudDownloadOutline, } from 'react-icons/io5';

function CustomLottie() {
  const handleOpen = () => {
    window.open("/Leonardo Fuentes Claros_CV.pdf");
  }
  return (
    <MagicBtn
      title={'Download my CV'}
      icon={<IoCloudDownloadOutline />}
      position="left"
      otherClasses='!bg-[#161a31]'
      handleClick={handleOpen}
    />
  )
}

export default CustomLottie