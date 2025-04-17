
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Code, 
  Camera, 
  Film, 
  Layout, 
  Smartphone, 
  Database, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions built with cutting-edge technologies to solve your business challenges.',
    icon: Code,
    color: 'from-blue-500 to-indigo-700'
  },
  {
    title: 'Photography',
    description: 'Professional photography that captures the essence of your brand and tells your unique story.',
    icon: Camera,
    color: 'from-green-500 to-emerald-700'
  },
  {
    title: 'Videography',
    description: 'Cinematic video production that engages your audience and communicates your message.',
    icon: Film,
    color: 'from-orange-500 to-amber-700'
  },
  {
    title: 'Web Design',
    description: 'Responsive websites designed to provide an exceptional user experience and drive conversions.',
    icon: Layout,
    color: 'from-primary to-secondary'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver performance and user satisfaction.',
    icon: Smartphone,
    color: 'from-pink-500 to-rose-700'
  },
  {
    title: 'Database Solutions',
    description: 'Robust database design and optimization to ensure your data is secure and accessible.',
    icon: Database,
    color: 'from-cyan-500 to-teal-700'
  }
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: index * 0.1 }
      });
    }
  }, [isInView, animation, index]);

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={animation}
      className="feature-card group"
    >
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-4">
        {service.description}
      </p>
      <Link 
        to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-flex items-center text-primary hover:underline"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [isInView, animation]);

  return (
    <section className="section-container" id="services">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={animation}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a comprehensive range of digital services to help your business thrive in the digital world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button 
          size="lg" 
          variant="outline"
          asChild
        >
          <Link to="/services">
            View All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
