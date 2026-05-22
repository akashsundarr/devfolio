import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  tags?: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ name, description, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="h-full flex flex-col p-8 bg-white border border-zinc-200 rounded-3xl hover:border-zinc-300 transition-colors duration-300 group">
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-zinc-900 line-clamp-1 mb-2">
          {name}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 min-h-[3.75rem]">
          {description}
        </p>
      </div>
      
      <div className="flex-1 flex flex-col justify-end">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;