
import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">404</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xl text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or is still under construction.
            </p>
            
            <Button asChild>
              <Link to="/" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Return to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
