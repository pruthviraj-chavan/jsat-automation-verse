import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, Filter, CheckCircle2, Users, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

interface JobType {
  id: number;
  title: string;
  location: string;
  type: "Full Time" | "Contract" | "Remote";
  postedDays: number;
  department: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
}

const Careers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);

  useEffect(() => {
    document.title = "Careers | JSat Automation";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Join the JSat Automation team and be part of a company that's driving innovation in automation, process control, and digital transformation. Explore career opportunities across our global offices.';
    document.head.appendChild(metaDescription);
    
    // Add keywords meta tag for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'JSat careers, automation jobs, process control careers, MES jobs, engineering opportunities, validation engineer, BAS specialist, automation engineer';
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up meta tags on unmount
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const jobs: JobType[] = [
    {
      id: 1,
      title: "Senior RPA Developer (UiPath)",
      location: "Blue Bell, PA, US",
      type: "Full Time",
      postedDays: 5,
      department: "Automation",
      description: "We are seeking an experienced RPA Developer with expertise in UiPath to join our growing automation team. In this role, you will design, develop, and maintain robotic process automation solutions for our clients across various industries.",
      responsibilities: [
        "Design and develop RPA solutions using UiPath",
        "Work with business analysts to understand process requirements",
        "Create detailed documentation for RPA implementations",
        "Conduct testing and debugging of RPA workflows",
        "Provide support for existing RPA solutions",
        "Collaborate with cross-functional teams to ensure successful deployments"
      ],
      requirements: [
        "3+ years of experience with UiPath development",
        "Strong understanding of RPA concepts and best practices",
        "Experience with process analysis and optimization",
        "Excellent problem-solving skills",
        "UiPath certification preferred",
        "Bachelor's degree in Computer Science, Engineering, or related field"
      ]
    },
    {
      id: 2,
      title: "Vertical Lead (Associate Director / Director) - BAS",
      location: "Emeryville, CA, US",
      type: "Full Time",
      postedDays: 5,
      department: "Building Automation",
      description: "We are looking for a Vertical Lead to oversee our Building Automation Systems (BAS) division. The ideal candidate will have extensive experience in BAS implementation and management, with a strong focus on client relationships and team leadership.",
      responsibilities: [
        "Lead and grow the BAS vertical within the organization",
        "Develop and implement strategic plans for the BAS division",
        "Build and maintain client relationships",
        "Oversee project delivery and ensure quality standards",
        "Manage and mentor a team of BAS engineers and specialists",
        "Stay current with industry trends and technologies"
      ],
      requirements: [
        "10+ years of experience in building automation systems",
        "Strong leadership and management skills",
        "Experience with major BAS platforms (Honeywell, Johnson Controls, Siemens, etc.)",
        "Knowledge of HVAC systems and building management principles",
        "Excellent communication and client relationship skills",
        "Bachelor's degree in Engineering, Computer Science, or related field"
      ]
    },
    {
      id: 3,
      title: "Vertical Owner -AD/DIRECTOR) MES",
      location: "Blue Bell, PA, US",
      type: "Full Time",
      postedDays: 5,
      department: "Manufacturing",
      description: "We are seeking a Vertical Owner for our Manufacturing Execution Systems (MES) division. The successful candidate will be responsible for leading and growing our MES practice, with a focus on delivering exceptional solutions to our manufacturing clients.",
      responsibilities: [
        "Lead and develop the MES vertical within the organization",
        "Create and execute strategic plans for growth and innovation",
        "Build and maintain relationships with key clients and partners",
        "Oversee project delivery and ensure quality standards",
        "Develop and mentor a team of MES engineers and consultants",
        "Stay current with MES trends, technologies, and best practices"
      ],
      requirements: [
        "10+ years of experience in manufacturing systems integration",
        "Proven leadership and business development skills",
        "Extensive knowledge of MES platforms and manufacturing processes",
        "Experience in regulated industries (pharmaceuticals, medical devices, etc.)",
        "Strong understanding of Industry 4.0 concepts",
        "Bachelor's degree in Engineering, Computer Science, or related field"
      ]
    },
    {
      id: 4,
      title: "Head of Process Control Vertical (AD/Director)",
      location: "Concord, MA, US",
      type: "Full Time",
      postedDays: 6,
      department: "Process Control",
      description: "We are looking for an experienced leader to head our Process Control vertical. This role involves leading a team of engineers and consultants who design and implement advanced process control solutions for clients across various industries.",
      responsibilities: [
        "Lead and grow the Process Control vertical within the organization",
        "Develop and execute strategic plans for the division",
        "Build and maintain client relationships",
        "Oversee project delivery and ensure quality standards",
        "Manage and mentor a team of process control engineers",
        "Stay current with industry trends and technologies"
      ],
      requirements: [
        "15+ years of experience in process control and automation",
        "Strong leadership and management skills",
        "Experience with DCS, PLC, and SCADA systems",
        "Knowledge of industry standards and regulations",
        "Excellent communication and client relationship skills",
        "Bachelor's degree in Chemical Engineering, Electrical Engineering, or related field"
      ]
    },
    {
      id: 5,
      title: "Business Development Manager (Remote)",
      location: "Remote",
      type: "Full Time",
      postedDays: 26,
      department: "Sales",
      description: "We are seeking a Business Development Manager to drive growth and expand our client base. This role involves identifying new business opportunities, developing relationships with potential clients, and working closely with our technical teams to create compelling proposals.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Develop and maintain relationships with clients and prospects",
        "Create and deliver compelling presentations and proposals",
        "Collaborate with technical teams to understand client needs",
        "Achieve sales targets and contribute to company growth",
        "Represent the company at industry events and trade shows"
      ],
      requirements: [
        "5+ years of business development experience in industrial automation",
        "Strong understanding of automation technologies and solutions",
        "Excellent communication and presentation skills",
        "Proven track record of achieving sales targets",
        "Ability to build and maintain client relationships",
        "Bachelor's degree in Business, Engineering, or related field"
      ]
    },
    {
      id: 6,
      title: "AUTOMATION VALIDATION - Honeywell DCS",
      location: "Blue Bell, PA, US",
      type: "Full Time",
      postedDays: 29,
      department: "Validation",
      description: "We are looking for an Automation Validation Engineer with expertise in Honeywell DCS systems. This role involves ensuring the compliance and validation of automation systems in regulated industries, with a focus on Honeywell DCS platforms.",
      responsibilities: [
        "Develop and execute validation protocols for automation systems",
        "Perform risk assessments and develop validation strategies",
        "Create validation documentation in compliance with industry regulations",
        "Work with clients to understand validation requirements",
        "Collaborate with technical teams to ensure system compliance",
        "Provide guidance on validation best practices"
      ],
      requirements: [
        "5+ years of experience in automation validation",
        "Strong knowledge of Honeywell DCS systems",
        "Understanding of validation methodologies and regulatory requirements",
        "Experience in pharmaceutical, biotechnology, or related industries",
        "Excellent documentation and technical writing skills",
        "Bachelor's degree in Engineering, Computer Science, or related field"
      ]
    },
    {
      id: 7,
      title: "QC Support Specialist",
      location: "Chicago, IL, US",
      type: "Full Time",
      postedDays: 30,
      department: "Quality Control",
      description: "We are seeking a QC Support Specialist to assist our quality control team in ensuring the highest standards for our automation solutions. This role involves working with project teams to implement quality control measures and maintain compliance with industry regulations.",
      responsibilities: [
        "Support the quality control process for automation projects",
        "Assist in developing and maintaining quality documentation",
        "Perform quality audits and identify areas for improvement",
        "Collaborate with project teams to ensure quality standards",
        "Track and report on quality metrics",
        "Support continuous improvement initiatives"
      ],
      requirements: [
        "3+ years of experience in quality control or quality assurance",
        "Understanding of automation systems and processes",
        "Knowledge of industry regulations and standards",
        "Strong attention to detail and analytical skills",
        "Excellent communication and documentation abilities",
        "Bachelor's degree in Engineering, Quality Assurance, or related field"
      ]
    },
    {
      id: 8,
      title: "SR. AUTOMATION & VALIDATION ENGINEER - (DeltaV)",
      location: "Blue Bell, PA, US",
      type: "Full Time",
      postedDays: 31,
      department: "Validation",
      description: "We are looking for a Senior Automation and Validation Engineer with expertise in DeltaV systems. This role involves designing, implementing, and validating automation solutions using DeltaV DCS for clients in regulated industries.",
      responsibilities: [
        "Design and implement automation solutions using DeltaV DCS",
        "Develop validation protocols and documentation",
        "Perform risk assessments and develop validation strategies",
        "Provide technical leadership on automation and validation projects",
        "Collaborate with clients to understand requirements and objectives",
        "Mentor junior engineers and provide technical guidance"
      ],
      requirements: [
        "8+ years of experience in automation and validation",
        "Strong expertise in DeltaV DCS systems",
        "Experience in pharmaceutical, biotechnology, or related industries",
        "Knowledge of industry regulations and validation requirements",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Chemical Engineering, Electrical Engineering, or related field"
      ]
    },
    {
      id: 9,
      title: "BAS Engineering Specialist",
      location: "Blue Bell, PA, US",
      type: "Full Time",
      postedDays: 31,
      department: "Building Automation",
      description: "We are seeking a BAS Engineering Specialist to join our Building Automation Systems team. This role involves designing, implementing, and supporting building automation solutions for our clients, with a focus on energy efficiency and building performance optimization.",
      responsibilities: [
        "Design and implement building automation systems",
        "Develop control strategies for HVAC and building systems",
        "Configure and program BAS controllers and software",
        "Perform system commissioning and testing",
        "Provide technical support for existing BAS installations",
        "Collaborate with clients to understand requirements and objectives"
      ],
      requirements: [
        "5+ years of experience in building automation systems",
        "Proficiency with major BAS platforms (Johnson Controls, Siemens, etc.)",
        "Knowledge of HVAC systems and building management principles",
        "Experience with system integration and network communications",
        "Strong problem-solving and analytical skills",
        "Bachelor's degree in Mechanical Engineering, Electrical Engineering, or related field"
      ]
    },
    {
      id: 10,
      title: "Senior Infrastructure Engineer (DataCenter)",
      location: "Blue Bell, PA, US",
      type: "Full Time",
      postedDays: 31,
      department: "IT/OT",
      description: "We are looking for a Senior Infrastructure Engineer with data center expertise to join our IT/OT team. This role involves designing, implementing, and managing data center infrastructure to support our clients' automation and control systems.",
      responsibilities: [
        "Design and implement data center infrastructure for automation systems",
        "Develop architecture and migration strategies",
        "Ensure high availability and disaster recovery capabilities",
        "Collaborate with IT and OT teams to integrate systems",
        "Provide technical leadership on infrastructure projects",
        "Stay current with data center technologies and best practices"
      ],
      requirements: [
        "10+ years of experience in IT infrastructure and data centers",
        "Strong understanding of virtualization, storage, and networking",
        "Experience with industrial automation and control systems",
        "Knowledge of IT/OT convergence and security principles",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Computer Science, Information Technology, or related field"
      ]
    }
  ];

  const locations = Array.from(new Set(jobs.map(job => job.location)));
  const jobTypes = ["Full Time", "Contract", "Remote"];

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredJobs = jobs.filter(job => {
    // Apply search filter
    const matchesSearch = searchTerm === "" || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply location filter
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.some(loc => job.location.includes(loc));
    
    // Apply type filter
    const matchesType = selectedTypes.length === 0 || 
      selectedTypes.includes(job.type);
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleApply = (job: JobType) => {
    toast({
      title: "Application Started",
      description: `You're applying for ${job.title}. We'll redirect you to our application system.`,
      variant: "default",
    });
    
    // Redirect to application system (simulated)
    setTimeout(() => {
      window.open("https://jsatautomation.applytojob.com", "_blank");
    }, 2000);
  };

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
              <Briefcase size={28} className="text-jspurple" />
              <span className="text-jspurple font-medium text-lg">Career Opportunities</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join Our <span className="gradient-text">Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Be part of a dynamic team that's shaping the future of automation and industry.
              We're always looking for talented individuals who are passionate about innovation and excellence.
            </motion.p>
          </div>
          
          <motion.div 
            className="max-w-xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input 
                type="text"
                placeholder="Search for jobs by title or department"
                className="pl-10 pr-4 py-6 rounded-lg shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16 bg-white dark:bg-jsblue/20 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Join JSat Automation?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-jspurple/10 dark:bg-jspurple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="text-jspurple" />
              </div>
              <h3 className="text-lg font-bold mb-2">Professional Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We invest in our employees' development with training, mentorship, and opportunities to work on challenging projects.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-jsaccent/10 dark:bg-jsaccent/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-jsaccent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Innovative Culture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We foster an environment where creativity and forward-thinking are encouraged and recognized.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Global Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a diverse team of professionals working across the globe, sharing knowledge and perspectives.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We value the well-being of our employees and offer flexible work arrangements to support work-life balance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Current Openings</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} matching your criteria
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-4 md:mt-0 flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </motion.div>
            
            {showFilters && (
              <motion.div 
                className="mb-8 p-6 bg-white dark:bg-jsblue/20 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold mb-4">Filter by:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-2 block">Location</Label>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                      {locations.map((location, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`location-${index}`} 
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={() => toggleLocation(location)}
                          />
                          <Label htmlFor={`location-${index}`} className="text-sm cursor-pointer">
                            {location}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Job Type</Label>
                    <div className="space-y-2">
                      {jobTypes.map((type, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`type-${index}`} 
                            checked={selectedTypes.includes(type)}
                            onCheckedChange={() => toggleType(type)}
                          />
                          <Label htmlFor={`type-${index}`} className="text-sm cursor-pointer">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Job Listings */}
              <motion.div 
                className="lg:col-span-1 space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <motion.div 
                      key={job.id}
                      className={`p-4 bg-white dark:bg-jsblue/20 rounded-lg border ${
                        selectedJob?.id === job.id 
                          ? 'border-jspurple dark:border-jspurple' 
                          : 'border-gray-200 dark:border-gray-800'
                      } shadow-sm hover:shadow-md transition-all cursor-pointer`}
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{job.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          job.postedDays <= 7
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {job.postedDays <= 7 ? 'New' : `${job.postedDays}d ago`}
                        </span>
                      </div>
                      
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Briefcase size={14} className="mr-1" />
                          <span>{job.department} · {job.type}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <p className="text-lg mb-2">No jobs found</p>
                    <p className="text-sm">Try adjusting your search or filters</p>
                  </div>
                )}
              </motion.div>
              
              {/* Job Details */}
              <motion.div 
                className="lg:col-span-2 bg-white dark:bg-jsblue/20 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {selectedJob ? (
                  <>
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedJob.postedDays <= 7
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {selectedJob.postedDays <= 7 ? 'New' : `${selectedJob.postedDays}d ago`}
                        </span>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-jspurple" />
                          <span>{selectedJob.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-2 text-jsaccent" />
                          <span>{selectedJob.department}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2 text-green-600 dark:text-green-400" />
                          <span>{selectedJob.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedJob.description}</p>
                      
                      {selectedJob.responsibilities && (
                        <>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
                            {selectedJob.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      
                      {selectedJob.requirements && (
                        <>
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-
