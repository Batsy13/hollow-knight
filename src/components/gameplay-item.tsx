import { Card, CardContent } from "./ui/card";

type GameplayItemProps = {
  title: string;
  image: string;
};

export const GameplayItem = ({ title, image }: GameplayItemProps) => {
  return (
    <Card
      className="border-[2px] border-[#8A8F98] bg-transparent rounded-[20px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-semibold">{title}</span>
      </CardContent>
    </Card>
  );
};
