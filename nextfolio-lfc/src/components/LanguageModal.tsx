"use client";
import React from "react";
import {
  // Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "./ui/animatedLanguageModal";
import MagicBtn from "./ui/MagicBtn";

export function LanguageModal() {
  const { open, setOpen } = useModal(); // Hook from LanguageModal

  // Control language selection
  const handleSelect = (lang: "es" | "en") => {
    if (lang == "es") {
      window.location.href = "/es";
      localStorage.setItem("languageModalShown", "true");
    } else {
      window.location.href = "/en";
      localStorage.setItem("languageModalShown", "true");
    }
    setOpen(false);
  };

  if (!open) return null;
  return (
    <>
      {open && (
        <div className="py-40  flex items-center justify-center z-[6000] fixed">
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Por favor, selecciona tu {" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  idioma
                </span>{" "}
                🌐
              </h4>
              <div className="flex justify-center flex-col  mx-auto gap-1">
                <MagicBtn
                  title="Español"
                  icon={<div className="font-bold text-xs" >(ES)</div>}
                  position="left"
                  handleClick={() => {
                    handleSelect('es')
                  }}
                  otherClasses="xs:mt-0 sm:mt-0 md:mt-0 xl:mt-0 2xl:mt-0"
                />
                <MagicBtn
                  title="English"
                  icon={<span className="font-bold text-xs" >(EN)</span>}
                  position="left"
                  handleClick={() => {
                    handleSelect('en')
                  }}
                />
              </div>
            </ModalContent>
          </ModalBody>
        </div>
      )}
    </>
  );
}
