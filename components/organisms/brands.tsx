'use client'

import Link from "next/link"

const international = [
  {
    name: "MIDEM",
    url: "https://www.midem.com",
    src: '/brands/internacionais/MIDEM.png'
  }
]

const national = [
  {
    name: "Music Box Brasil",
    url: "",
    src: '/brands/nacionais/musicbox.png'
  }
]

const executiva = [
  {
    name: "GRV",
    url: "https://grv.art.br",
    src: '/brands/executiva/grv.png'
  }
]

const comunicacao = [
  {
    name: "Donna Midia",
    url: "",
    src: '/brands/comunicacao/donnamidia.jpg'
  },
  {
    name: "Cascelli Design",
    url: "",
    src: '/brands/comunicacao/cascelli.jpeg'
  },
  {
    name: "Casa Filme",
    url: "",
    src: '/brands/comunicacao/casafilme.png'
  },
]

const realizacao = [

  {
    name: "APBM",
    url: "",
    src: '/brands/realizacao/apmb.svg'
  },
]

export default function Brands() {
  return (
    <section id='brands' className='bg-black text-primary px-3 md:px-6 py-20 flex flex-col justify-center items-center'>
      <h3 className="uppercase text-lg font-bold text-primary mb-6">Parceiros internacionais</h3>
      <div className='flex justify-center items-center mb-10'>
        {international.map((brand, index: number) => (
          <Link className="m-8 hover:opacity-70 transition-all duration-200" key={index} href={brand.url} target="_blank">
            <img src={brand.src} alt={brand.name} width={100} />
          </Link>
        ))}
      </div>

      <h3 className="uppercase text-lg font-bold text-primary mb-10">Promoção Nacional</h3>
      <div className='flex justify-center items-center mb-10'>
        {national.map((brand, index: number) => (
          <Link className="m-8 hover:opacity-70 transition-all duration-200" key={index} href={brand.url} target="_blank">
            <img src={brand.src} alt={brand.name} width={100} />
          </Link>
        ))}
      </div>

      <h3 className="uppercase text-lg font-bold text-primary mb-10">Promoção Executiva</h3>
      <div className='flex justify-center items-center mb-10'>
        {executiva.map((brand, index: number) => (
          <Link className="m-8 hover:opacity-70 transition-all duration-200" key={index} href={brand.url} target="_blank">
            <img src={brand.src} alt={brand.name} width={100} />
          </Link>
        ))}
      </div>

      <h3 className="uppercase text-lg font-bold text-primary mb-10">Comunicação</h3>
      <div className='flex flex-wrap md:flex-nowrap justify-center items-center mb-10'>
        {comunicacao.map((brand, index: number) => (
          <Link className="m-8 hover:opacity-70 transition-all duration-200" key={index} href={brand.url} target="_blank">
            <img className="grayscale" src={brand.src} alt={brand.name} width={100} />
          </Link>
        ))}
      </div>

      <h3 className="uppercase text-lg font-bold text-primary mb-10">Realização</h3>
      <div className='flex flex-wrap md:flex-nowrap justify-center items-center mb-10'>
        {realizacao.map((brand, index: number) => (
          <Link className="m-8 hover:opacity-70 transition-all duration-200" key={index} href={brand.url} target="_blank">
            <img className="grayscale" src={brand.src} alt={brand.name} width={100} />
          </Link>
        ))}
      </div>
    </section>
  )
}
