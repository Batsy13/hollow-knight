"use client"

import Image from "next/image";

import bg from "../../../public/background.jpg";

export const HeroSection = () => {
  return (
    <main
      className="bg-no-repeat bg-cover bg-center h-screen"
      style={{
        background: `linear-gradient(180deg,rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 1) 100%), url(${bg.src})`,
      }}
    >
      <header className="h-[100px] w-[90%] 2xl:w-full max-w-[1400px] mx-auto flex py-2.5 items-center justify-between">
        <div>
          <Image
            src="https://cdn2.steamgriddb.com/icon/602d1305678a8d5fdb372271e980da6a.ico"
            alt="Logo Hollow Knight"
            width={65}
            height={70}
            unoptimized
          ></Image>
        </div>
        <nav>
          <ul className="flex gap-14 text-[#8A8F98]">
            <li className="cursor-pointer hover:text-[#F5F5F5]">The Knight</li>
            <li className="cursor-pointer hover:text-[#F5F5F5]">Achievements</li>
            <li className="cursor-pointer hover:text-[#F5F5F5]">Charms</li>
            <li className="cursor-pointer hover:text-[#F5F5F5]">Enemies</li>
          </ul>
        </nav>
        <button className="bg-[#F5F5F5] rounded-[5px] text-[#181818] px-6 py-2 cursor-pointer font-bold">Map</button>
      </header>
    </main>
  );
};
