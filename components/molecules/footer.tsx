"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <Link
      href="https://grv.art.br"
      target="_blank"
      className="flex flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-around items-center min-h-1/2 my-12"
    >
      <div className="flex justify-center items-center">
        <img src="/baixo-esquerda.png" alt="esquerda" width={300} />
      </div>
      <div className="flex justify-center items-center">
        <img src="/grv.png" alt="meio" width={90} />
      </div>
      <div className="flex justify-center items-center">
        <img src="/baixo-direita.png" alt="direita" width={300} />
      </div>
    </Link>
  );
}
