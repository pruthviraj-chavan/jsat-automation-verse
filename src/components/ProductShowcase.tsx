
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <section className="section-padding bg-gray-50 dark:bg-jsblue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Flagship Product</h2>
          <div className="text-2xl md:text-3xl font-bold gradient-text mb-3">JSatOne</div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            An Omni Connected Software Platform Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center mt-6 gap-4">
            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1 text-sm font-medium text-jspurple">
              GxP Friendly
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-jsaccent">
              Customizable
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1 text-sm font-medium text-green-600 dark:text-green-400">
              Cloud/Hybrid Hosted
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Traditional Ownership vs JSatOne Advantage</h3>
            
            <div className="bg-white dark:bg-jsblue/50 rounded-xl shadow-lg overflow-hidden">
              {advantages.map((item, index) => (
                <div key={index} className="grid grid-cols-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="p-4 flex items-center space-x-2 border-r border-gray-200 dark:border-gray-700">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm">{item.traditional}</span>
                  </div>
                  <div className="p-4 flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item.jsatOne}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="mt-6 bg-jspurple hover:bg-jspurple/90">
              Request Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-jsblue rounded-xl grid-pattern"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
              <div className="floating-cube w-full h-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-jspurple/20 to-jsaccent/20 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20"></div>
                  
                  <div className="absolute inset-0 p-6 overflow-hidden">
                    <div className="text-xl font-bold mb-4 gradient-text">JSatOne Modules</div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {modules.map((module, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-sm border border-white/10">
                          {module}
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-xs text-center bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                        JSatOne brings all modules under one umbrella for seamless user experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
