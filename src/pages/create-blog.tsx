import Navigation from '@/components/Navigation';
import { API_BASE } from '@/lib/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    publishedDate: '',
    tags: '',
    readMoreUrl: '',
    isExternal: false,
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;

  if (type === 'checkbox') {
    const target = e.target as HTMLInputElement; // ✅ explicitly say it's an input
    setFormData((prev) => ({
      ...prev,
      [name]: target.checked,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    };

    const res = await fetch(`${API_BASE}/api/blogs`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


    if (res.ok) {
      
      navigate('/blogs');
    } else {
      alert('Something went wrong.');
    }
  };

  return (
   <div className="min-h-screen bg-background text-foreground">
    <Navigation/>
    <div className="max-w-2xl mx-auto px-6 py-16">
    
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-medium text-foreground mb-3">Create New Post</h1>
        <p className="text-muted-foreground text-sm tracking-wide">Share your thoughts with the world</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <input
            type="text"
            name="title"
            placeholder="Post title"
            value={formData.title}
            onChange={handleChange}
            className="w-full text-2xl font-medium bg-transparent border-0 border-b border-muted/30 pb-3 placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <textarea
            name="excerpt"
            placeholder="Write a brief excerpt..."
            value={formData.excerpt}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-0 border-b border-muted/30 pb-3 placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 transition-colors resize-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Publish Date
            </label>
            <input
              type="date"
              name="publishedDate"
              value={formData.publishedDate}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-muted/30 pb-2 text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              placeholder="design, tech, life"
              value={formData.tags}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-muted/30 pb-2 placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            External Link
          </label>
          <input
            type="text"
            name="readMoreUrl"
            placeholder="https://example.com/article"
            value={formData.readMoreUrl}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-muted/30 pb-2 placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>

        <div className="flex items-center space-x-3 py-2">
          <input
            type="checkbox"
            name="isExternal"
            id="isExternal"
            checked={formData.isExternal}
            onChange={handleChange}
            className="w-4 h-4 text-foreground bg-transparent border border-muted/40 rounded focus:ring-2 focus:ring-foreground/20"
          />
          <label htmlFor="isExternal" className="text-sm text-muted-foreground cursor-pointer">
            This is an external link
          </label>
        </div>

        <div className="pt-8 flex justify-center">
          <button
            type="submit"
            className="group px-8 py-3 text-foreground font-medium tracking-wide transition-all duration-200 hover:tracking-wider relative"
          >
            <span className="relative z-10">Publish Post</span>
            <div className="absolute inset-0 border border-foreground/20 transition-all duration-200 group-hover:border-foreground/40"></div>
            <div className="absolute inset-0 bg-foreground/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
          </button>
        </div>
      </form>
    </div>
   </div>

  );
};

export default CreateBlog;
