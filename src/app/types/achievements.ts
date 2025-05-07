export type AchievementsProps = {
  icon: string;
  name: string;
  percent: string;
  description: string;
  howToGet: string;
  prerequisites: string[];
  location: string[]; 
};

export type AchievementsDetailsProps = {
  achievement: AchievementsProps | null;
  open: boolean;
  onClose: () => void;
};

export type AchievementsCardProps = {
  achievement: AchievementsProps;
  onOpenDetails: (achievement: AchievementsProps) => void;
};
