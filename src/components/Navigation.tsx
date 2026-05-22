import React from "react";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "Uses", href: "/uses"}
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">

      {/* Left */}
      <div className="flex items-center gap-3 md:gap-4">

        <a
          href="/"
          className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900"
        >
          Akash Sundar
        </a>

        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 hidden sm:block" />

        <a
          href="https://ownthesite-landing.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          OwnTheSite
        </a>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5 md:gap-7">

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}

      </div>

    </nav>
  );
};

export default Navigation;