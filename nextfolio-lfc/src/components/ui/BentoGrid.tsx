import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "@/components/ui/GridGlobe";
import { stackList } from "@/app/data";
import CustomLottie from "./CustomLottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   justify-between flex flex-col border border-white/[0.1] dark:bg-black dark:border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >

      {/* First grid item [1][1] - laptop img */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          }
        </div>


        {/* Second grid item [1][2] - squeleton img */}
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {
            spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover object-center w-full h-full'}
              />
            )
          }
        </div>

        {/* Third grid item [1][3] - animated background*/}
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
          </BackgroundGradientAnimation>
        )}


        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 lg:pt-3'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans text-lg font-bold lg:text-3xl max-w-96 z-10 dark:text-neutral-200">
            {title}
          </div>
          {/* Fourth grid item [2][1] - text and globe component*/}
          {
            id === 2 && (
              <GridGlobe />
            )
          }

          {/* Fifth grid item [2][2] - tech stack*/}
          {
            id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 lg:gap-8">
                  {stackList[0].map((item, idx) => (
                    <span key={idx} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))
                  }
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                  {stackList[1].map((item) => (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))
                  }
                </div>
              </div>
            )
          }
          {/* Sixth item [2][3] */}
          {
            id === 6 && (
              <div className="mt-10 relative">
                <div className={`absolute -bottom-5 sm:-bottom-5 md:-bottom-7 lg:-bottom-10 right-0`}>
                  <CustomLottie />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};
