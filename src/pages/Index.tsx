import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Zap, Layout, Globe } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "../components/animations";
// Shared animation variants for smooth, restrained motion


export default function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-200">
      <Navigation />

      {/* Applied your layout preference + max-w to keep it clean on ultrawide monitors */}
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* ================= HERO SECTION ================= */}

        <section className="pt-32 md:pt-40 pb-20 lg:pb-0 lg:min-h-[90vh] flex items-center">
          <StaggerContainer className="w-full">

            <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-8">

              {/* ================= LEFT CONTENT ================= */}
              <div className="max-w-3xl space-y-8 order-2 lg:order-1">

                <FadeUp>
                  <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[0.95] text-zinc-900">
                    I build simple websites for businesses and startups.
                  </h1>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <p className="text-lg md:text-2xl text-zinc-500 max-w-2xl leading-relaxed font-light">
                    Fast, clean, and easy to manage websites focused on clarity,
                    performance, and real business needs.
                  </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <div className="flex items-center gap-6 pt-4">
                    <a
                      href="#contact"
                      className="group flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
                    >
                      Let’s talk
                    </a>

                    <a
                      href="#projects"
                      className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                      View projects
                    </a>
                  </div>
                </FadeUp>

              </div>

              {/* ================= IMAGE ================= */}
              <FadeUp
                delay={0.15}
                className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full"
              >
                <img
                  src="/akash-main.png"
                  alt="Akash Sundar"
                  className="
            w-[260px] sm:w-[320px] md:w-[400px] lg:w-full lg:max-w-[500px]
            h-auto
            aspect-square
            object-contain
            select-none
            pointer-events-none
          "
                />
              </FadeUp>

            </div>

          </StaggerContainer>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section
          id="about"
          className="py-24 border-t border-zinc-200"
        >
          <StaggerContainer delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-16">

              <div>
                <FadeUp>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6">
                    About
                  </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                    A practical approach to web design and development.
                  </h2>
                </FadeUp>
              </div>

              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                <FadeUp delay={0.2}>
                  <p>
                    I’m Akash Sundar, a full-stack developer from Kerala focused on building websites
                    that are simple, fast, and easy to use.
                  </p>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p>
                    I enjoy turning ideas into clean digital experiences that help businesses
                    communicate clearly online without unnecessary complexity.
                  </p>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <p>
                    Alongside frontend development, I’m also expanding into cloud infrastructure
                    and machine learning to build more intelligent, end-to-end systems.
                  </p>
                </FadeUp>
              </div>

            </div>
          </StaggerContainer>
        </section>

        {/* ================= BRAND SECTION ================= */}



        <section
          id="brand"
          className="py-24 border-t border-zinc-200"
        >
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Brand
              </p>

              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                Building websites through OwnTheSite.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="space-y-8 text-zinc-600 text-lg leading-relaxed">

              <p>
                OwnTheSite is my independent web design and development brand focused
                on creating fast, minimal, and practical websites for businesses,
                startups, and local brands.
              </p>

              <p>
                The goal is simple — build websites that are clean, easy to manage,
                and fully owned by the client without unnecessary complexity,
                subscriptions, or lock-in systems.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">

                <div className="p-6 rounded-3xl border border-zinc-200 bg-white">
                  <h3 className="text-base font-medium text-zinc-900 mb-3">
                    Fast Performance
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Lightweight websites optimized for speed and responsiveness.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-zinc-200 bg-white">
                  <h3 className="text-base font-medium text-zinc-900 mb-3">
                    Full Ownership
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Clients fully own their website and content.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-zinc-200 bg-white">
                  <h3 className="text-base font-medium text-zinc-900 mb-3">
                    Minimal Design
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Clean interfaces focused on clarity and communication.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-zinc-200 bg-white">
                  <h3 className="text-base font-medium text-zinc-900 mb-3">
                    Modern Stack
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Built using React, Next.js, and Tailwind CSS.
                  </p>
                </div>

              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="https://ownthesite-landing.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:gap-3 transition-all"
                >
                  Visit OwnTheSite
                  <span>↗</span>
                </a>
              </div>

            </div>

          </div>
        </section>


        {/* ================= SERVICES SECTION ================= */}

        <section
          id="services"
          className="py-24 border-t border-zinc-200"
        >
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Services
            </p>

            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">
              What I can help with.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-zinc-900">
                Business Websites
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Clean and responsive websites for small businesses, startups, and local brands.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-zinc-900">
                Frontend Development
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Modern interfaces built using React, Next.js, and Tailwind CSS.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-zinc-900">
                Workflow & Systems
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Simple digital workflows and tools that improve communication and organization.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        {/* Simply drop in your new component! */}
        <Portfolio />



        {/* ================= CONTACT SECTION ================= */}

        <section
          id="contact"
          className="py-24 "
        >
          <div className="max-w-3xl space-y-8">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Contact
            </p>

            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Let’s build something simple and useful.
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Open to freelance projects, collaborations, and opportunities related
              to frontend development, websites, and digital workflows.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="mailto:akashsundarrr@gmail.com"
                className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Send an email
              </a>

              <a
                href="https://github.com/akashsundarr"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}