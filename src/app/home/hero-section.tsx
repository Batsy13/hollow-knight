"use client";

import Image from "next/image";
import knight from "../../../public/home/knight.svg";
import hollowtitle from "../../../public/home/hollow-knight.svg";
import bg from "../../../public/home/background.jpg";
import { motion } from "motion/react";
import { Header } from "../header";

export const HeroSection = () => {
  return (
    <main
      className="relative bg-no-repeat bg-cover bg-center h-screen"
      style={{
        background: `linear-gradient(180deg,rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 1) 100%), url(${bg.src})`,
      }}
    >
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center">
        <motion.div
          className="absolute"
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: 1,
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
            duration: 3,
          }}
        >
          <Image
            src={knight.src}
            alt="Knight"
            width={710}
            height={696}
            className="translate-x-3 xl:w-[600px] xl:h-[602px] 2xl:w-auto 2xl:h-auto"
          ></Image>
        </motion.div>
        <motion.div
          className="translate-y-20 sm:translate-y-30 md:translate-y-40 lg:translate-y-64"
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: [0, 10, 0],
            opacity: 1,
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            },
            duration: 3,
            delay: 1
          }}
        >
          <Image
            src={hollowtitle.src}
            alt="Title"
            width={1062}
            height={421}
          ></Image>
        </motion.div>
      </div>
    </main>
  );
};
