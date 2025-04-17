
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

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
    <section className="relative py-24" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Ready to bring your vision to life? Get in touch with us today to discuss how we can help your business grow.
            </p>
            
            <div className="space-y-6 max-w-lg">
              <div className="bg-card/50 backdrop-blur-sm p-5 rounded-lg border border-muted">
                <h3 className="font-heading font-bold text-lg mb-2">Software Development Inquiry</h3>
                <p className="text-muted-foreground">Need custom software that scales with your business? Our team can build solutions tailored to your needs.</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-5 rounded-lg border border-muted">
                <h3 className="font-heading font-bold text-lg mb-2">Photography & Videography</h3>
                <p className="text-muted-foreground">Looking for visual content that stands out? We capture moments that tell your brand's story.</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-5 rounded-lg border border-muted">
                <h3 className="font-heading font-bold text-lg mb-2">Consultation</h3>
                <p className="text-muted-foreground">Not sure what you need? Schedule a free consultation with our experts to explore your options.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-xl border border-muted shadow-lg p-6 lg:p-8"
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="input-field resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending... <Check className="ml-2 h-4 w-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
