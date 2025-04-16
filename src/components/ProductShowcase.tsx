
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Shield, Cloud } from 'lucide-react';
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
  
  const floatVariants = {
    float: {
      y: [-10, 10],
      rotate: [-2, 2],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3,
          ease: 'easeInOut',
        },
        rotate: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3,
          ease: 'easeInOut',
        }
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-jspurple/30 via-jsblue/40 to-jsaccent/30 dark:from-jspurple/20 dark:via-jsblue/30 dark:to-jsaccent/20 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-jspurple/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-jsaccent/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-jsblue/20 rounded-full filter blur-3xl"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Particles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-jsaccent/50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Our Flagship Product
          </motion.h2>
          <motion.div 
            className="text-2xl md:text-4xl font-bold gradient-text mb-4"
            variants={itemVariants}
          >
            JSatOne
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            An Omni Connected Software Platform Trusted By Industry Leaders
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center mt-6 gap-4"
            variants={itemVariants}
          >
            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/50 px-4 py-1 text-sm font-medium text-jspurple dark:text-purple-300">
              <Shield className="mr-1 h-4 w-4" /> GxP Friendly
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-4 py-1 text-sm font-medium text-jsaccent dark:text-blue-300">
              <Zap className="mr-1 h-4 w-4" /> Customizable
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-4 py-1 text-sm font-medium text-green-600 dark:text-green-300">
              <Cloud className="mr-1 h-4 w-4" /> Cloud/Hybrid Hosted
            </span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Traditional Ownership vs JSatOne Advantage</h3>
            
            <div className="bg-white/80 dark:bg-jsblue/40 rounded-xl shadow-lg overflow-hidden backdrop-blur-md border border-gray-200 dark:border-white/10">
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
                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.traditional}</span>
                  </div>
                  <div className="p-4 flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.jsatOne}</span>
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
                className="mt-6 bg-gradient-to-r from-jspurple to-jsaccent text-white hover:bg-gradient-to-r hover:from-jspurple/90 hover:to-jsaccent/90 shadow-xl"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="relative h-[550px] md:h-[600px] flex items-center justify-center">
              {/* Main circular backdrop */}
              <motion.div 
                className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-jspurple/30 to-jsaccent/30 dark:from-jspurple/20 dark:to-jsaccent/20 backdrop-blur-sm"
                animate={{ 
                  rotate: 360,
                }}
                transition={{
                  duration: 120,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
              
              {/* Central platform visualization */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] z-10"
                variants={floatVariants}
                animate="float"
              >
                <div className="relative w-full h-full rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-jspurple/60 to-jsaccent/60 backdrop-blur-md rounded-xl shadow-2xl border border-white/20"></div>
                  
                  <div className="absolute inset-0 p-6 overflow-hidden">
                    <div className="text-xl md:text-2xl font-bold mb-4 text-white text-center">JSatOne Modules</div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {modules.map((module, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm md:text-base border border-white/10 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
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
                className="absolute top-[5%] right-[15%] w-32 h-48 md:w-48 md:h-72 bg-black rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ 
                  transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                <Image 
                  src="public/lovable-uploads/bf9ab57a-c7c3-4a13-b081-5f2aded52a18.png" 
                  alt="JSatOne Mobile App" 
                  layout="fill" 
                  objectFit="cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-[10%] left-[10%] w-48 h-32 md:w-72 md:h-48 bg-black rounded-lg overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ 
                  transform: "perspective(1000px) rotateY(15deg) rotateX(5deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                <Image 
                  src="public/lovable-uploads/6911f094-a3e5-4c0c-b218-2b85adf63344.png" 
                  alt="JSatOne Dashboard" 
                  layout="fill" 
                  objectFit="cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>
              
              {/* Orbiting elements */}
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-jspurple to-jsaccent/80 flex items-center justify-center shadow-lg shadow-jsaccent/30"
                  style={{
                    // Position at different angles around the circle
                    left: `calc(50% + ${Math.cos(i * Math.PI / 2) * 40}%)`,
                    top: `calc(50% + ${Math.sin(i * Math.PI / 2) * 40}%)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 5px rgba(139, 92, 246, 0.3)",
                      "0 0 20px rgba(139, 92, 246, 0.6)",
                      "0 0 5px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 2,
                  }}
                >
                  <span className="text-white text-xs">●</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
