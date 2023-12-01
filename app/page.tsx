/* eslint-disable @next/next/no-img-element */
"use client";

export default function Home() {
  return (
    <div className="flex flex-wrap md:flex-nowrap flex-col min-h-screen px-3 md:px-6">
      {/* First Row */}
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-around items-center min-h-1/2 mt-12 border-b border-b-white">
        <div className="flex justify-center items-center">
          <img src="/esquerda.png" alt="esquerda" width={300} />
        </div>
        <div className="flex justify-center items-center">
          <img src="/meio.png" alt="meio" width={800} />
        </div>
        <div className="flex justify-center items-center">
          <img src="/direita.png" alt="direita" width={230} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-around items-center min-h-1/2 my-12">
        <div className="flex justify-center items-center">
          <img src="/baixo-esquerda.png" alt="esquerda" width={300} />
        </div>
        <div className="flex justify-center items-center">
          {/* <img src="/grv.png" alt="meio" /> */}
        </div>
        <div className="flex justify-center items-center">
          <img src="/baixo-direita.png" alt="direita" width={300} />
        </div>
      </div>
    </div>
  );
}
