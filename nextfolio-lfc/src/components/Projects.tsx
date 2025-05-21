import React from 'react'
import { getProjects } from '@/data/index'
import { PinContainer } from './ui/PinContainer'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'
function Projects() {
  const t = useTranslations('projects');
  const projects = getProjects(t);
  return (
    <section className='pt-20 relative' id={'projects'}>
      <h1 className='heading'>
        {t("sectionTitlePrefix")} {' '}
        <span className='text-[#00C6FF]'>{t("sectionTitleHighlight")}</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-7 mt-10'>
        {projects.map(({
          id,
          title,
          description,
          img,
          imgRotation,
          iconLists,
          liveDemoLink,
          state,
          GithubLink
        }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer
              title={liveDemoLink}
              href={liveDemoLink}
              state={state}
            >
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className='z-10 absolute bottom-0 w-[450px] h-full  object-contain rounded-t-lg'
                  style={imgRotation}
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {description}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div className='border border-white/[0.1] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2})` }}>
                      <img
                        key={index}
                        src={icon}
                        alt={`icon-${index}`}
                        className='p-2'
                      />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-[#A0E7FF]'>
                    {t("checkButtonLabel")}
                  </p>
                  <FaArrowRight className='ms-3' color='#A0E7FF' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects