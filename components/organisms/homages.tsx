"use client";

import HomageCard from "../atoms/homage-card";

export default function Homages() {
  return (
    <section className="bg-black text-white min-h-svh flex flex-col items-center py-10">
      <div className="flex justify-between my-10">
        <span className="uppercase font-black text-white text-5xl">
          Homenageado(a)s
        </span>
      </div>

      <div className="flex my-10">
        <HomageCard
          heading="Criação"
          title="Chico Science"
          body="Homenageado da 7ª edição - modalidade Criação | 84 categorias -
          Cerimônia de Premiação | em 2023 Brasília - Distrito Federal"
        />
        <HomageCard
          heading="Produção"
          title="Chico Science"
          body="Homenageado da 7ª edição - modalidade Criação | 84 categorias -
          Cerimônia de Premiação | em 2023 Brasília - Distrito Federal"
        />
        <HomageCard
          heading="Educação"
          title="Chico Science"
          body="Homenageado da 7ª edição - modalidade Criação | 84 categorias -
          Cerimônia de Premiação | em 2023 Brasília - Distrito Federal"
        />
        <HomageCard
          heading="Convergência"
          title="Chico Science"
          body="Homenageado da 7ª edição - modalidade Criação | 84 categorias -
          Cerimônia de Premiação | em 2023 Brasília - Distrito Federal"
        />
      </div>
    </section>
  );
}
