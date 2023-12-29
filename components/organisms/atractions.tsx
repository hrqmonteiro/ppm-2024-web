"use client";

import {
  Books,
  CalendarPlus,
  Camera,
  FilmReel,
  Images,
  Microphone,
  MusicNotes,
  Notebook,
  PersonSimpleWalk,
  Presentation,
  PresentationChart,
  ProjectorScreen,
  Slideshow,
  Stairs,
  Trophy,
  UsersFour,
} from "@phosphor-icons/react";

export default function Atractions() {
  return (
    <section
      id="atractions"
      className="bg-primary text-white min-h-screen px-3 md:px-64 py-3 md:py-6  flex flex-col items-center"
    >
      <div className="flex justify-between my-10">
        <span className="uppercase font-black text-secondary text-5xl">
          Atrações
        </span>
      </div>
      <div className="w-full flex flex-col justify-around">
        <div className="w-full justify-center flex my-10">
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Notebook className="text-white text-6xl mb-4" />
            <span>Programação</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Trophy className="text-white text-6xl mb-4" />
            <span>Premiação</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Slideshow className="text-white text-6xl mb-4" />
            <span>Superlives</span>
          </button>
        </div>
        <div className="w-full justify-center flex my-10">
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <ProjectorScreen className="text-white text-6xl mb-4" />
            <span>Painéis</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Presentation className="text-white text-6xl mb-4" />
            <span>Workshows</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <PresentationChart className="text-white text-6xl mb-4" />
            <span>Palestras</span>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-around">
        <div className="w-full justify-center flex my-10">
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Microphone className="text-white text-6xl mb-4" />
            <span>Shows</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Books className="text-white text-6xl mb-4" />
            <span>Feira Literária</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Images className="text-white text-6xl mb-4" />
            <span>Exposição Fotográfica</span>
          </button>
        </div>
        <div className="w-full justify-center flex my-10">
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <MusicNotes className="text-white text-6xl mb-4" />
            <span>Música</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <Camera className="text-white text-6xl mb-4" />
            <span>Photos</span>
          </button>
          <button className="flex basis-full flex-col text-sm uppercase font-bold text-white justify-center items-center hover:opacity-70 transition-all duration-200">
            <FilmReel className="text-white text-6xl mb-4" />
            <span>Clips e Docs</span>
          </button>
        </div>
      </div>
    </section>
  );
}
