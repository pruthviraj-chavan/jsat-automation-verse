
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialSlider from "@/components/TestimonialSlider";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import { Terminal, Server, Database, FileText, Flask, CheckSquare, Building } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "JSat Automation - At The Heart Of Your Innovation";
  }, []);

  const services = [
    {
      icon: <Terminal size={24} />,
      title: "Process Control",
      description: "Advanced automation solutions for manufacturing processes",
      features: ["S88 Batch", "Integration (DCS, SCADA)", "Cloud OT", "Life Cycle Documentation", "Validation"]
    },
    {
      icon: <Server size={24} />,
      title: "IT/OT Convergence",
      description: "Bridging Information and Operational Technology systems",
      features: ["Server-Network infra", "Upgrades and Migrations", "Cloud & Hybrid Deployments", "Cybersecurity", "Data Integrity"]
    },
    {
      icon: <Database size={24} />,
      title: "MES/MOM",
      description: "Manufacturing Execution Systems for operational excellence",
      features: ["Recipe Authoring", "S95 Architecture", "Batch Reports", "OEE & Downtime Tracking", "Work Orders"]
    },
    {
      icon: <FileText size={24} />,
      title: "Regulatory",
      description: "Compliance and documentation for regulated industries",
      features: ["Regulatory Dossiers", "Regulatory Affairs Strategy", "Remediation Documents", "Merger & Acquisition Analysis", "QOS"]
    },
    {
      icon: <Flask size={24} />,
      title: "Lab Automation",
      description: "Advanced solutions for laboratory processes",
      features: ["Work-Cell Development", "EFMEA & Risk Management", "Custom Tools", "OTS Robotics", "Full Validation"]
    },
    {
      icon: <CheckSquare size={24} />,
      title: "Validation",
      description: "Ensuring quality and compliance in regulated environments",
      features: ["Asset Planning & Tracking", "Documentation Authoring", "Equipment Validation", "Training", "Onsite Support"]
    },
    {
      icon: <Building size={24} />,
      title: "BAS/BMS/EMS",
      description: "Building and energy management systems",
      features: ["HVAC Design and Build", "Critical Environments", "Building Analytics", "Fault Detection", "Full Commissioning"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero3D />
      
      {/* What We Do Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What We Do
            </motion.h2>
            <div className="w-24 h-1 bg-jspurple mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-jsblue to-jsblue/80 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Achievements
            </motion.h2>
            <div className="w-24 h-1 bg-jspurple mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCounter value={10} label="Years of Experience" />
            <StatsCounter value={450} label="Successful Projects" />
            <StatsCounter value={24} suffix="/7" label="Technical Support" />
            <StatsCounter value={10} label="Locations Worldwide" />
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="section-padding bg-gray-50 dark:bg-jsblue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How We Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Exceptional Services & Products - Tailored to Your Unique Goals
            </motion.p>
            <div className="w-24 h-1 bg-jspurple mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              At JSat, we understand that every business is unique, and so are its needs. That's why we offer a variety of engagement models tailored to your specific requirements. Whether you need support for a short-term project or a long-term partnership, our flexible engagement models can help you achieve your goals.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-jsblue/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-jspurple">Flexibility to Adapt</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our engagement models adapt to your changing requirements, ensuring seamless project execution even when priorities shift.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-jsblue/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-jspurple">Cost Certainty</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our transparent pricing models provide budget predictability and control, eliminating unexpected costs.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-jsblue/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-jspurple">Long-term Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We focus on building lasting relationships, continuously improving your systems and processes over time.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-jsblue/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-jspurple">Operational Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our proven project management methodologies ensure efficient execution, quality deliverables, and on-time completion.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-jsblue/30 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-lg font-bold mb-2">Onsite</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Geographically Flexible Model. Helpful during peak-project loads.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-jsblue/30 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-lg font-bold mb-2">Offsite</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Engineering, design, development, testing/QA from JSat's offices across the Globe.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-jsblue/30 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-lg font-bold mb-2">Hybrid</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Combines Onsite and Offsite Models. Flexible to accommodate schedule & cost changes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Partner Section */}
      <section className="section-padding bg-gradient-to-r from-jsblue to-jsblue/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Partner With Us
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            JSat provides its clients with innovative and progressive operational consulting, engineering, data integration, and information technology solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-white text-jsblue font-bold rounded-full hover:bg-gray-100 transition-colors">
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
