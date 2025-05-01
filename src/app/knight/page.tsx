import { Header } from "../header";

export default function KnightPage() {
  return (
    <div className="h-screen w-full bg-black">
      <Header />
      <main className="w-[90%] m-auto xl:w-full text-center py-10 px-4">
        <h1 className="text-[#FFF] text-[32px] font-bold font-cinzel">
          Knight
        </h1>
        <p className="max-w-[1000px] m-auto">
          Track your progress through Hallownest with these challenging feats of
          skill and exploration.
        </p>
      </main>
    </div>
  );
}
