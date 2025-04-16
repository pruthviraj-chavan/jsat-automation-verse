
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Terminal, Server, Database, FileText, Beaker, CheckSquare, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "@/components/Image";

const WhatWeDo = () => {
  useEffect(() => {
    document.title = "What We Do | JSat Automation";
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'JSat Automation offers comprehensive automation solutions including Process Control, IT/OT Convergence, MES/MOM, Regulatory Compliance, Lab Automation, Validation, and Building Automation Systems.';
    document.head.appendChild(metaDescription);
    
    // Add keywords meta tag for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'process control, IT/OT convergence, MES, MOM, manufacturing execution systems, regulatory compliance, lab automation, validation, BAS, BMS, EMS, building automation, industrial automation';
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up meta tags on unmount
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const services = [
    {
      icon: <Terminal size={24} />,
      title: "Process Control",
      description: "Advanced automation solutions for manufacturing processes",
      details: "Our Process Control solutions create a connected digital thread, bringing together manufacturing operations, business planning, and logistics. We design and implement systems that ensure your processes are efficient, reliable, and compliant with industry standards.",
      features: ["S88 Batch", "Integration (DCS, SCADA)", "Cloud OT", "Life Cycle Documentation", "Validation"],
      bgColor: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10"
    },
    {
      icon: <Server size={24} />,
      title: "IT/OT Convergence",
      description: "Bridging Information and Operational Technology systems",
      details: "We help businesses bridge the gap between information technology (IT) and operational technology (OT) to create a unified, efficient technological ecosystem. Our solutions enable secure, real-time data flow between business systems and manufacturing floor operations.",
      features: ["Server-Network infrastructure", "Upgrades and Migrations", "Cloud & Hybrid Deployments", "Cybersecurity", "Data Integrity"],
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10"
    },
    {
      icon: <Database size={24} />,
      title: "MES/MOM",
      description: "Manufacturing Execution Systems for operational excellence",
      details: "Our Manufacturing Execution Systems (MES) and Manufacturing Operations Management (MOM) solutions optimize production workflows, reduce waste, and improve product quality. We implement systems that provide real-time visibility into your manufacturing processes.",
      features: ["Recipe Authoring", "S95 Architecture", "Batch Reports", "OEE & Downtime Tracking", "Work Orders"],
      bgColor: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10"
    },
    {
      icon: <FileText size={24} />,
      title: "Regulatory",
      description: "Compliance and documentation for regulated industries",
      details: "We help businesses navigate complex regulatory landscapes with comprehensive compliance solutions. Our team ensures your operations meet industry standards and regulations, reducing compliance risks and streamlining audit processes.",
      features: ["Regulatory Dossiers", "Regulatory Affairs Strategy", "Remediation Documents", "Merger & Acquisition Analysis", "QOS"],
      bgColor: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10"
    },
    {
      icon: <Beaker size={24} />,
      title: "Lab Automation",
      description: "Advanced solutions for laboratory processes",
      details: "Our Lab Automation solutions streamline laboratory operations, increase testing accuracy, and enhance data integrity. We design and implement systems that automate routine tasks, enabling scientists to focus on innovation and discovery.",
      features: ["Work-Cell Development", "EFMEA & Risk Management", "Custom Tools", "OTS Robotics", "Full Validation"],
      bgColor: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/10"
    },
    {
      icon: <CheckSquare size={24} />,
      title: "Validation",
      description: "Ensuring quality and compliance in regulated environments",
      details: "Our validation services ensure your systems and processes meet quality standards and regulatory requirements. We provide comprehensive validation documentation and testing to maintain compliance and reduce operational risks.",
      features: ["Asset Planning & Tracking", "Documentation Authoring", "Equipment Validation", "Training", "Onsite Support"],
      bgColor: "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/10"
    },
    {
      icon: <Building size={24} />,
      title: "BAS/BMS/EMS",
      description: "Building and energy management systems",
      details: "Our Building Automation Systems (BAS), Building Management Systems (BMS), and Energy Management Systems (EMS) solutions optimize building operations, reduce energy consumption, and enhance occupant comfort. We design and implement systems that provide centralized control over your facility.",
      features: ["HVAC Design and Build", "Critical Environments", "Building Analytics", "Fault Detection", "Full Commissioning"],
      bgColor: "from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/10"
    }
  ];

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jspurple/10 to-jsaccent/10 dark:from-jspurple/5 dark:to-jsaccent/5"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-jspurple/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-jsaccent/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What We <span className="gradient-text">Do</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              JSat delivers cutting-edge automation solutions across multiple industries, helping businesses 
              streamline operations, enhance productivity, and maintain regulatory compliance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-jspurple hover:bg-jspurple/90 shadow-lg shadow-jspurple/30">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-jsblue/20 dark:to-jsblue/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From process control to building automation, we offer end-to-end solutions tailored to your specific industry needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${service.bgColor} p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer ${
                  activeServiceIndex === index ? 'ring-2 ring-jspurple' : ''
                }`}
                onClick={() => setActiveServiceIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-jspurple/10 dark:bg-jspurple/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-jspurple">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Details Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`grid md:grid-cols-5 gap-8 items-center mb-16 last:mb-0 ${
                  activeServiceIndex === index ? 'block' : 'hidden'
                }`}
                initial="hidden"
                animate={activeServiceIndex === index ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.div className="md:col-span-3" variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <div className="bg-jspurple/10 dark:bg-jspurple/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                      <div className="text-jspurple">{service.icon}</div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.details}
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-2 mt-0.5">
                          <CheckSquare size={12} className="text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="bg-jspurple hover:bg-jspurple/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                
                <motion.div className="md:col-span-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-jsblue/10 dark:to-jsblue/20 p-6 rounded-xl overflow-hidden" variants={itemVariants}>
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                    {/* Replace with actual service images */}
                    <Image 
                      src="public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png" 
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-jspurple via-jspurple/90 to-jsaccent/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Operations?
          </motion.h2>
          
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Partner with JSat to harness the power of automation and digital transformation for your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="bg-white text-jspurple hover:bg-gray-100 border-0">
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhatWeDo;
