import React from 'react'
import { getWorkExperience } from '@/data'
import { Button } from './ui/MovingBorder'
import { useTranslations } from 'next-intl'


function Experience() {
  const t = useTranslations('experience');
  const workExperience = getWorkExperience(t);
  return (
    <section className='pt-20 relative' id='experience'>
      <h1 className='heading'>
        {t("sectionTitlePrefix")} {' '}
        <span className='text-[#00C6FF]'>{t("sectionTitleHighlight")}</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {
          workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius='1.75rem'
              className='flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-default'
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))
        }
      </div>
    </section>
  )
}

export default Experience