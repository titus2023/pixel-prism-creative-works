
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "PixelPrism transformed our business with their exceptional software development and stunning visuals. Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
    avatar: "SJ"
  },
  {
    quote: "The team at PixelPrism is incredibly talented. Their photography and videography work captured our brand essence perfectly, and the software they developed streamlined our operations, saving us time and resources.",
    author: "Michael Chen",
    position: "Marketing Director, Elevate Brands",
    avatar: "MC"
  },
  {
    quote: "Working with PixelPrism was a game-changer for our startup. Their creative approach and technical expertise helped us launch a product that stands out in a crowded market. Highly recommended!",
    author: "Alex Rodriguez",
    position: "Founder, NovaTech Solutions",
    avatar: "AR"
  },
  {
    quote: "The quality of work from PixelPrism is simply outstanding. From concept to execution, their team delivers excellence at every stage. They're not just service providers, they're true partners in our success.",
    author: "Lisa Patel",
    position: "Operations Manager, Global Innovations",
    avatar: "LP"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-container py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it — hear from some of our satisfied clients.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-8 left-0 text-primary/20">
          <Quote size={80} />
        </div>

        <div className="px-4 md:px-10 py-8 bg-card rounded-2xl border border-muted shadow-lg relative z-10">
          <div className="min-h-[200px] flex flex-col justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <Avatar className="h-14 w-14 mb-3">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonials[currentIndex].author}`} alt={testimonials[currentIndex].author} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonials[currentIndex].avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-heading font-bold">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="h-10 w-10 rounded-full bg-background shadow-md"
          >
            <ChevronLeft size={20} />
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="h-10 w-10 rounded-full bg-background shadow-md"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
