
import ProjectCard from './ProjectCard';

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

const ProjectSection = ({ projects, title = "Featured Projects", className = "" }: ProjectSectionProps) => {
  if (projects.length === 0) {
    return (
      <section className={`py-12 ${className}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {title}
          </h2>
          <p className="text-muted-foreground text-center py-12">
            No projects to display yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
