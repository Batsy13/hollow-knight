import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/artwork-carousel";
import { ArtworkItem } from "@/app/home/components/artwork-item";

const artworkItems = [
  {
    title: "The Abyss",
    description:
      "The dark and mysterious depths beneath Hallownest, home to ancient horrors and the very essence of the Void.",
    image: "https://i.ytimg.com/vi/4XxRUH8DOIQ/maxresdefault.jpg",
  },
  {
    title: "Crystal Peak",
    description:
      "A shimmering mountain riddled with sharp crystals and crystalized creatures, featuring intricate platforming challenges and stunning beauty.",
    image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/hollow-knight-wiki/6/6a/Crystal_Peak_13.png?width=1280",
  },
  {
    title: "Dirtmouth",
    description:
      "A quiet and humble village perched above the forgotten kingdom of Hallownest, serving as a refuge for weary travelers.",
    image: "/artwork/image.png",
  },
  {
    title: "Deepnest",
    description:
      "An intricate web of tunnels and caverns inhabited by grotesque arachnids and crawling horrors, a place of pure dread and despair.",
    image: "/artwork/image.png",
  },
  {
    title: "Queen's Gardens",
    description:
      "A lush and mysterious oasis, now overgrown with wild vines and loyal defenders, emanating an aura of melancholic beauty.",
    image: "/artwork/image.png",
  },
  {
    title: "City of Tears",
    description:
      "The once majestic capital of Hallownest, now in ruins and shrouded in an eternal rain, echoing with lost glory and tragedy.",
    image: "/artwork/image.png",
  },
  {
    title: "Fungal Wastes",
    description:
      "A vibrant and humid swamp teeming with giant mushrooms and peculiar creatures, with a dense and alien atmosphere.",
    image: "/artwork/image.png",
  },
  {
    title: "Resting Grounds",
    description:
      "A somber and silent place where the remains of Hallownest find their rest, with an atmosphere of loss and reverence.",
    image: "/artwork/image.png",
  },
  {
    title: "Colosseum of Fools",
    description:
      "A brutal arena where warriors from across Hallownest seek glory and prove their worth in relentless combat.",
    image: "/artwork/image.png",
  },
  {
    title: "King's Pass",
    description:
      "The initial path into Hallownest, a desolate and broken road hinting at the kingdom's fallen state.",
    image: "/artwork/image.png",
  },
];

export const Artwork = () => {
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center">
      <div className="w-[90%] h-[90%] flex items-center justify-center">
        <Carousel className="w-full h-full grid">
          <CarouselContent className="h-full w-full shrink gap-4">
            {artworkItems.map((item, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <ArtworkItem
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
