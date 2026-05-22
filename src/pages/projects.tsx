import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectSection, { Project } from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/animations";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/akashsundarr/repos")
      .then((res) => res.json())
      .then((data) => {
        // Auto-fetched GitHub projects
        const githubProjects: Project[] = data
          .filter(
            (repo: any) =>
              !repo.fork && // remove forked repos
              repo.name !== "akashsundarr" // remove profile repo
          )
          .map((repo: any) => ({
            id: repo.id.toString(),
            name: repo.name,
            description: repo.description || "Private/internal project",
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || "",
            tags: [repo.language || "JavaScript"],
          }));

        // Manual client + collaborator projects
        const manualProjects: Project[] = [
          {
            id: "shaheenflowers",
            name: "Shaheen Flowers",
            description:
              "Elegant floral business website focused on branding, responsiveness, and smooth user experience.",
            githubUrl: "",
            liveUrl: "https://shaheenflowers.ae",
            tags: ["Next.js", "TypeScript", "Tailwind"],
          },
          {
            id: "npskaloor",
            name: "NPS Kaloor",
            description:
              "Modern school website redesign built with performance, clarity, and accessibility in mind.",
            githubUrl: "",
            liveUrl: "https://nps-kaloor-website.vercel.app",
            tags: ["React", "TypeScript", "Tailwind"],
          },
          {
            id: "starwings",
            name: "Starwings",
            description:
              "Travel and tourism website redesign focused on cleaner UX and modern presentation.",
            githubUrl: "",
            liveUrl: "https://example.com", // You might want to update this to your actual Vercel link
            tags: ["TypeScript"],
          },
        ];

        // Merge manual + GitHub projects
        setProjects([...manualProjects, ...githubProjects]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-200 flex flex-col">
      <Navigation />

      <main className="flex-grow w-full pt-12 md:pt-20 pb-24">
        
        {/* Page Header */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-8">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900">
              All Projects
            </h1>
          </FadeUp>
        </div>

        {/* Project Grid / Loading State */}
        {isLoading ? (
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12">
            <FadeUp delay={0.1}>
              <p className="text-zinc-500 animate-pulse text-lg">Loading repositories...</p>
            </FadeUp>
          </div>
        ) : (
          <ProjectSection
            title="Client & Open Source"
            projects={projects}
            className="border-none pt-8 md:pt-12" // Overriding the default top border/padding so it flows cleanly from the H1
          />
        )}
        
      </main>

      <Footer />
    </div>
  );
}