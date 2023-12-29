"use client";

import HomageCard from "../atoms/homage-card";
import MemoryCard from "../atoms/memory-card";

export default function Memories() {
  return (
    <section
      id="memories"
      className="bg-white text-black min-h-svh flex flex-col justify-center flex-wrap items-center py-10 px-3 md:px-6"
    >
      <div className="flex justify-between my-10">
        <span className="uppercase font-black text-5xl">
          Memória prêmio profissionais da música
        </span>
      </div>

      <div className="flex justify-center flex-wrap my-10">
        <div className="container mx-auto">
          <div className="flex justify-center flex-wrap">
            <MemoryCard heading="2024" src="/memoria-2024.png" />
            <MemoryCard heading="2022/2023" src="/memoria2022.png" />
            <MemoryCard heading="2020/2021" src="/memoria2020_2021.png" />
            <MemoryCard heading="2019" src="/memoria-2019.png" />
            <MemoryCard heading="2018" src="/memoria-2018.png" />
            <MemoryCard heading="2017" src="/memoria-2017.png" />
            <MemoryCard heading="2016" src="/memoria-2016.png" />
            <MemoryCard heading="2015" src="/memoria-2015.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
