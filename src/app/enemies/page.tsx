"use client";

import { useState } from "react";
import { Header } from "../header";
import { Enemies } from "./enemies-data";

export default function EnemiesPage() {
  const [search, setSearch] = useState("");

  const filteredEnemies = Enemies.filter((Enemies) =>
    Enemies.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(search, filteredEnemies, Enemies);

  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <main className="w-[90%] m-auto xl:w-full text-center py-10 px-4 h-fit">
        <h1 className="text-[#FFF] text-[32px] font-bold font-cinzel">
          Enemies
        </h1>
        <p className="max-w-[1400px] m-auto mb-8">
          Track your progress through Hallownest with these challenging feats of
          skill and exploration.
        </p>
        <input
          type="text"
          placeholder="Grimm..."
          className="border border-[#505050] rounded-[8px] px-4 py-2 w-full max-w-[1400px] focus:outline-0"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <ul className="grid grid-cols-5 gap-16 p-16 overflow-hidden">
          {filteredEnemies.map((enemy) => (
            <li
              key={enemy.id}
              className="border border-[#505050] p-8 rounded-[8px] h-[400px]"
            >
              <h2 className="text-[#FFF]">{enemy.name}</h2>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
