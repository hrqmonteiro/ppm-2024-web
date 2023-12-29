"use client";

type ContentPageProps = {
  title: string;
  children?: React.ReactNode;
};

export default function ContentPage({ title, children }: ContentPageProps) {
  return (
    <section className="min-h-screen bg-white text-black px-3 md:px-6 py-10">
      <div className="container mx-auto">
        <h1 className="uppercase text-3xl font-black md:text-5xl mb-10">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
