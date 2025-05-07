import { AchievementsDetailsProps } from "@/app/types/achievements";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image"

export const AchievementDetails = ({
    achievement,
    open,
    onClose,
}: AchievementsDetailsProps) => {

    if (!achievement) return null;

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="flex flex-col max-w-[90%] max-h-[90%] xl:max-w-xl xl:h-auto h-full bg-[rgba(11,17,22,0.3)] rounded-4 shadow-[0_4px_30px_#00000020] backdrop-blur-[5px] border border-[rgba(10,31,51,0.3)]">
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
                        {achievement.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">How to Unlock</h4>
                        <p className="">{achievement.howToGet}</p>
                    </div>

                    {achievement.prerequisites &&
                        achievement.prerequisites.length > 0 && (
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Prerequisites</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    {achievement.prerequisites.map((prereq, idx) => (
                                        <li key={idx}>{prereq}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    <div>
                        <h4 className="text-lg font-semibold mb-2">Locations</h4>
                        <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[132px]">
                            {achievement.location.map((location, idx) => (
                                <div key={idx} className="p-4 border rounded-md">
                                    <p className="">{location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};