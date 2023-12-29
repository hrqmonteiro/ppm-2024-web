"use client";

import HomageCard from "../atoms/homage-card";

export default function Homages() {
  return (
    <section
      id="homages"
      className="bg-black text-white min-h-svh flex flex-col items-center py-10 px-3 md:px-6"
    >
      <div className="flex justify-between my-10">
        <span className="uppercase font-black text-white text-3xl md:text-5xl">
          Homenageado(a)s
        </span>
      </div>

      <div className="flex flex-wrap md:flex-nowrap my-10">
        <HomageCard
          heading="Criação"
          title="Lorem Ipsum"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur architecto ratione quas, ipsa illo voluptatibus vel voluptates aperiam odit sed dolorum corrupti iure, sapiente cum velit nostrum voluptas at."
        />
        <HomageCard
          heading="Produção"
          title="Lorem Ipsum"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur architecto ratione quas, ipsa illo voluptatibus vel voluptates aperiam odit sed dolorum corrupti iure, sapiente cum velit nostrum voluptas at."
        />
        <HomageCard
          heading="Educação"
          title="Lorem Ipsum"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur architecto ratione quas, ipsa illo voluptatibus vel voluptates aperiam odit sed dolorum corrupti iure, sapiente cum velit nostrum voluptas at."
        />
        <HomageCard
          heading="Convergência"
          title="Lorem Ipsum"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur architecto ratione quas, ipsa illo voluptatibus vel voluptates aperiam odit sed dolorum corrupti iure, sapiente cum velit nostrum voluptas at."
        />
      </div>
    </section>
  );
}
