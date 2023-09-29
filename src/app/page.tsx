"use client";
import AboutPage from "@/components/AboutPage";
import HeroPage from "@/components/HeroPage";
import React from "react";
import { Prompt } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Experience from "@/components/Experience";
import PortFolio from "@/components/PortFolio";
import Footer from "@/components/Footer";
import SkillPage from "@/components/SkillPage";
type Props = {};

const promts: NextFont = Prompt({
  subsets: ["thai"],
  weight: ["400"],
  style: "normal",
});
export default function page({}: Props) {
  return (
    <main className={promts.className}>
      <HeroPage />
      <AboutPage />
      <Experience />
      <SkillPage />
      <PortFolio
        img={""}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </main>
  );
}
