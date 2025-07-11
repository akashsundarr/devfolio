
import Navigation from '@/components/Navigation';
import BlogCard from '../components/BlogCard';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  tags?: string[];
  readMoreUrl: string;
  isExternal?: boolean;
}

interface BlogProps {
  posts?: BlogPost[];
  title?: string;
  className?: string;
}

const Blog = ({ posts, title = "Latest Blog Posts", className = "" }: BlogProps) => {
 const defaultPosts: BlogPost[] = [
   {
    id: '1',
    title: 'From Bio-Maths Student to Fullstack Developer: My Journey into Tech',
    excerpt:
      'How I went from studying biology and math in high school to becoming a self-taught MERN stack developer and joining the BRIK community.',
    publishedDate: '2025-06-25',
    tags: ['Career Journey', 'MERN Stack', 'Self-Taught Developer'],
    readMoreUrl: '/blog/bio-maths-to-mern-dev',
    isExternal: false
  },
   {
    id: '1',
    title: 'From Bio-Maths Student to Fullstack Developer: My Journey into Tech',
    excerpt:
      'How I went from studying biology and math in high school to becoming a self-taught MERN stack developer and joining the BRIK community.',
    publishedDate: '2025-06-25',
    tags: ['Career Journey', 'MERN Stack', 'Self-Taught Developer'],
    readMoreUrl: '/blog/bio-maths-to-mern-dev',
    isExternal: false
  },
   {
    id: '1',
    title: 'From Bio-Maths Student to Fullstack Developer: My Journey into Tech',
    excerpt:
      'How I went from studying biology and math in high school to becoming a self-taught MERN stack developer and joining the BRIK community.',
    publishedDate: '2025-06-25',
    tags: ['Career Journey', 'MERN Stack', 'Self-Taught Developer'],
    readMoreUrl: '/blog/bio-maths-to-mern-dev',
    isExternal: false
  },
   {
    id: '1',
    title: 'From Bio-Maths Student to Fullstack Developer: My Journey into Tech',
    excerpt:
      'How I went from studying biology and math in high school to becoming a self-taught MERN stack developer and joining the BRIK community.',
    publishedDate: '2025-06-25',
    tags: ['Career Journey', 'MERN Stack', 'Self-Taught Developer'],
    readMoreUrl: '/blog/bio-maths-to-mern-dev',
    isExternal: false
  }, {
    id: '1',
    title: 'From Bio-Maths Student to Fullstack Developer: My Journey into Tech',
    excerpt:
      'How I went from studying biology and math in high school to becoming a self-taught MERN stack developer and joining the BRIK community.',
    publishedDate: '2025-06-25',
    tags: ['Career Journey', 'MERN Stack', 'Self-Taught Developer'],
    readMoreUrl: '/blog/bio-maths-to-mern-dev',
    isExternal: false
  },
   {
    id: '1',
    title: 'From Bio-Maths Student to Fullstack Developer: My Journey into Tech',
    excerpt:
      'How I went from studying biology and math in high school to becoming a self-taught MERN stack developer and joining the BRIK community.',
    publishedDate: '2025-06-25',
    tags: ['Career Journey', 'MERN Stack', 'Self-Taught Developer'],
    readMoreUrl: '/blog/bio-maths-to-mern-dev',
    isExternal: false
  }
 ];


  const blogPosts = posts || defaultPosts;

  if (blogPosts.length === 0) {
    return (
      <section className={`py-12 ${className}`} role="region" aria-labelledby="blog-heading">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 id="blog-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {title}
          </h2>
          <p className="text-muted-foreground text-center py-12">
            No blog posts available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
   
      
<div className="min-h-screen bg-background text-foreground">
  <Navigation />
   <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 id="blog-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              publishedDate={post.publishedDate}
              tags={post.tags}
              readMoreUrl={post.readMoreUrl}
              isExternal={post.isExternal}
            />
          ))}
        </div>
      </div>
</div>
     
    
  );
};

export default Blog;

