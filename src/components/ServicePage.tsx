
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
  imageSrc: string;
  ctaLink: string;
  ctaText: string;
}

const ServicePage = ({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  ctaLink,
  ctaText,
}: ServicePageProps) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-secondary/20 to-background/0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 gradient-text">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 md:p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{description}</h2>
                <div className="space-y-4 my-6">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="mr-4 text-primary flex-shrink-0 bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button asChild className="mt-4 px-6 py-2 rounded-lg">
                  <Link to={ctaLink}>
                    {ctaText} <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-first lg:order-last mb-6 lg:mb-0">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl rotate-2 blur-sm"></div>
                  <img
                    src={imageSrc}
                    alt={title}
                    className="relative w-full h-auto rounded-xl shadow-md object-cover aspect-video"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
