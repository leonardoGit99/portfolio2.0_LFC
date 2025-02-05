"use client"
import React from 'react'
import MagicBtn from './ui/MagicBtn'
import { FaLocationArrow } from 'react-icons/fa'

function Contact() {
  const handleContactClick = () => {
    window.open('mailto:leonardofuentesclaros@gmail.com')
  }
  return (
    <section className='w-full pt-32 pb-32 relative' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className='w-full h-full opacity-60'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-[#00C6FF]'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a onClick={()=> handleContactClick()}>
          <MagicBtn
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
    </section>
  )
}

export default Contact