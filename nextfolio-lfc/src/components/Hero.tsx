"use client"
import React, { useEffect } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import MagicBtn from './ui/MagicBtn'
import { FaLocationArrow } from 'react-icons/fa'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import profilePhoto from "../../public/leonardo-fuentes-claros.webp";
import CustomTypeAnimation from '@/components/ui/CustomTypeAnimation';
import VisitCounter from './VisitCounter'
import { useTranslations } from 'next-intl'
import { useModal } from './ui/animatedLanguageModal'

function Hero() {
  const t = useTranslations('hero');

  const { setOpen } = useModal();
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("languageModalShown");
    if (!hasSeenModal) {
      setOpen(true);
    }
  }, []);

  return (
    <section className='pb-20'> {/* pt-36 */}
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10  left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28  left-80 h-[80vh] w-[50vw]' fill='#A0E7FF' />
      </div>
      <div className="h-screen w-full dark:bg-black-100  dark:bg-grid-white/[0.03] bg-black-100  bg-grid-white/[0.03] flex justify-center items-center top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            {/* Subtitle */}
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              {t("tagline")}
            </h2>
            <VisitCounter
              viewsLabel={t("viewsLabel")}
              loadingLabel={t("loadingLabel")}
            />
            {/* Title */}
            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words={t("mainTitle")}
            />
            {/* Paragraph */}
            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl flex flex-wrap justify-center items-center gap-1">
              <span>{t("typeAnimationText.staticOne")}</span>
              <CustomTypeAnimation
                sequences={[
                  t("typeAnimationText.animationOne"),
                  t("typeAnimationText.animationTwo"),
                  t("typeAnimationText.animationThree")
                ]}
                staticText={t("typeAnimationText.animationTwo")}
              />
              <span>{t("typeAnimationText.staticTwo")}</span>
            </div>
            {/* Avatar */}
            <CardContainer className="inter-var mb-6 md:mb-0">
              <CardItem translateZ="100" className="w-full h-full">
                <Image
                  src={profilePhoto}
                  height="1000"
                  width="1000"
                  className="h-28 w-28 object-cover rounded-full group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
            <Link href={'#about'}>
              <MagicBtn
                title={t("buttonText")}
                icon={<FaLocationArrow />}
                position='right'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero