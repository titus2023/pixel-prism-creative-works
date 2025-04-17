
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const portfolioItems = [
  {
    category: 'software',
    items: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured online shopping platform with inventory management.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        link: '/portfolio/ecommerce-platform'
      },
      {
        title: 'Fitness Tracking App',
        description: 'Mobile application for tracking workouts and nutrition.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        link: '/portfolio/fitness-app'
      },
      {
        title: 'Banking Dashboard',
        description: 'Secure dashboard for managing financial transactions.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        link: '/portfolio/banking-dashboard'
      }
    ]
  },
  {
    category: 'photography',
    items: [
      {
        title: 'Product Photography',
        description: 'High-quality product images for an exclusive watch brand.',
        image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0',
        link: '/portfolio/product-photography'
      },
      {
        title: 'Corporate Portraits',
        description: 'Professional portraits for a law firm\'s team page.',
        image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0',
        link: '/portfolio/corporate-portraits'
      },
      {
        title: 'Food Photography',
        description: 'Mouthwatering images for a restaurant\'s menu and website.',
        image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
        link: '/portfolio/food-photography'
      }
    ]
  },
  {
    category: 'videography',
    items: [
      {
        title: 'Corporate Overview',
        description: 'Brand story video for a technology startup.',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
        link: '/portfolio/corporate-video'
      },
      {
        title: 'Product Launch',
        description: 'Promotional video for a new product release.',
        image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092',
        link: '/portfolio/product-launch'
      },
      {
        title: 'Event Coverage',
        description: 'Highlights from a major industry conference.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
        link: '/portfolio/event-coverage'
      }
    ]
  }
];

const PortfolioCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        <Link 
          to={item.link}
          className="inline-flex items-center text-primary hover:underline"
        >
          View Project <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-container bg-muted/10 py-20" id="portfolio">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our recent projects and see how we've helped our clients achieve their goals.
        </p>
      </motion.div>

      <Tabs defaultValue="software" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="videography">Videography</TabsTrigger>
          </TabsList>
        </div>
        
        {portfolioItems.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PortfolioCard item={item} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 text-center">
        <Button 
          variant="outline"
          size="lg"
          asChild
        >
          <Link to="/portfolio">
            View Full Portfolio <ChevronRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default PortfolioSection;
