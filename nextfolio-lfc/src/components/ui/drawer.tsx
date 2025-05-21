"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { IoClose } from 'react-icons/io5';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: "left" | "right";
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
}) => {
  const sideClass = position === "left" ? "left-0" : "right-0";

  const initialX = position === "left" ? "-100%" : "100%";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-[2500]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className={`fixed top-0 ${sideClass} h-full w-full md:w-[28rem] bg-white shadow-2xl z-[5000] p-0 text-white-200`}
            initial={{ x: initialX }}
            animate={{ x: 0 }}
            exit={{ x: initialX }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <div className="absolute right-5 top-4 md:right-10 md:top-8 m-0">
              <button onClick={onClose}>
                <IoClose className="text-white text-xl" />
              </button>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
