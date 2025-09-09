"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getNavItems } from "@/data";
import { IoLanguage } from 'react-icons/io5';
import { useModal } from './animatedLanguageModal';

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  //Translations
  const t = useTranslations('nav')
  const navItems = getNavItems(t)
  // Language Modal
  const { setOpen } = useModal();

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleLanguageClick = () => {
    setOpen(true);
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[2000] top-10 inset-x-0 mx-auto  px-10  py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-9 sm:space-x-7",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => {
          const Icon = navItem.icon;
          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn("relative dark:text-neutral-50 flex items-center sm:space-x-1 md:space-x-2 lg:space-x-2 text-neutral-600  dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block"><Icon /></span>
              <span className="text-xs sm:text-sm lg:text-sm !cursor-pointer hidden sm:inline" >{navItem.name}</span>
            </Link>
          )
        })}
        <IoLanguage
          className="relative  hover:cursor-pointer  hover:dark:hover:text-neutral-300 hover:text-neutral-500"
          onClick={() => handleLanguageClick()}
        />
      </motion.div>
    </AnimatePresence>
  );
};
