import { Calendar, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface BlogCardProps {
  _id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  tags?: string[];
  readMoreUrl: string;
  isExternal?: boolean;
  onDelete?: (id: string) => void;
}

const BlogCard = ({
  _id,
  title,
  excerpt,
  publishedDate,
  tags,
  readMoreUrl,
  isExternal = false,
  onDelete,
}: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border hover:translate-y-[-2px] group">
      <CardHeader className="pb-3 relative">
        {/* ✅ Delete Button */}
        {onDelete && (
          <button
            onClick={() => onDelete(_id)}
            className=" underline-link absolute top-3 right-2 text-xs px-2 py-1transition-colors hover:text-foreground"
          >
            Delete
          </button>    
        )}

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
        </div>

        <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>

        <CardDescription className="text-sm text-muted-foreground line-clamp-3 min-h-[3.75rem]">
          {excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-muted/50 text-muted-foreground hover:bg-muted transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <a
            href={readMoreUrl}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors underline-link"
            aria-label={`Read more about ${title}`}
          >
            <span>Read More</span>
            {isExternal && <ExternalLink className="h-3.5 w-3.5" />}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
