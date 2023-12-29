"use client";

import {
  CalendarPlus,
  PersonSimpleWalk,
  Stairs,
  Trophy,
  UsersFour,
} from "@phosphor-icons/react";

export default function Masthead() {
  return (
    <section className="bg-black text-primary min-h-screen p-3 md:p-6 flex flex-col justify-center items-center">
      <div className="flex justify-between my-10">
        <p className="uppercase font-black text-secondary">
          Prêmio
          <br />
          profissionais
          <br />
          da música 8ª edição
        </p>
      </div>
      <div className="my-10">
        <img alt="PPM" src="/transparent.png" />
      </div>
      <div className="my-10 flex flex-col">
        <button className="uppercase font-bold bg-secondary text-black py-3 px-8 rounded-lg hover:opacity-70 transition-all duration-200 my-4">
          Inscreva-se
        </button>
        <button
          disabled
          className="uppercase font-bold bg-secondary disabled:bg-primary/20 disabled:text-primary/50 text-black py-3 px-8 rounded-lg hover:opacity-70 disabled:opacity-100 transition-all duration-200 my-4"
        >
          Votação
        </button>
      </div>
      <div className="my-10 flex justify-between">
        <button className="flex mx-10 flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
          <UsersFour className="text-white text-6xl mb-4" />
          <span>Inscritos</span>
        </button>
        <button className="flex mx-10 flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
          <CalendarPlus className="text-white text-6xl mb-4" />
          <span>Indicados</span>
        </button>
        <button className="flex mx-10 flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
          <PersonSimpleWalk className="text-white text-6xl mb-4" />
          <span>Semifinalistas</span>
        </button>
        <button className="flex mx-10 flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
          <Stairs className="text-white text-6xl mb-4" />
          <span>Finalistas</span>
        </button>
        <button className="flex mx-10 flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
          <Trophy className="text-white text-6xl mb-4" />
          <span>Campeões</span>
        </button>
      </div>
      <div className="flex justify-between my-10">
        <p className="uppercase font-black text-secondary">
          Do natural
          <br />
          ao artificial
          <br />
          com escala no real
        </p>
      </div>
    </section>
  );
}
