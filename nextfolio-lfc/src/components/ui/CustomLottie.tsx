"use client"
import React from 'react';
import MagicBtn from './MagicBtn';
import { IoCloudDownloadOutline, } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

function CustomLottie({ btnLabel }: { btnLabel?: string }) {
  const pathname = usePathname();
  const handleOpen = () => {
    if (pathname.startsWith('/es')) {
      window.open("/cv/cv-es.pdf");
    } else {
      window.open("/cv/cv-en.pdf");
    }
  }
  return (
    <MagicBtn
      title={btnLabel || ""}
      icon={<IoCloudDownloadOutline />}
      position="left"
      otherClasses='!bg-[#161a31]'
      handleClick={handleOpen}
    />
  )
}

export default CustomLottie