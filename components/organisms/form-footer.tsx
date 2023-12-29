"use client";

export default function FormFooter() {
  const CLASSNAMES =
    "block w-96 mt-2 placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40";

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-10 px:3 md:px-6"
    >
      <div className="w-full flex flex-col justify-center items-center my-10">
        <div className="uppercase font-black text-5xl mb-20">Contato</div>
        <div className="mb-4">
          <label htmlFor="name">Seu nome</label>
          <input
            name="name"
            type="text"
            placeholder="Digite seu nome completo..."
            className={CLASSNAMES}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Seu email</label>
          <input
            name="email"
            type="email"
            placeholder="seumelhor@email.com"
            className={CLASSNAMES}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject">Assunto</label>
          <input
            name="subject"
            type="text"
            placeholder="Digite o assunto/setor..."
            className={CLASSNAMES}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name">Mensagem</label>
          <textarea
            rows={10}
            name="message"
            placeholder="Digite aqui..."
            className={CLASSNAMES}
          />
        </div>
        <div className="w-96 flex justify-end">
          <button className="bg-secondary uppercase text-black px-4 py-3 rounded-lg font-bold hover:opacity-70 transition-all duration-200">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
