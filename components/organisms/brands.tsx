"use client";

import Link from "next/link";

const international = [
  {
    name: "MIDEM",
    url: "https://www.midem.com",
    src: "/brands/internacionais/MIDEM.png",
  },
];

const national = [
  {
    name: "Music Box Brasil",
    url: "",
    src: "/brands/nacionais/musicbox.png",
  },
];

const executiva = [
  {
    name: "GRV",
    url: "https://grv.art.br",
    src: "/brands/executiva/grv.png",
  },
];

const comunicacao = [
  {
    name: "Donna Midia",
    url: "",
    src: "/brands/comunicacao/donnamidia.jpg",
  },
  {
    name: "Cascelli Design",
    url: "",
    src: "/brands/comunicacao/cascelli.jpeg",
  },
  {
    name: "Casa Filme",
    url: "",
    src: "/brands/comunicacao/casafilme.png",
  },
];

const realizacao = [
  {
    name: "APBM",
    url: "",
    src: "/brands/realizacao/apmb.svg",
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-white text-black md:px-6 py-4 flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-start mx-8">
        <h3 className="uppercase text-sm font-light">Promoção Internacional</h3>
        <div className="flex justify-center items-center ">
          {international.map((brand, index: number) => (
            <Link
              className="m-8 hover:opacity-70 transition-all duration-200"
              key={index}
              href={brand.url}
              target="_blank"
            >
              <img
                className="invert h-12 object-contain"
                src={brand.src}
                alt={brand.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-start mx-8">
        <h3 className="uppercase text-sm font-light">Promoção Nacional</h3>
        <div className="flex justify-center items-center ">
          {national.map((brand, index: number) => (
            <Link
              className="m-8 hover:opacity-70 transition-all duration-200"
              key={index}
              href={brand.url}
              target="_blank"
            >
              <img
                className="invert h-12 object-contain"
                src={brand.src}
                alt={brand.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-start mx-8">
        <h3 className="uppercase text-sm font-light">Produção Executiva</h3>
        <div className="flex justify-center items-center ">
          {executiva.map((brand, index: number) => (
            <Link
              className="m-8 hover:opacity-70 transition-all duration-200"
              key={index}
              href={brand.url}
              target="_blank"
            >
              <img
                className="invert h-12 object-contain"
                src={brand.src}
                alt={brand.name}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-start mx-8">
        <h3 className="uppercase text-sm font-light">Realização</h3>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center ">
          {realizacao.map((brand, index: number) => (
            <Link
              className="m-8 hover:opacity-70 transition-all duration-200"
              key={index}
              href={brand.url}
              target="_blank"
            >
              <img
                className="invert h-12 object-contain"
                src={brand.src}
                alt={brand.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
