"use client";

export default function Header() {
  return (
    <div className="flex flex-wrap gap-10 md:gap-0 justify-around items-center min-h-1/2 mt-12 md:border-b md:border-b-white px-3 md:px-6">
      {/* <div className="flex justify-center items-center">
        <img src="/esquerda.png" alt="esquerda" width={300} />
      </div>
      <div className="flex justify-center items-center">
        <img
          className="hidden md:block"
          src="/meio.png"
          alt="meio"
          width={800}
        />
        <img src="/direita.png" width={230} className="md:hidden" alt="" />
      </div>
      <div className="flex justify-center items-center border-b border-b-white md:border-b-0">
        <img
          className="hidden md:block"
          src="/direita.png"
          alt="direita"
          width={230}
        />
        <img className="md:hidden" src="/meio.png" alt="direita" width={800} />
      </div> */}
      <img src='/face_inscrições.png' width={1100} />
    </div>
  );
}
