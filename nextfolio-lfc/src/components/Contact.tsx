"use client"
import React, { useEffect, useState } from 'react'
import MagicBtn from './ui/MagicBtn'
import { FaLocationArrow } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { Drawer } from './ui/drawer'
import { ContactForm } from './ContactForm'
import { IoCheckmarkCircle } from 'react-icons/io5';


function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);
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

  const [sendState, setSendState] = React.useState<{
    loading: boolean;
    success: boolean;
    error: boolean;
  }>({
    loading: false,
    success: false,
    error: false
  });
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
        {
          sendState.success ? (
            <div className='flex items-center justify-center text-white-200 rounded-full gap-2 font-semibold text-xl h-12'>
              {t("messageSent")} <IoCheckmarkCircle className='text-green-400' />
            </div>
          ) : (
            <a onClick={() => handleContactClick()}>
              <MagicBtn
                title={t("buttonLabel")}
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          )
        }
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          title={" "}
        >
          <ContactForm
            sendState={sendState}
            setSendState={setSendState}
            onClose={onClose}
            title={t("contactForm.title")}
            subtitle={t("contactForm.subtitle")}
            nameLabel={t("contactForm.nameLabel")}
            lastNameLabel={t("contactForm.lastNameLabel")}
            emailLabel={t("contactForm.emailLabel")}
            subjectLabel={t("contactForm.subjectLabel")}
            messageLabel={t("contactForm.messageLabel")}
            subjectPlaceHolder={t("contactForm.subjectPlaceHolder")}
            messagePlaceHolder={t("contactForm.messagePlaceHolder")}
            sendBtnLabel={t("contactForm.sendBtnLabel")}
            sendingBtnLabel={t("contactForm.sendingBtnLabel")}
            sentBtnLabel={t("contactForm.sentBtnLabel")}
          />
        </Drawer>
      </div>
    </section>
  )
}

export default Contact