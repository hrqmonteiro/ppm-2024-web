"use client";

import Link from "next/link";

export default function SubFooter() {
  return (
    <div className="bg-cyan-600/95 py-3 flex justify-between text-white">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center text-xs">
          <div className="mb-2">
            <span className="font-light">
              Copyright © 2023-2024 - Prêmio Profissional de Música - Todos os
              direitos reservados.
            </span>
          </div>
          <div className="mb-2">
            <span className="font-light">Desenvolvido por: </span>
            <Link
              href="https://www.jumatech.com.br"
              target="_blank"
              className="font-medium hover:opacity-70 transition-all duration-200"
            >
              JumaConsultoria
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
