
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialSlider from "@/components/TestimonialSlider";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";

import { Terminal, Server, Database, FileText, Beaker, CheckSquare, Building } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "JSat Automation - At The Heart Of Your Innovation";
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'JSat Automation - Global technology company specializing in automation, IT/OT convergence, and compliance solutions for Industry 4.0 and beyond.';
    document.head.appendChild(metaDescription);
    
    // Add keywords meta tag for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'automation, process control, IT/OT convergence, MES, regulatory compliance, lab automation, validation, building automation systems, industrial automation, Industry 4.0, digital transformation, manufacturing execution systems, smart factory, IoT, cloud automation';
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
      features: ["S88 Batch", "Integration (DCS, SCADA)", "Cloud OT", "Life Cycle Documentation", "Validation"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    },
    {
      icon: <Server size={24} />,
      title: "IT/OT Convergence",
      description: "Bridging Information and Operational Technology systems",
      features: ["Server-Network infra", "Upgrades and Migrations", "Cloud & Hybrid Deployments", "Cybersecurity", "Data Integrity"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    },
    {
      icon: <Database size={24} />,
      title: "MES/MOM",
      description: "Manufacturing Execution Systems for operational excellence",
      features: ["Recipe Authoring", "S95 Architecture", "Batch Reports", "OEE & Downtime Tracking", "Work Orders"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    },
    {
      icon: <FileText size={24} />,
      title: "Regulatory",
      description: "Compliance and documentation for regulated industries",
      features: ["Regulatory Dossiers", "Regulatory Affairs Strategy", "Remediation Documents", "Merger & Acquisition Analysis", "QOS"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    },
    {
      icon: <Beaker size={24} />,
      title: "Lab Automation",
      description: "Advanced solutions for laboratory processes",
      features: ["Work-Cell Development", "EFMEA & Risk Management", "Custom Tools", "OTS Robotics", "Full Validation"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    },
    {
      icon: <CheckSquare size={24} />,
      title: "Validation",
      description: "Ensuring quality and compliance in regulated environments",
      features: ["Asset Planning & Tracking", "Documentation Authoring", "Equipment Validation", "Training", "Onsite Support"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    },
    {
      icon: <Building size={24} />,
      title: "BAS/BMS/EMS",
      description: "Building and energy management systems",
      features: ["HVAC Design and Build", "Critical Environments", "Building Analytics", "Fault Detection", "Full Commissioning"],
      imageSrc: "public/lovable-uploads/6c73da78-a151-4b94-8946-1af8344f37fa.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero3D />
      
      {/* What We Do Section */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative z-20">
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
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-jsblue via-jsblue/95 to-jsblue/90 text-white">
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
      <section className="section-padding bg-gray-50 dark:bg-jsblue/10 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-jspurple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-jsaccent/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
      
      {/* Locations Section */}
      <Locations />
      
      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Partner Section */}
      <section className="section-padding bg-gradient-to-br from-jspurple/90 via-jspurple/80 to-jsaccent/80 text-white">
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
            <button className="px-8 py-3 bg-white text-jspurple font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl">
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
