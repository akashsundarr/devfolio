
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="px-6 md:px-12 py-12 md:py-20 max-w-2xl">
        <div className="space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-medium text-foreground">
              Ephraim Duncan
            </h1>
            <p className="text-base text-muted-foreground">
              Software Engineer at Documenso
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 text-base leading-relaxed">
            <p className="text-foreground">
              Building polished software experiences with magical, unique and delightful details, for the 
              web. I aim to create beautiful and functional software that is both intuitive and enjoyable for 
              users.
            </p>
            
            <p className="text-foreground">
              I have a passion for learning, and I am constantly seeking to improve my skills mostly 
              through{' '}
              <a 
                href="#" 
                className="underline-link hover:text-foreground transition-colors"
              >
                reading
              </a>
              {' '}and{' '}
              <a 
                href="#" 
                className="underline-link hover:text-foreground transition-colors"
              >
                writing
              </a>
              . I'm interested in{' '}
              <span className="italic">TypeScript</span> and{' '}
              <span className="italic">Go</span>, and at the same time, I'm 
              also experimenting with native apps with{' '}
              <span className="italic">Swift</span>.
            </p>
          </div>

          {/* Decorative separator */}
          <div className="py-8">
            <div className="text-center text-muted-foreground text-sm">
              ∼∼∼∼∼
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
