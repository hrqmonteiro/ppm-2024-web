/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";
import Navbar from "@/components/molecules/navbar";
import SubFooter from "@/components/molecules/sub-footer";
import Atractions from "@/components/organisms/atractions";
import FormFooter from "@/components/organisms/form-footer";
import Homages from "@/components/organisms/homages";
import Masthead from "@/components/organisms/masthead";
import Memories from "@/components/organisms/memories";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Masthead />
      <Atractions />
      <Homages />
      <Memories />

      <FormFooter />
      <Footer />
      <SubFooter />
      <Toaster />
    </>
  );
}
