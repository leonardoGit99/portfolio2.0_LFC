"use client"
import React, { useState } from 'react'
import MagicBtn from './ui/MagicBtn'
import { FaLocationArrow } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { Drawer } from './ui/drawer'
import { ContactForm } from './ContactForm'

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }
  const handleContactClick = () => {
    // window.open('mailto:leonardofuentesclaros@gmail.com')
    handleDrawerOpen();
    console.log("Contact button clicked");
  }
  const t = useTranslations('contact');
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
          {t("sectionTitlePrefix")} <span className='text-[#00C6FF]'>{t("sectionTitleHighlight")}</span> {t("sectionTitlePostfix")}
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>{t("subtitle")}</p>
        <a onClick={() => handleContactClick()}>
          <MagicBtn
            title={t("buttonLabel")}
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
        <Drawer
          handleDrawerOpen={handleDrawerOpen}
          onClose={onClose}
          isOpen={isOpen}
          title={" "}
        >
          <ContactForm />
        </Drawer>
      </div>
    </section>
  )
}

export default Contact