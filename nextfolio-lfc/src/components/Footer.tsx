"use client";
import React from 'react'
import { socialMedia } from '@/data'

function Footer() {
  return (
    <footer className='pb-10 relative'>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2025 Leonardo Fuentes Claros</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
              onClick={() => window.open(profile.url)}
            >
              <img src={profile.img} alt="social-network" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer