
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from './Image';

const ProductShowcase = () => {
  const advantages = [
    { traditional: 'High Capital Expenditure', jsatOne: 'Low Capital Expenditure' },
    { traditional: 'Cost of expensive licensing', jsatOne: 'All in one price includes implementation' },
    { traditional: 'Cost of initial engineering effort', jsatOne: 'All in one price includes implementation' },
    { traditional: 'Cost of Qualification & Compliance', jsatOne: 'All in one price includes Qualification & Compliance' },
    { traditional: 'Additional cost to include multiple sites', jsatOne: 'All in one price includes multiple site compatibility' },
    { traditional: 'Purchasing expensive hardware', jsatOne: 'Competitive hardware pricing that leverages advanced secure flexible designs' }
  ];

  const modules = [
    'Interactive Training',
    'Workflow (GxP Logs, etc.)',
    'EMS/BAS/BMS',
    'SCADA',
    'MES',
    'LIMS',
    'ERP',
    'Assets, and more...'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding animated-gradient-bg overflow-hidden relative">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            Our Flagship Product
          </motion.h2>
          <motion.div 
            className="text-2xl md:text-3xl font-bold gradient-text mb-3"
            variants={itemVariants}
          >
            JSatOne
          </motion.div>
          <motion.p 
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            An Omni Connected Software Platform Trusted By Industry Leaders
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center mt-6 gap-4"
            variants={itemVariants}
          >
            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1 text-sm font-medium text-jspurple">
              GxP Friendly
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-jsaccent">
              Customizable
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1 text-sm font-medium text-green-600 dark:text-green-400">
              Cloud/Hybrid Hosted
            </span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Traditional Ownership vs JSatOne Advantage</h3>
            
            <div className="bg-white dark:bg-jsblue/30 rounded-xl shadow-lg overflow-hidden backdrop-blur-md border border-white/10">
              {advantages.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 flex items-center space-x-2 border-r border-gray-200 dark:border-gray-700">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.traditional}</span>
                  </div>
                  <div className="p-4 flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.jsatOne}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="mt-6 bg-white text-jsblue hover:bg-gray-100 shadow-xl"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-jsblue rounded-xl grid-pattern"></div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]"
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 2, 0],
                rotateX: [0, 5, 0],
                rotateY: [0, 3, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-jspurple/30 to-jsaccent/30 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20"></div>
                
                <div className="absolute inset-0 p-6 overflow-hidden">
                  <div className="text-xl font-bold mb-4 gradient-text">JSatOne Modules</div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {modules.map((module, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-sm border border-white/10 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {module}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs text-center bg-white/10 rounded-lg p-2 backdrop-blur-sm text-white">
                      JSatOne brings all modules under one umbrella for seamless user experience
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Device mockups */}
            <motion.div 
              className="absolute bottom-10 right-5 w-60 h-40 bg-black rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ 
                transform: "perspective(1000px) rotateY(-10deg) rotateX(5deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <Image 
                src="public/lovable-uploads/7f334f29-d0b7-4dd2-8028-e0f093ec08e9.png" 
                alt="JSatOne Dashboard" 
                layout="fill" 
                objectFit="cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 left-5 w-32 h-60 bg-black rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ 
                transform: "perspective(1000px) rotateY(10deg) rotateX(5deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <Image 
                src="public/lovable-uploads/7f334f29-d0b7-4dd2-8028-e0f093ec08e9.png" 
                alt="JSatOne Mobile App" 
                layout="fill" 
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-jspurple/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-jsaccent/30 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ProductShowcase;
