import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FadeUp } from '@/components/animations';

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-200 flex flex-col">
      <Navigation />
      
      <main className="flex-grow w-full pt-12 md:pt-20 pb-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Header & Action */}
          <FadeUp className="w-full text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-8">
              Resume
            </h1>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              View / Download PDF
            </a>
          </FadeUp>

          {/* Resume Preview Card */}
          <FadeUp delay={0.1} className="w-full">
            <div className="bg-white rounded-3xl border border-zinc-200 p-2 md:p-4 shadow-sm overflow-hidden">
              <img
                src="/resume-preview.png"
                alt="Resume Preview"
                className="w-full h-auto max-h-[1200px] object-contain rounded-2xl border border-zinc-100"
              />
            </div>
          </FadeUp>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;