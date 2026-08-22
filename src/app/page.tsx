"use client";

import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { WorkTogether } from "@/components/WorkTogether";
import { Footer } from "@/components/Footer";
import { Scene3D } from "@/components/Scene3D";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <Scene3D fadeTriggerRef={heroRef} />
      <Header />
      <main>
        <Hero sectionRef={heroRef} />
        <Projects />
        <Services />
        <Skills />
        <About />
        <Contact />
        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
