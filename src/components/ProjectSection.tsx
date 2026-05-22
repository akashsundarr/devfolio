import React from 'react';
import ProjectCard from './ProjectCard';
import { FadeUp, StaggerContainer, StaggerItem } from './animations';

export interface Project {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectSectionProps {
  projects: Project[];
  title?: string;
  className?: string;
}

const ProjectSection = ({ projects, title = "Other Projects", className = "" }: ProjectSectionProps) => {
  if (projects.length === 0) {
    return (
      <section className={`py-24 border-t border-zinc-200 ${className}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-8">
              {title}
            </h2>
            <p className="text-zinc-500 py-12">
              No projects to display yet.
            </p>
          </FadeUp>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 border-t border-zinc-200 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6">
            Archive
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-16">
            {title}
          </h2>
        </FadeUp>
        
        <StaggerContainer delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
};

export default ProjectSection;