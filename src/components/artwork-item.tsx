import { Card, CardContent } from "./ui/card";
import image2 from "../../public/artwork/image.png";
import { url } from "inspector";

type ArtworkItemProps = {
  title: string;
  description: string;
  image: string;
};

export const ArtworkItem = ({
  title,
  description,
  image,
}: ArtworkItemProps) => {
  return (
    <Card
      className="flex items-start bg-transparent justify-end w-full h-full overflow-hidden bg-cover bg-no-repeat bg-center p-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CardContent className="py-4 flex flex-col gap-2">
        <h3 className="text-[24px] font-bold text-[#FFF]">{title}</h3>
        <p className="text-[#FFF]">{description}</p>
      </CardContent>
    </Card>
  );
};
