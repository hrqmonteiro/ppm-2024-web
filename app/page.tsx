"use client";

import { useRouter } from "next/navigation";

export default function Before() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-full bg-black text-white flex flex-col justify-center items-center py-2 my-4">
        <h1 className="text-3xl font-black md:text-5xl">PPM 2024</h1>
        <h2 className="uppercase font-light text-xs border-b border-b-white">
          From the natural to the artificial with a grip on reality
        </h2>
      </div>

      <button
        onClick={() => router.push("/before")}
        className="py-4 px-8 bg-black uppercase text-xs font-black text-white border border-black hover:border-white hover:opacity-70 transition-all duration-200"
      >
        Entre no mundo do PPM
      </button>
    </div>
  );
}
