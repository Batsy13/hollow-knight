import { AchievementsCardProps } from "@/app/types/achievements";
import { cn } from "@/lib/utils";
import Image from "next/image"

export const Achievements = ({
    achievement,
    onOpenDetails,
}: AchievementsCardProps) => {

    // const percentCeil = Math.round(Number(achievement.percent));

    // const gradientClass = `bg-[linear-gradient(90deg,rgba(89,255,255,1)_0%,rgba(89,255,255,0.53)_${percentCeil}%,rgba(0,0,0,1)_${percentCeil}%)]`;

    return (
        <div
            className={cn("p-4 bg-[#191918] rounded-[10px] backdrop-blur-[5px] hover:scale-[102%] transition-all duration-200")}
            onClick={() => onOpenDetails(achievement)}
        >
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <Image
                        src={achievement.icon}
                        alt="Achievement icon"
                        width={64}
                        height={64}
                    />
                    <div className="flex flex-col text-start">
                        <h4 className="text-[#FFF] font-bold text-[18px]">
                            {achievement.name}
                        </h4>
                        <p className="text-[#969696] text-[14px]">
                            {achievement.description}
                        </p>
                    </div>
                </div>
                <p>{achievement.percent}%</p>
            </div>
        </div>
    );
};
