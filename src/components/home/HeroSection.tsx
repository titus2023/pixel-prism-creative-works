
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [text, setText] = useState('');
  const fullText = "Transforming Ideas into Digital Realities";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {text}<span className="blinking-cursor"></span>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We blend cutting-edge software development with stunning videography and photography to help your business stand out.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              asChild
            >
              <Link to="/contact">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play size={16} className="mr-2" /> Watch Our Reel
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Digital Creation" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-1 bg-background">
          <div className="aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="PixelPrism Demo Reel" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
