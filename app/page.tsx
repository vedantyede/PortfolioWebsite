"use client";

import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { useEffect, useRef } from "react";

export default function Home() {
  const revealRefs = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    revealRefs.current = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    // Nav active state
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.style.opacity =
                link.getAttribute("href") === "#" + entry.target.id ? "1" : "0.5";
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => scrollObserver.observe(s));

    return () => {
      observer.disconnect();
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <Nav />

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <Stats />

      {/* SKILLS */}
      <Skills />

      {/* EXPERIENCE */}
      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
