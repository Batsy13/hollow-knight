import { GameplayItem } from "@/components/gameplay-item";
import { Card, CardContent } from "@/components/ui/card";
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
    image: "/artwork/image.png"
  },
  {
    title: "Combat",
    image: "/artwork/image.png"
  },
  {
    title: "Charms",
    image: "/artwork/image.png"
  },
  {
    title: "Bosses",
    image: "/artwork/image.png"
  },
  {
    title: "Lore",
    image: "/artwork/image.png"
  },
]

export const Gameplay = () => {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-gradient-to-b from-black to-gray-900">
      <h2 className="absolute text-[#FFF] text-[32px] top-10 font-bold font-cinzel">
        Delve Deeper into Hallownest's Depths
      </h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[90%] max-w-[1400px] flex flex-col gap-4"
      >
        <CarouselContent>
          {gameplayItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <GameplayItem title={item.title} image={item.image}/>
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
