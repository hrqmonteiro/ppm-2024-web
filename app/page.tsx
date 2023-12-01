/* eslint-disable @next/next/no-img-element */
"use client";

export default function Home() {
  return (
    <>
      <div className="px-3 md:px-6 flex flex-wrap md:flex-nowrap md:justify-around my-10">
        <div className="my-6 md:my-2 flex justify-center items-center w-full">
          <img src="/esquerda.svg" alt="esquerda" />
        </div>

        <div className="my-6 md:my-2 flex justify-center items-center w-full">
          <img src="/meio.svg" alt="meio" />
        </div>

        <div className="my-6 md:my-2 flex justify-center items-center w-full">
          <img src="/direita.svg" alt="direita" />
        </div>
      </div>
      <div className="px-3 md:px-6 flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-around md:justify-around">
        <div className=" my-6 md:my-2 flex flex-wrap gap-10 justify-center">
          <img src="/baixo-esquerda.svg" alt="esquerda" />
          <img src="/grv.svg" alt="esquerda" />
          <img src="/baixo-direita.svg" alt="esquerda" />
        </div>
      </div>
    </>
  );
}
