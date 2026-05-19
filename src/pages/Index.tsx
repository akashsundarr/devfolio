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

            <p className="text-base text-muted-foreground">
              Web Designer & Independent Builder
            </p>
          </div>

          {/* Description */}
          <p className="text-foreground">
            I enjoy building simple, fast, and thoughtful websites for small
            businesses. Most of what I’ve learned came from experimenting,
            rebuilding things repeatedly, and improving through real projects
            over time.
            <br />
            <br />
            Currently, I’m focused on creating clean web experiences using{" "}
            <span className="italic">React</span>,{" "}
            <span className="italic">Next.js</span>, and modern frontend tools.
            I care a lot about performance, minimal design, and making websites
            feel smooth and effortless to use.
            <br />
            <br />
            Alongside freelance work and client projects, I’m building{" "}
            <span className="italic">OwnTheSite</span> — a small studio focused
            on fully owned websites without subscriptions, unnecessary
            complexity, or platform lock-in.
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