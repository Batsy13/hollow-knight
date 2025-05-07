import { GameplayItem } from "@/app/home/components/gameplay-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const gameplayItems = [
  {
    title: "Exploration",
    image: "/artwork/image.png",
    video: "/gameplay/Download.mp4",
  },
  {
    title: "Combat",
    image: "/artwork/image.png",
    video: "/gameplay/Download.mp4",
  },
  {
    title: "Charms",
    image: "/artwork/image.png",
    video: "/gameplay/Download.mp4",
  },
  {
    title: "Bosses",
    image: "/artwork/image.png",
    video: "/gameplay/Download.mp4",
  },
  {
    title: "Lore",
    image: "/artwork/image.png",
    video: "/gameplay/Download.mp4",
  },
];

export const Gameplay = () => {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-black">
      <h2 className="absolute text-[#FFF] text-[32px] top-10 font-bold font-cinzel">
        Delve Deeper into Hallownest's Depths
      </h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[90%] max-w-[1400px] flex flex-col gap-4 overflow-visible"
      >
        <CarouselContent className="overflow-visible">
          {gameplayItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <GameplayItem
                title={item.title}
                image={item.image}
                video={item.video}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex gap-2 items-center justify-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};
