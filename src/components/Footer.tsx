const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toRoman = (num: number) => {
    const romanMap: Record<string, number> = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let str = "";

    for (const i of Object.keys(romanMap)) {
      const q = Math.floor(num / romanMap[i]);
      num -= q * romanMap[i];
      str += i.repeat(q);
    }

    return str;
  };

  const romanYear = toRoman(currentYear);

  const socialLinks = [
    {
      text: "Instagram",
      href: "https://www.instagram.com/akashsundarr/",
    },
    {
      text: "GitHub",
      href: "https://github.com/akashsundarr",
    },
    {
      text: "Email",
      href: "mailto:akashsundar.cec@cectl.ac.in",
    },
  ];

  return (
    <footer className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 border-t border-zinc-200">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

        {/* Left */}
        <div className="space-y-5 max-w-md">

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Akash Sundar
          </p>

          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 leading-tight">
            Designing and building minimal digital experiences.
          </h3>

        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">

          {socialLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>

              {link.text}
            </a>
          ))}

        </div>

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-10 mt-10 border-t border-zinc-200">

        <div className="flex items-center gap-6 text-xs text-zinc-500">

          <a
            href="/resume"
            className="hover:text-zinc-900 transition-colors"
          >
            /resume
          </a>

          <a
            href="/uses"
            className="hover:text-zinc-900 transition-colors"
          >
            /uses
          </a>

        </div>

        <span className="tracking-[0.3em] text-xs text-zinc-400 uppercase">
          {romanYear}
        </span>

      </div>

    </footer>
  );
};

export default Footer;