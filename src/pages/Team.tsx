
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin, Mail, Users } from "lucide-react";

const Team = () => {
  useEffect(() => {
    document.title = "Our Team | JSat Automation";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Meet the innovative minds behind JSat Automation. Our team of experts is dedicated to delivering cutting-edge automation solutions for businesses across the globe.';
    document.head.appendChild(metaDescription);
    
    // Add keywords meta tag for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'JSat team, automation experts, Jeetu Satpute, Ryan Arceo, Sarvesh Ayre, Shashank Gupta, Mary Lopez, Ajay Pandit, automation professionals, technology leaders';
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up meta tags on unmount
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const teamMembers = [
    {
      name: "Jeetu Satpute",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in automation and technology integration, Jeetu has led JSat from its inception to become a global leader in industrial automation solutions.",
      imageSrc: "public/lovable-uploads/364e2396-d695-4d63-94d3-ab931a9c1d63.png"
    },
    {
      name: "Ryan \"Professor\" Arceo",
      role: "Chief Technology Officer",
      bio: "Ryan brings deep technical expertise in control systems and software development, guiding JSat's technical strategy and innovation roadmap.",
      imageSrc: "public/lovable-uploads/364e2396-d695-4d63-94d3-ab931a9c1d63.png"
    },
    {
      name: "Sarvesh Ayre",
      role: "VP of Operations",
      bio: "Sarvesh oversees all operational aspects of JSat, ensuring efficient delivery of projects and maintaining the highest standards of quality.",
      imageSrc: "public/lovable-uploads/364e2396-d695-4d63-94d3-ab931a9c1d63.png"
    },
    {
      name: "Shashank Gupta",
      role: "Head of Software Engineering",
      bio: "Shashank leads our software development teams, bringing expertise in creating robust, scalable automation software solutions.",
      imageSrc: "public/lovable-uploads/364e2396-d695-4d63-94d3-ab931a9c1d63.png"
    },
    {
      name: "Mary Lopez",
      role: "Director of Client Success",
      bio: "Mary ensures that every client engagement exceeds expectations, fostering long-term partnerships and ongoing success.",
      imageSrc: "public/lovable-uploads/364e2396-d695-4d63-94d3-ab931a9c1d63.png"
    },
    {
      name: "Ajay Pandit",
      role: "Chief Innovation Officer",
      bio: "Ajay leads research and development at JSat, identifying emerging technologies and creating innovative solutions for our clients.",
      imageSrc: "public/lovable-uploads/364e2396-d695-4d63-94d3-ab931a9c1d63.png"
    }
  ];

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
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Users size={28} className="text-jspurple" />
              <span className="text-jspurple font-medium text-lg">Our Leadership</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet Our <span className="gradient-text">Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Behind every successful project at JSat is a team of dedicated professionals with deep industry expertise.
              Together, we're driving innovation and delivering exceptional results for our clients.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-jsblue/20 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 relative overflow-hidden bg-gradient-to-br from-jspurple/20 to-jsaccent/20">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-jspurple/40 to-jsaccent/40"
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-full w-32 h-32 flex items-center justify-center border border-white/30">
                      <div className="text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-jspurple dark:text-jsaccent text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-jspurple/10 hover:bg-jspurple/20 flex items-center justify-center transition-colors"
                    >
                      <Linkedin size={16} className="text-jspurple" />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-jsaccent/10 hover:bg-jsaccent/20 flex items-center justify-center transition-colors"
                    >
                      <Mail size={16} className="text-jsaccent" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Team Culture Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-jsblue/20 dark:to-jsblue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              At JSat, we're guided by a set of core values that shape our culture and drive our success.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-jsblue/20 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-jspurple/10 dark:bg-jspurple/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-jspurple">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace creativity and forward-thinking to develop solutions that drive our clients' success in a rapidly evolving technological landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-jsblue/20 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-jsaccent/10 dark:bg-jsaccent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-jsaccent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to delivering the highest quality solutions, exceeding expectations and setting new standards in the industry.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-jsblue/20 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of teamwork, working closely with our clients and partners to achieve shared goals and deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-jspurple/10 to-jsaccent/10 dark:from-jspurple/5 dark:to-jsaccent/5 rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div>
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Join Our Team
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  We're always looking for talented individuals who are passionate about automation and innovation. 
                  Explore career opportunities at JSat and be part of a team that's shaping the future of industry.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="/careers" 
                    className="inline-flex items-center px-6 py-3 bg-jspurple text-white font-semibold rounded-lg hover:bg-jspurple/90 transition-colors"
                  >
                    View Open Positions
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative h-64 md:h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-jspurple/30 to-jsaccent/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="text-4xl font-bold gradient-text mb-4">Join Us</div>
                      <div className="text-gray-600 dark:text-gray-300">Be part of a team that's driving innovation in automation</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
