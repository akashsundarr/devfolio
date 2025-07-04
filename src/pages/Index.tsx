import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const Index = () => {
   

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="px-6 md:px-12 py-12 md:py-20 max-w-2xl">
        <div className="space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-medium text-foreground">
              Akash Sundar
            </h1>
            <p className="text-base text-muted-foreground">Fullstack Developer & Builder</p>
          </div>

          {/* Description */}
          <p className="text-foreground">
            I love learning by doing — mostly by building, breaking, and fixing
            things. I’m always exploring new concepts through{" "}
            <a
              href="#"
              className="underline-link hover:text-foreground transition-colors"
            >
              reading
            </a>{" "}
            and occasionally sharing thoughts through{" "}
            <a
              href="#"
              className="underline-link hover:text-foreground transition-colors"
            >
              writing
            </a>
            . These days, I’m working with the{" "}
            <span className="italic">MERN stack</span>, diving deep into{" "}
            <span className="italic">React</span> and{" "}
            <span className="italic">Next.js</span>, and constantly improving
            how I build full-stack apps that are fast, clean, and intuitive.
          </p>

          {/* Decorative separator */}
          <div className="py-8">
            <div className="flex justify-center py-6">
              <svg
                className="animate-wave-float text-muted-foreground"
                width="100"
                height="10"
                viewBox="0 0 100 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="transparent"
                />
              </svg>
            </div>
          </div>
        </div>

      </main>
      
      
      <Footer />
    </div>
  );
};

export default Index;
