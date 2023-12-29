/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";
import Navbar from "@/components/molecules/navbar";
import Atractions from "@/components/organisms/atractions";
import FormFooter from "@/components/organisms/form-footer";
import Homages from "@/components/organisms/homages";
import Masthead from "@/components/organisms/masthead";
import Memories from "@/components/organisms/memories";

export default function Home() {
  return (
    <>
      <Header />
      <Masthead />
      <Atractions />
      <Homages />
      <Memories />
      <FormFooter />
    </>
  );
}
