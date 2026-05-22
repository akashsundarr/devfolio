"use client";

import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "../components/animations";

export default function Portfolio() {
  const projects = [
    {
      title: "Premium Ladies Fitness",
      category: "Fitness Studio",
      year: "2024",
      description:
        "Fast-loading website designed to drive local enquiries with a clear, conversion-focused layout.",
      tech: ["Next.js", "React", "Tailwind"],
      url: "https://www.premiumladiesfitnesscenter.com/",
    },
    {
      title: "Starwings Travel",
      category: "Travel & Tourism",
      year: "2024",
      description:
        "Optimized for WhatsApp enquiries with structured service sections and fast performance.",
      tech: ["Next.js", "React", "Tailwind"],
      url: "https://starwings-journey-redesign.vercel.app/",
    },
    {
      title: "Starwings HVAC",
      category: "Engineering",
      year: "2023",
      description:
        "Clean, professional website built to improve trust and clearly present services for better lead clarity.",
      tech: ["Next.js", "React", "Tailwind"],
      url: "https://starwings-website.vercel.app/",
    },
    {
      title: "Shaheen Flowers",
      category: "Landscape Showcase",
      year: "2024",
      description:
        "Elegant floral website designed to showcase bouquets, improve local brand presence, and simplify customer inquiries.",
      tech: ["Next.js", "React", "Tailwind"],
      url: "https://shaheenflowers.ae/",
    },
    {
      title: "NPS Kaloor",
      category: "Education",
      year: "2024",
      description:
        "Modern school website focused on clear communication, structured information access, and a professional digital presence.",
      tech: ["Next.js", "React", "Tailwind"],
      url: "https://npskaloor.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 border-t border-zinc-200"
    >
      <div className="w-full">

        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">

          <div>
            <FadeUp>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Projects
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-zinc-900 max-w-4xl">
                Selected works built for businesses, startups, and local brands.
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <p className="text-sm uppercase tracking-widest text-zinc-400">
              2023 — Present
            </p>
          </FadeUp>

        </div>

        {/* Projects */}
        <StaggerContainer delay={0.15}>
          <div className="border-t border-zinc-200">

            {projects.map((project, idx) => (
              <StaggerItem key={idx}>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-b border-zinc-200 py-8 md:py-10"
                >

                  <div className="grid md:grid-cols-[1.2fr_0.8fr_120px] gap-10 items-start">

                    {/* Left */}
                    <div>

                      <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 transition-opacity duration-300 group-hover:opacity-70">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-sm uppercase tracking-widest text-zinc-400">
                        {project.category}
                      </p>

                    </div>

                    {/* Middle */}
                    <div>

                      <p className="text-lg text-zinc-600 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Right */}
                    <div className="flex items-center md:justify-end gap-4">

                      <span className="text-sm text-zinc-400">
                        {project.year}
                      </span>

                      <motion.div
                        className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </motion.div>

                    </div>

                  </div>

                </a>

              </StaggerItem>
            ))}

          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}