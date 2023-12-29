"use client";

export default function HomageCard({ heading, title, body }: any) {
  return (
    <button className="w-72 min-h-96 m-10 text-left hover:opacity-70 transition-all duration-200">
      <div className="mb-2 font-bold text-xl uppercase">
        <span>{heading}</span>
      </div>
      <div className="bg-secondary text-black p-3">
        <span className="uppercase font-black text-xl mb-4">{title}</span>
        <p className="break-all text-sm mb-4">{body}</p>
        <img src="/chico.png" alt="teste" />
      </div>
    </button>
  );
}
