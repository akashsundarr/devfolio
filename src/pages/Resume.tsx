import Navigation from '@/components/Navigation';
import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen px-6 md:px-12 py-12">
        <main className="w-full max-w-4xl text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">Resume</h1>

          {/* 📄 Preview Image (Larger) */}
          <div className="mb-8 shadow-xl rounded-md overflow-hidden">
            <img
              src="/resume-preview.jpg"
              alt="Resume Preview"
              className="w-full max-h-[1200px] object-contain border border-gray-300 rounded-md"
            />
          </div>

          {/* 📥 Download/View Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 underline-link"
          >
            View / Download Resume
          </a>
        </main>
      </div>
    </div>
  );
};

export default Resume;
