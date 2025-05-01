import { AboutCard } from "@/components/about-card";
import { Home, Sword } from "lucide-react";

export const About = () => {
  return (
    <section className="h-screen w-full py-10 px-4 bg-black">
      <div className="w-[90%] m-auto xl:w-full text-center max-w-[1000px]">
        <h2 className="text-[#FFF] text-[32px] font-bold font-cinzel">
          What Awaits You?
        </h2>
        <p className="m-auto">
          {" "}
          Hollow Knight is a critically acclaimed 2D action-adventure
          Metroidvania set in the vast and haunting world of Hallownest. As the
          silent Knight, you'll traverse forgotten cities, encounter bizarre
          creatures, and battle powerful bosses in a quest to end a mysterious
          plague known as the Infection.
        </p>
      </div>

      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-3 place-items-start gap-4 py-14">
        <AboutCard
          image="https://hollowknight.wiki.fextralife.com/file/Hollow-Knight/hollow_knight_wiki_combat_shot_three.jpg"
          icon={Home}
          title="combat"
          description="lorem ipsum dolor it amet"
          className="col-span-2 row-span-2 h-full"
        />
          <AboutCard
            image="https://hollowknight.wiki.fextralife.com/file/Hollow-Knight/hollow_knight_wiki_combat_shot_three.jpg"
            icon={Sword}
            title="combat"
            description="lorem ipsum dolor it amet"
          />
          <AboutCard
            image="https://hollowknight.wiki.fextralife.com/file/Hollow-Knight/hollow_knight_wiki_combat_shot_three.jpg"
            icon={Sword}
            title="combat"
            description="lorem ipsum dolor it amet"
          />
      </div>
    </section>
  );
};
