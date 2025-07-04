import Navigation from "@/components/Navigation";
import ProjectSection, { Project } from "@/components/ProjectSection";

export default function Projects() {
   
    const sampleProjects: Project[] = [
      {
    id: '1',
    name: 'CORS Simulator',
    description: 'A full-stack web app that lets users simulate CORS scenarios by editing both frontend and backend code. Built using React + Vite and Flask, hosted on Replit and Vercel.',
    tags: ['React', 'Vite', 'Flask', 'CORS', 'Render'], 
    githubUrl: 'https://github.com/akashsundarr/cors-simulator', // Update if you have this repo public
    liveUrl: 'https://cors-simulator.vercel.app'
  }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
       <Navigation />  
    <main className="container mx-auto px-4">
      
      <ProjectSection
        title="Featured Projects"
        projects={sampleProjects}
        className="border-t border-border/30 mt-12 pt-8"
      />
    </main>
    </div>
  );
}

