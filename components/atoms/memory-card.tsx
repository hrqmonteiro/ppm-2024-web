"use client";

export default function MemoryCard({ heading, src }: any) {
  return (
    <button
      className={`m-10 text-left hover:opacity-70 transition-all duration-200 `}
    >
      <img
        className={`mb-10 rounded-lg ${
          heading === "2024" && "shadow-2xl shadow-primary"
        }`}
        src={src}
        width={230}
        alt="teste"
      />

      <div className="mt-2 font-bold text-xl uppercase">
        <span>{heading}</span>
      </div>
    </button>
  );
}
