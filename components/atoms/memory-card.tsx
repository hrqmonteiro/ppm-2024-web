"use client";

export default function MemoryCard({ heading, src }: any) {
  return (
    <button
      className={`m-10 text-left hover:opacity-70 transition-all duration-200 ${
        heading === "2022/2023" && "shadow-2xl shadow-secondary"
      }`}
    >
      <img className="rounded-lg" src={src} alt="teste" />

      <div className="mt-2 font-bold text-xl uppercase">
        <span>{heading}</span>
      </div>
    </button>
  );
}
