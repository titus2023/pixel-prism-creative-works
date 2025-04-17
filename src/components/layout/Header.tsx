
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set active link based on current path
    setActiveLink(window.location.pathname);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-sm rounded-full"></div>
            <span className="relative text-white font-bold text-xl">PP</span>
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl">Pixel<span className="text-primary">Prism</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-medium hover:text-primary transition-colors duration-200",
                activeLink === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-2 font-medium hover:text-primary transition-colors duration-200",
                  activeLink === link.href ? "text-primary" : "text-foreground/80"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
