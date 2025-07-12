import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectSection, { Project } from "@/components/ProjectSection";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/akashsundarr/repos")
      .then((res) => res.json())
      .then((data) => {
        // Filter out only projects with a live URL (homepage set in GitHub)
        const filtered = data
          .filter((repo: any) => repo.homepage)
          .map((repo: any) => ({
            id: repo.id.toString(),
            name: repo.name,
            description: repo.description || "No description provided",
            githubUrl: repo.html_url,
            liveUrl: repo.homepage,
            tags: [repo.language || "JavaScript"],
          }));
        setProjects(filtered);
      });
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
