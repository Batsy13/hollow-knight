import { About } from "./home/about";
import { Artwork } from "./home/artwork";
import { Gameplay } from "./home/gameplay";
import { HeroSection } from "./home/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Gameplay />
      <Artwork />
    </>
  );
}
