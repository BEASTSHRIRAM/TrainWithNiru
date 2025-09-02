import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-montserrat font-black text-primary glow-pulse">
              TrainWithNiru
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('journey')}
              className="text-foreground hover:text-primary nav-underline transition-smooth"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-foreground hover:text-primary nav-underline transition-smooth"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('method')}
              className="text-foreground hover:text-primary nav-underline transition-smooth"
            >
              Method
            </button>
            <button
              onClick={() => scrollToSection('apply')}
              className="accent-gradient text-primary-foreground px-6 py-2 rounded-lg glow-shadow hover:glow-shadow-intense transition-smooth font-semibold"
            >
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('journey')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Journey
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('method')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection('apply')}
                className="accent-gradient text-primary-foreground px-6 py-3 rounded-lg glow-shadow font-semibold w-full mt-4"
              >
                Apply Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;