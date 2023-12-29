"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-3 md:px-6 py-5 bg-cyan-500/95 flex justify-between text-white font-bold">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-black">
            PPM
          </Link>
          <ul className="hidden md:inline-flex uppercase text-white/80">
            <Link href="#event" className="mr-2 uppercase">
              Evento
            </Link>
            <Link href="#atractions" className="mr-2 uppercase">
              Atrações
            </Link>
            <Link href="#homages" className="mr-2 uppercase">
              Homenageado(a)s
            </Link>
            <Link href="#memories" className="mr-2 uppercase">
              Memória
            </Link>
            <Link href="#contact" className="mr-2 uppercase">
              Inscrições
            </Link>
            <Link href="#" className="mr-2 uppercase text-white/60">
              Votação
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
