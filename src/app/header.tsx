import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-[100px] w-[90%] 2xl:w-full max-w-[1400px] mx-auto flex py-2.5 items-center justify-between">
      <Link href={"/"}>
        <Image
          src="https://cdn2.steamgriddb.com/icon/602d1305678a8d5fdb372271e980da6a.ico"
          alt="Logo Hollow Knight"
          width={65}
          height={70}
          unoptimized
        ></Image>
      </Link>
      <nav>
        <ul className="flex gap-14 text-[#8A8F98]">
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/knight"}>The Knight</Link>
          </li>
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/achievements"}>Achievements</Link>
          </li>
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/charms"}>Charms</Link>
          </li>
          <li className="cursor-pointer hover:text-[#F5F5F5]">
            <Link href={"/enemies"}>Enemies</Link>
          </li>
        </ul>
      </nav>
      <button className="bg-[#F5F5F5] rounded-[5px] text-[#181818] px-6 py-2 cursor-pointer font-bold">
        Map
      </button>
    </header>
  );
};
