import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import BlogCard from '../components/BlogCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { API_BASE } from '@/lib/api';

export interface BlogPost {
  _id?: string; // MongoDB sends _id, not id
  title: string;
  excerpt: string;
  publishedDate: string;
  tags?: string[];
  readMoreUrl: string;
  isExternal?: boolean;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        const data = await res.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
const handleDelete = async (id: string) => {
  console.log("Deleting blog with ID:", id); // ✅ debug line

  try {
    const res = await fetch(`${API_BASE}/api/blogs/${id}`, {
  method: "DELETE",
});

    if (res.ok) {
      setBlogPosts((prev) => prev.filter((post) => post._id !== id));
    }
  } catch (err) {
    console.error("Error deleting blog:", err);
  }
};




  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Latest Blog Posts
          </h2>
          <Link
            to="/create-blog"
            className="underline-link hover:text-foreground transition-colors"
          >
            + Create New Blog
          </Link>
        </div>

        {loading ? (
          <p className="text-muted-foreground text-center">Loading...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">
            No blog posts available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                _id={post._id}
                key={post._id}
                title={post.title}
                excerpt={post.excerpt}
                publishedDate={post.publishedDate}
                tags={post.tags}
                readMoreUrl={post.readMoreUrl}
                isExternal={post.isExternal}
                onDelete={handleDelete} 
              />
              
            ))}
           
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Blog;
