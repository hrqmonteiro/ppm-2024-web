"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function FormFooter() {
  const CLASSNAMES =
    "block w-96 mt-2 placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(message)
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('aaaq')

    const currentBody = {
      name,
      email,
      subject,
      message,
    };

    console.log('current body', currentBody)

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(currentBody),
      });

      const data = await res.json();
      console.log(data)

      toast.success("Enviado com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-10 px:3 md:px-6"
    >
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col justify-center items-center my-10"
      >
        <div className="uppercase font-black text-5xl mb-20">Contato</div>
        <div className="mb-4">
          <label htmlFor="name">Seu nome</label>
          <input
            name="name"
            type="text"
            placeholder="Digite seu nome completo..."
            className={CLASSNAMES}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Seu email</label>
          <input
            name="email"
            type="email"
            placeholder="seumelhor@email.com"
            className={CLASSNAMES}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject">Assunto</label>
          <input
            name="subject"
            type="text"
            placeholder="Digite o assunto/setor..."
            className={CLASSNAMES}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name">Mensagem</label>
          <textarea
            rows={10}
            name="message"
            placeholder="Digite aqui..."
            className={CLASSNAMES}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="w-96 flex justify-end">
          <button type='submit' className="bg-secondary uppercase text-black px-4 py-3 rounded-lg font-bold hover:opacity-70 transition-all duration-200">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
