
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  services: string[];
  otherServices: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    source: "",
    services: [],
    otherServices: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    document.title = "Contact Us | JSat Automation";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Contact JSat Automation for your automation, process control, and compliance needs. Reach our team of experts today for personalized solutions to drive your business forward.';
    document.head.appendChild(metaDescription);
    
    // Add keywords meta tag for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'JSat contact, automation services, process control contact, contact form, automation support, JSat locations, industrial automation contact';
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up meta tags on unmount
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (formErrors[name as keyof FormData]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    }
    
    // Clear service error if any services are selected
    if (formErrors.services && checked) {
      setFormErrors({
        ...formErrors,
        services: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (formData.services.length === 0) {
      errors.services = "Please select at least one service";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        source: "",
        services: [],
        otherServices: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Advanced Process Control & Batch Systems",
    "Manufacturing Execution Systems",
    "Building Automation Systems",
    "Legacy Systems Upgrade and Migration",
    "cGxP Documentation & Validation",
    "Data Integrity Solutions",
    "Support Contracts",
    "Training",
    "Project Management",
    "JSatOne",
    "Other (Please mention)"
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
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="gradient-text">Us</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Whether you have a query, need more information, or are ready to kickstart your project, 
              we are just a message away.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-12 bg-white dark:bg-jsblue/20 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-jspurple/10 dark:bg-jspurple/20 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-jspurple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Send us an email</p>
              <a 
                href="mailto:sales@jsatautomation.com" 
                className="text-jspurple hover:underline font-medium"
              >
                Sales@JSatAutomation.com
              </a>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-jsaccent/10 dark:bg-jsaccent/20 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-jsaccent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Call our hotline</p>
              <a 
                href="tel:+12679031800" 
                className="text-jsaccent hover:underline font-medium"
              >
                +1 (267) 903 1800
              </a>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Monday - Friday</p>
              <p className="text-gray-800 dark:text-gray-200 font-medium">9:00 AM - 6:00 PM EST</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Looking For More Information? We've Got You Covered! Fill out the contact form to send us a direct message. 
                    Please provide us with some details about your organization and the services you are interested in. 
                    Our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="bg-gradient-to-br from-jspurple/10 to-jsaccent/10 dark:from-jspurple/5 dark:to-jsaccent/5 p-6 rounded-xl mb-8">
                    <h3 className="font-semibold mb-4">Headquarters</h3>
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-jspurple flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-800 dark:text-gray-200">1730 Walton Road, Suite 100</p>
                        <p className="text-gray-800 dark:text-gray-200">Blue Bell, PA 19422, USA</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-jsaccent flex-shrink-0" />
                      <p className="text-gray-800 dark:text-gray-200">+1 (267) 903 1800</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-jsblue/20 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold mb-4">Connect With Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Follow us on social media to stay updated with our latest news and developments.
                    </p>
                    <div className="flex space-x-4">
                      {/* Replace with actual social media icons/links */}
                      <a href="#" className="w-10 h-10 rounded-full bg-jspurple/10 hover:bg-jspurple/20 flex items-center justify-center transition-colors">
                        <svg className="h-5 w-5 text-jspurple" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-jsaccent/10 hover:bg-jsaccent/20 flex items-center justify-center transition-colors">
                        <svg className="h-5 w-5 text-jsaccent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors">
                        <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:col-span-3 bg-white dark:bg-jsblue/20 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">Name <span className="text-red-500">*</span></Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className={formErrors.name ? "border-red-500" : ""}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="mb-2 block">Company</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="mb-2 block">Email <span className="text-red-500">*</span></Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        className={formErrors.email ? "border-red-500" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="mb-2 block">How did you hear about JSat?</Label>
                    <RadioGroup
                      value={formData.source}
                      onValueChange={(value) => setFormData({...formData, source: value})}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Search Engine" id="search" />
                          <Label htmlFor="search">Search Engine</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Social Media" id="social" />
                          <Label htmlFor="social">Social Media</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Referral" id="referral" />
                          <Label htmlFor="referral">Referral</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Event" id="event" />
                          <Label htmlFor="event">Event or Conference</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Other" id="other-source" />
                          <Label htmlFor="other-source">Other</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="mb-2 block">Which services are you interested in? <span className="text-red-500">*</span></Label>
                    {formErrors.services && (
                      <p className="text-red-500 text-sm mb-2">{formErrors.services}</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Checkbox 
                            id={`service-${index}`} 
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor={`service-${index}`} className="text-sm">{service}</Label>
                        </div>
                      ))}
                    </div>
                    
                    {formData.services.includes('Other (Please mention)') && (
                      <div className="mt-4">
                        <Label htmlFor="otherServices" className="mb-2 block">Other services</Label>
                        <Input 
                          id="otherServices" 
                          name="otherServices" 
                          value={formData.otherServices}
                          onChange={handleInputChange}
                          placeholder="Please specify"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="mb-2 block">Message <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or inquiry"
                      rows={5}
                      className={formErrors.message ? "border-red-500" : ""}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-jspurple hover:bg-jspurple/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Presence Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-jsblue/20 dark:to-jsblue/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Locations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We have offices in North America, Europe and Asia to serve clients worldwide.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="bg-white dark:bg-jsblue/20 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800" variants={itemVariants}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Headquarters</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">United States</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">1730 Walton Road, Suite 100</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Blue Bell, PA 19422, USA</p>
                <p className="text-jsaccent">Tel: +1 (267) 903 1800</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white dark:bg-jsblue/20 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800" variants={itemVariants}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Asia Pacific</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">India & Singapore</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Pune, India 411005</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Shrirang House, 364/365/1, Shivaji Nagar, J.M. Road</p>
                <p className="text-gray-600 dark:text-gray-300">Singapore 160050</p>
                <p className="text-gray-600 dark:text-gray-300">50 Havelock Road, Suite 02-767, The Beo Crescent</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white dark:bg-jsblue/20 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800" variants={itemVariants}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Europe</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Netherlands, Romania & UK</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Leiden, Netherlands</p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Kanaalpark 140, 2321 JV</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Cluj-Napoca, Romania</p>
                <p className="text-gray-600 dark:text-gray-300">Alexandru Vaida Voevod Street 53B</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white dark:bg-jsblue/20 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800" variants={itemVariants}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">West Coast USA</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">California</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Los Angeles</p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">611 N Brand Blvd, Suite 1300, Glendale, CA 91203</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">San Francisco</p>
                <p className="text-gray-600 dark:text-gray-300">1900 Powell Street, Suite 700, Emeryville, CA 94608</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white dark:bg-jsblue/20 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800" variants={itemVariants}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">East Coast USA</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Massachusetts & Illinois</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Boston</p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">300 Baker Ave, Suite 300a, Concord, MA 01742</p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Chicago</p>
                <p className="text-gray-600 dark:text-gray-300">544 Lakeview Parkway, Suite 100, Vernon Hills, IL 60061</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white dark:bg-jsblue/20 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800" variants={itemVariants}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Latin America</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Costa Rica</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">San Jose, Costa Rica</p>
                <p className="text-gray-600 dark:text-gray-300">Escazu Corporate Center (6th Floor), San Rafael de Escazu</p>
                <p className="text-gray-600 dark:text-gray-300">San Jose 10203, Costa Rica</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
