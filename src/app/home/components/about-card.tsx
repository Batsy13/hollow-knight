import { LucideProps } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type AboutCardProps = {
  image: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  description: string;
  className?: string;
};

export const AboutCard = ({
  image,
  title,
  icon,
  description,
  className,
}: AboutCardProps) => {
  const Icon = icon;

  return (
    <div
      className={`w-fit rounded-[10px] overflow-hidden border-[1px] border-[#03237850] hover:-translate-y-1 hover:shadow-[0_0_20px_10px_#03237850] transition-all ease-in-out ${className}`}
    >
      <div className="">
        <Image
          src={image}
          alt="Card Image"
          height={1920}
          width={1080}
          unoptimized
        ></Image>
      </div>
      <div className="flex h-full grow flex-col gap-4 py-6 px-4 bg-gray-900/40">
        <div className="flex items-center gap-2">
            <Icon className="size-6"></Icon>
          <h3 className="font-bold text-[24px]">{title}</h3>
        </div>
        <p className="text-[#FFF]">{description}</p>
      </div>
    </div>
  );
};
