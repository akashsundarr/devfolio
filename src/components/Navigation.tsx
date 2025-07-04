
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const navItems = ['home', 'blog', 'thoughts', 'guestbook'];

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-12">
      <div className="flex gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`/${item === 'home' ? '' : item}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 underline-link"
          >
            {item}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
