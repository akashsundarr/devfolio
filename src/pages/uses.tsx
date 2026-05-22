import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const Uses = () => {
  const hardware = [
    "ASUS Vivobook 16X (Ryzen 5 5600H + Radeon Vega 7)",
    "iPhone 12",
    "Redragon Fizz Mechanical Keyboard",
    "Razer DeathAdder Essential",
  ];

  const software = [
    "VS Code",
    "Brave Browser",
    "Chrome",
    "Figma",
    "ChatGPT",
    "Gemini",
    "v0.dev",
    "GitHub",
    "Vercel",
  ];

  const workflow = [
    "React + Next.js for frontend development",
    "Tailwind CSS for styling",
    "Vercel for deployment",
    "Notion for planning and notes",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-200 flex flex-col">
      <Navigation />

      <main className="flex-grow w-full pt-16 md:pt-24 pb-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">

        <div className="max-w-4xl">

          {/* Header */}
          <FadeUp>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Uses
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-zinc-900 max-w-4xl">
              Hardware, software, and tools I use for development and everyday workflow.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mt-10">
              A small collection of the devices, applications, and systems
              I currently use for building websites, experimenting with ideas,
              and managing projects.
            </p>
          </FadeUp>

          {/* Sections */}
          <StaggerContainer
            delay={0.2}
            className="mt-24 space-y-20"
          >

            {/* Hardware */}
            <StaggerItem>
              <section className="border-t border-zinc-200 pt-8">

                <div className="grid md:grid-cols-[220px_1fr] gap-10">

                  <div>
                    <h2 className="text-xl font-medium text-zinc-900">
                      Hardware
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {hardware.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-lg text-zinc-600 leading-relaxed"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                </div>

              </section>
            </StaggerItem>

            {/* Software */}
            <StaggerItem>
              <section className="border-t border-zinc-200 pt-8">

                <div className="grid md:grid-cols-[220px_1fr] gap-10">

                  <div>
                    <h2 className="text-xl font-medium text-zinc-900">
                      Software
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {software.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-lg text-zinc-600 leading-relaxed"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                </div>

              </section>
            </StaggerItem>

            {/* Workflow */}
            <StaggerItem>
              <section className="border-t border-zinc-200 pt-8">

                <div className="grid md:grid-cols-[220px_1fr] gap-10">

                  <div>
                    <h2 className="text-xl font-medium text-zinc-900">
                      Workflow
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {workflow.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-lg text-zinc-600 leading-relaxed"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                </div>

              </section>
            </StaggerItem>

          </StaggerContainer>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Uses;