"use client";

import { useState } from "react";
import { Header } from "../header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  AchievementsCardProps,
  AchievementsDetailsProps,
  AchievementsProps,
} from "../types/achievements";
import { processedAchievements } from "./achievements-data";

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementsProps | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleOpenDetails = (achievement: AchievementsProps) => {
    setSelectedAchievement(achievement);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <main className="w-[90%] mx-auto xl:w-full text-center px-4 flex flex-col gap-4 pb-10">
        <div className="py-10">
          <h1 className="text-[#FFF] text-[32px] font-bold font-cinzel">
            Achievements
          </h1>
          <p className="max-w-[1000px] m-auto">
            Track your progress through Hallownest with these challenging feats
            of skill and exploration.
          </p>
        </div>
        <div className="grid w-full h-full grid-cols-3 gap-8">
          {processedAchievements.map((item: AchievementsProps, index: number) => (
            <Achievements
              key={index}
              achievement={item}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </main>
      <AchievementDetails
        achievement={selectedAchievement}
        open={detailsOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
}

const Achievements = ({
  achievement,
  onOpenDetails,
}: AchievementsCardProps) => {
  const { icon, name, percent } = achievement;

  return (
    <div
      className="bg-transparent rounded-[5px] shadow-[0_0_5px_1px_#1e2ebd] text-[#1e2ebd] p-4 hover:scale-[102%] transition-all duration-200"
      onClick={() => onOpenDetails({ icon, name, percent })}
    >
      <div className="flex justify-between items-center">
        <Image src={icon} alt="Achievement icon" width={64} height={64}/>
        <p>{name}</p>
        <p>{percent}</p>
      </div>
    </div>
  );
};

const AchievementDetails = ({
  achievement,
  open,
  onClose,
}: AchievementsDetailsProps) => {
  if (!achievement) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="flex flex-col max-w-[90%] max-h-[90%] h-full bg-[rgba(11,17,22,0.3)] rounded-4 shadow-[0_4px_30px_#00000020] backdrop-blur-[5px] border border-[rgba(10,31,51,0.3)]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="rounded-[10px] overflow-hidden border border-[#000] h-[80px] w-[80px]">
              <Image
                src={achievement.icon}
                alt="icon"
                width={100}
                height={100}
                className="bg-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between">
              <DialogTitle className="text-2xl">{achievement.name}</DialogTitle>
              <div className="flex items-center gap-2 mt-1">
                <div className="bg-[#0c0d35] px-4 py-2 border border-[#1e156d] shadow-xl rounded-[20px] text-[12px]">
                  {achievement.percent}% of players
                </div>
              </div>
            </div>
          </div>
          <DialogDescription className="text-lg mt-4">
            Description
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">How to Unlock</h4>
            {/* <p className="">{achievement.howToGet}</p> */}
          </div>

          {/* {achievement.prerequisites && achievement.prerequisites.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Prerequisites</h4>
              <ul className="list-disc pl-5 space-y-1">
                {achievement.prerequisites.map((prereq, idx) => (
                  <li key={idx}>{prereq}</li>
                ))}
              </ul>
            </div>
          )} */}

          <div>
            <h4 className="text-lg font-semibold mb-2">Locations</h4>
            <div className="grid grid-cols-1 gap-4">
              {/* {achievement.locations.map((location, idx) => (
                <div 
                  key={idx}
                  className="p-4 border rounded-md"
                >
                  <p className="">{location}</p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
