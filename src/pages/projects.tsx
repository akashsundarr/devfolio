import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectSection, { Project } from "@/components/ProjectSection";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

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
            description:
              repo.description || "Private/internal project",
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
            liveUrl: "https://npskaloor.com",
            tags: ["React", "TypeScript", "Tailwind"],
          },

          {
            id: "starwings",
            name: "Starwings",
            description:
              "Travel and tourism website redesign focused on cleaner UX and modern presentation.",
            githubUrl: "",
            liveUrl: "https://example.com",
            tags: ["TypeScript"],
          },
        ];

        // Merge manual + GitHub projects
        setProjects([...manualProjects, ...githubProjects]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4">
        <ProjectSection
          title="Featured Projects"
          projects={projects}
        />
      </main>
    </div>
  );
}