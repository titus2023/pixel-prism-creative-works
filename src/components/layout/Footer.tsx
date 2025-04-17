
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-muted pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center rotate-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-sm rounded-full"></div>
                <span className="relative text-white font-bold text-xl">PP</span>
              </div>
              <span className="font-heading font-bold text-xl">Pixel<span className="text-primary">Prism</span></span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Creating stunning digital experiences through innovative software development, captivating videography, and breathtaking photography.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/software" className="text-muted-foreground hover:text-primary transition-colors">Software Development</Link>
              </li>
              <li>
                <Link to="/services/videography" className="text-muted-foreground hover:text-primary transition-colors">Videography</Link>
              </li>
              <li>
                <Link to="/services/photography" className="text-muted-foreground hover:text-primary transition-colors">Photography</Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-muted-foreground hover:text-primary transition-colors">Web Design</Link>
              </li>
              <li>
                <Link to="/services/ui-ux" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">hello@pixelprism.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">123 Creative Ave, Suite 101<br/>Digital City, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-6 pb-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PixelPrism Creative Works. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full"
              onClick={scrollToTop}
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
