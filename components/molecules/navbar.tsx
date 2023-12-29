"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-5 bg-cyan-500/95 flex justify-between text-white font-bold">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-black">
            PPM
          </Link>
          <ul className="inline-flex uppercase text-white/80">
            <button className="mr-2 uppercase">Evento</button>
            <button className="mr-2 uppercase">Homenageado(a)s</button>
            <button className="mr-2 uppercase">Memória</button>
            <button className="mr-2 uppercase">Inscrições</button>
            <button disabled className="mr-2 uppercase disabled:text-white/60">
              Votação
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
