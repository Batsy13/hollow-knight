"use client";

import { useState } from "react";
import { Header } from "../header";
import { AchievementsProps } from "../types/achievements";
import { processedAchievements } from "./achievements-data";
import { Achievements } from "./components/achievement";
import { AchievementDetails } from "./components/achievements-details";

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementsProps | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleOpenDetails = (achievement: AchievementsProps) => {
    setSelectedAchievement(achievement);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <Header />
      <main className="w-[90%] mx-auto xl:max-w-[1400px] text-center flex flex-col gap-4 pb-10">
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
          {processedAchievements.map(
            (item: AchievementsProps, index: number) => (
              <Achievements
                key={index}
                achievement={item}
                onOpenDetails={handleOpenDetails}
              />
            )
          )}
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