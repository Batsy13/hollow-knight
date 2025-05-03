'use client'

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { useRef, useEffect } from "react";

type GameplayItemProps = {
  title: string;
  image: string;
  video: string;
};

export const GameplayItem = ({ title, image, video }: GameplayItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoAvailable = !!video;

  useEffect(() => {
    if (isVideoAvailable && videoRef.current) {
      videoRef.current.style.opacity = '1';
      const imageElement = videoRef.current.previousElementSibling as HTMLImageElement | null;
      if (imageElement) {
        imageElement.style.opacity = '0';
      }
    }
  }, [isVideoAvailable]); 

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      if (videoRef.current.currentTime > 0) {
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <Card
      className="border-[2px] border-[#8A8F98] bg-transparent rounded-[20px] overflow-hidden bg-no-repeat bg-cover bg-center py-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[1/1.2] w-full h-full">
        <Image
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isVideoAvailable && !videoRef.current ? 0 : videoRef.current ? 0 : 1 }}
          width={1920}
          height={1080}
        />
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          style={{ opacity: isVideoAvailable && !videoRef.current ? 1 : videoRef.current ? 1 : 0 }}
        />
        <CardContent
          className="absolute top-0 left-0 h-full w-full bg-black/50 text-white p-4 flex items-start justify-center"
          style={{ pointerEvents: videoRef.current ? 'none' : 'auto' }}
        >
          <span className="text-xl font-semibold text-center py-9">{title}</span>
        </CardContent>
      </div>
    </Card>
  );
};