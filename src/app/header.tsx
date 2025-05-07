"use client";

import { LoadingHeader } from "@/components/loading-header";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="h-[100px] w-[90%] 2xl:w-full max-w-[1400px] mx-auto flex py-2.5 items-center justify-between z-50">
      <Link href={"/"} className="flex-shrink-0">
        <Image
          src="https://cdn2.steamgriddb.com/icon/602d1305678a8d5fdb372271e980da6a.ico"
          alt="Logo Hollow Knight"
          width={65}
          height={70}
          unoptimized
        />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex gap-14 text-[#8A8F98]">
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/knight"}>The Knight</Link>
          </li>
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/charms"}>Charms</Link>
          </li>
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/achievements"}>Achievements</Link>
          </li>
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/enemies"}>Enemies</Link>
          </li>
        </ul>
      </nav>

      <button className="bg-[#F5F5F5] rounded-[5px] text-[#181818] px-6 py-2 cursor-pointer font-bold hidden md:block">
        Map
      </button>

      <div className="md:hidden flex items-center ">
        <button onClick={toggleMobileMenu} className="text-2xl text-[#F5F5F5]">
          <Menu />
        </button>

        {isMobileMenuOpen && (
          <div className="fixed flex flex-col items-center justify-start top-0 left-0 w-full h-full bg-black text-center py-4 shadow-md z-10">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-9 right-9 text-2xl text-[#F5F5F5]"
            >
              <X />
            </button>
            <ul className="flex flex-col items-center gap-4 text-[#8A8F98] mt-17">
              <li className="cursor-pointer">
                <Link href={"/"} className="flex-shrink-0">
                  <Image
                    src="https://cdn2.steamgriddb.com/icon/602d1305678a8d5fdb372271e980da6a.ico"
                    alt="Logo Hollow Knight"
                    width={65}
                    height={70}
                    unoptimized
                  />
                </Link>
              </li>
              <li className="cursor-pointer hover:text-[#F5F5F5]">
                <Link href={"/knight"} onClick={toggleMobileMenu}>
                  The Knight
                </Link>
              </li>
              <li className="cursor-pointer hover:text-[#F5F5F5]">
                <Link href={"/charms"} onClick={toggleMobileMenu}>
                  Charms
                </Link>
              </li>
              <li className="cursor-pointer hover:text-[#F5F5F5]">
                <Link href={"/achievements"} onClick={toggleMobileMenu}>
                  Achievements
                </Link>
              </li>
              <li className="cursor-pointer hover:text-[#F5F5F5]">
                <Link href={"/enemies"} onClick={toggleMobileMenu}>
                  Enemies
                </Link>
              </li>
              <Link
                href={"/map"}
                className="bg-[#F5F5F5] rounded-[5px] text-[#181818] px-6 py-2 mt-4 cursor-pointer font-bold inline-block"
                onClick={toggleMobileMenu}
              >
                Map
              </Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
