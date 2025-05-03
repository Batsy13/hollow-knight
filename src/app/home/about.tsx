import { AboutCard } from "@/components/about-card";
import { Home, Sword } from "lucide-react";

export const About = () => {
  return (
    <section className="min-h-screen w-full py-10 px-4 bg-black">
      <div className="w-[90%] m-auto xl:w-full text-center max-w-[1000px] mb-8">
        <h2 className="text-[#FFF] text-[28px] md:text-[32px] font-bold font-cinzel mb-4">
          What Awaits You?
        </h2>
        <p className="m-auto text-sm md:text-base">
          Hollow Knight is a critically acclaimed 2D action-adventure
          Metroidvania set in the vast and haunting world of Hallownest. As the
          silent Knight, you'll traverse forgotten cities, encounter bizarre
          creatures, and battle powerful bosses in a quest to end a mysterious
          plague known as the Infection.
        </p>
      </div>

      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-3 place-items-center gap-6 py-8">
        <AboutCard
          image="https://hollowknight.wiki.fextralife.com/file/Hollow-Knight/hollow_knight_wiki_combat_shot_three.jpg"
          icon={Sword}
          title="Deep Exploration"
          description="Uncover hidden paths, ancient ruins, and vibrant characters as you delve into the interconnected world of Hallownest."
          className="xl:col-span-2 xl:row-span-2 w-full md:max-w-none h-full"
        />
        <AboutCard
          image="https://hollowknight.wiki.fextralife.com/file/Hollow-Knight/hollow_knight_wiki_combat_shot_three.jpg"
          icon={Home}
          title="Combat Mastery"
          description="Engage in fluid and precise combat, wielding your nail and powerful spells against a myriad of foes."
          className="w-full md:max-w-none"
        />
        <AboutCard
          image="https://hollowknight.wiki.fextralife.com/file/Hollow-Knight/hollow_knight_wiki_combat_shot_three.jpg"
          icon={Sword}
          title="Challenging Encounters"
          description="Test your skills against over 150 unique enemies and epic bosses, each with their own distinct behaviors and lore."
          className="w-full md:max-w-none"
        />
      </div>
    </section>
  );
};
