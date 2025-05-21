import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { getCertifications } from '@/data'
import { useTranslations } from 'next-intl'

function Certifications() {
  const t = useTranslations('certifications');
  const  certifications= getCertifications(t);
  return (
    <section className='pt-20 relative' id='certifications'>
      <h1 className='heading'>
        {t("sectionTitlePrefix")} {' '}
        <span className='text-[#00C6FF]'>{t("sectionTitleHighlight")}</span>
      </h1>
      <div className='flex flex-col items-center mt-20'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
          <InfiniteMovingCards
            items={certifications}
            direction='left'
            speed='normal'
          />
          {/* <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-10'>
            {
              companies.map(({ id, img, name, nameImg }) => (
                <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                  <img src={img} alt={name} className='md:w-10 w-5' />
                  <img src={nameImg} alt={name} className='md:w-24 w-20' />
                </div>
              ))
            }
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Certifications