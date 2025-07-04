
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Convert to Roman numerals
  
  const socialLinks = [
    { text: 'follow me on instagram', href: 'https://www.instagram.com/akashsundarr/' },
    { text: 'let\'s collaborate on github', href: 'https://github.com/akashsundarr' },
    { text: 'love to talk?', href: "mailto:akashsundarrr@gmail.com" 
 }
  ];

  return (
    <footer className="px-6 md:px-12 pb-8">
      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group w-fit"
            >
              <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                ↗
              </span>
              <span className="underline-link">{link.text}</span>
            </a>
          ))}
        </div>
        
        <div className="flex justify-center items-center pt-6 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="/uses" className="underline-link hover:text-foreground transition-colors">
              /uses
            </a>
            <span>{(currentYear)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
