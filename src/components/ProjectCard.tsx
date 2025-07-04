
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ProjectCardProps {
  name: string;
  description: string;
  tags?: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ name, description, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground line-clamp-1">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs px-2 py-0.5 bg-muted/50 text-muted-foreground hover:bg-muted"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 h-8"
            asChild
          >
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="text-xs">Code</span>
            </a>
          </Button>
          
          {liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 h-8"
              asChild
            >
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="text-xs">Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
