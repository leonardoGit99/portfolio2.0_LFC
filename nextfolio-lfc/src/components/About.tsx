import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { getInfoGridItems, } from '@/data/index'
import { useTranslations } from 'next-intl'

function About() {
  const t = useTranslations('about');
  const gridItems = getInfoGridItems(t);
  const btnLabel = t('buttonLabel');
  return (
    <section className='pt-10 lg:pt-20 relative' id="about" >
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            btnLabel={btnLabel}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default About