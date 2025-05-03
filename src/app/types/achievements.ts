export type AchievementsProps = {
  icon: string;
  name: string;
  percent: string;
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
