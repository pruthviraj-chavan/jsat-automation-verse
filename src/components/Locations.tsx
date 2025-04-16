
import { motion } from 'framer-motion';
import { MapPin, Globe, Building } from 'lucide-react';

interface LocationType {
  city: string;
  country: string;
  address: string[];
  coordinates: { x: number; y: number };
  isHeadquarters?: boolean;
}

const Locations = () => {
  const headquarters: LocationType = {
    city: "Headquarters",
    country: "USA",
    address: [
      "1730 Walton Road, Suite 100",
      "Blue Bell, PA 19422, USA",
      "Tel: +1 (267) 903 1800"
    ],
    coordinates: { x: 23, y: 37 },
    isHeadquarters: true
  };

  const locations: LocationType[] = [
    { 
      city: "Los Angeles", 
      country: "USA", 
      address: ["611 N Brand Blvd, Suite 1300", "Glendale, CA 91203", "United States"], 
      coordinates: { x: 18, y: 38 } 
    },
    { 
      city: "San Francisco", 
      country: "USA", 
      address: ["1900 Powell Street, Suite 700", "Emeryville, CA 94608", "United States"], 
      coordinates: { x: 16, y: 38 } 
    },
    { 
      city: "San Diego", 
      country: "USA", 
      address: ["770 First Ave, Suite 250", "San Diego, CA 92101", "United States"], 
      coordinates: { x: 17, y: 39 } 
    },
    { 
      city: "Boston", 
      country: "USA", 
      address: ["300 Baker Ave, Suite 300a", "Concord, MA 01742", "United States"], 
      coordinates: { x: 25, y: 35 } 
    },
    { 
      city: "Chicago", 
      country: "USA", 
      address: ["544 Lakeview Parkway, Suite 100", "Vernon Hills, IL 60061", "United States"], 
      coordinates: { x: 23, y: 35 } 
    },
    { 
      city: "Pune", 
      country: "India", 
      address: ["Shrirang House, 364/365/1", "Shivaji Nagar, J.M. Road", "Pune, India 411005"], 
      coordinates: { x: 65, y: 45 } 
    },
    { 
      city: "Singapore", 
      country: "Singapore", 
      address: ["50 Havelock Road, Suite 02-767", "The Beo Crescent, 160050", "Singapore"], 
      coordinates: { x: 77, y: 55 } 
    },
    { 
      city: "Leiden", 
      country: "Netherlands", 
      address: ["Kanaalpark 140", "2321 JV Leiden", "Netherlands"], 
      coordinates: { x: 48, y: 32 } 
    },
    { 
      city: "Cluj-Napoca", 
      country: "Romania", 
      address: [
        "Alexandru Vaida Voevod Street 53B", 
        "United Business Center Iulius, 6th Floor", 
        "Cluj-Napoca 400436, Romania"
      ], 
      coordinates: { x: 52, y: 33 } 
    },
    { 
      city: "San Jose", 
      country: "Costa Rica", 
      address: [
        "Escazu Corporate Center (6th Floor)", 
        "San Rafael de Escazu, San Jose 10203", 
        "Costa Rica"
      ], 
      coordinates: { x: 25, y: 48 } 
    },
    { 
      city: "Luton", 
      country: "United Kingdom", 
      address: [
        "960 Capability Green", 
        "Luton Bedfordshire LU1 3PE", 
        "United Kingdom"
      ], 
      coordinates: { x: 47, y: 32 } 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
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
    <section className="section-padding bg-gradient-to-br from-jsblue via-jsblue/95 to-jsblue/90 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Our Global Presence
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center gap-2 mb-2"
            variants={itemVariants}
          >
            <Globe className="text-jsaccent" />
            <span className="text-xl text-jsaccent">Serving Clients Worldwide</span>
          </motion.div>
          <motion.p 
            className="text-lg text-white max-w-2xl mx-auto"
            variants={itemVariants}
          >
            With strategic locations across the globe, we provide local expertise with global capabilities
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated Earth Globe */}
          <motion.div 
            className="earth-animation h-[400px] md:h-[500px] mb-16 rounded-xl overflow-hidden relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* 3D Earth Animation using CSS */}
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              {/* Earth sphere */}
              <motion.div
                className="absolute inset-0 bg-blue-900 rounded-full overflow-hidden shadow-[0_0_120px_rgba(14,165,233,0.4)]"
                animate={{
                  rotateY: 360,
                  rotateX: [5, -5, 5],
                }}
                transition={{
                  rotateY: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  rotateX: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.6), rgba(14, 14, 60, 1))`,
                  backgroundSize: "cover",
                  transform: "rotateX(10deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Land patterns */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M150 0 L75 200 L225 200 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M350 50 L300 150 L400 150 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M450 100 L400 200 L500 200 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M550 0 L500 100 L600 100 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M650 50 L600 150 L700 150 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M750 100 L700 200 L800 200 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M150 200 L75 400 L225 400 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M350 250 L300 350 L400 350 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M450 300 L400 400 L500 400 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M550 200 L500 300 L600 300 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M650 250 L600 350 L700 350 Z'/%3E%3Cpath fill='%238B5CF6' fill-opacity='0.4' d='M750 300 L700 400 L800 400 Z'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover",
                    opacity: 0.8
                  }}
                />
                
                {/* Glowing atmosphere */}
                <div className="absolute inset-[-30px] rounded-full bg-jsaccent/5 blur-xl"></div>
                <div className="absolute inset-[-15px] rounded-full bg-jsaccent/10 blur-md"></div>
              </motion.div>
              
              {/* Orbiting satellites/elements */}
              {[...Array(4)].map((_, index) => {
                const angle = (index * Math.PI / 2);
                const delay = index * 2;
                return (
                  <motion.div
                    key={`orbit-${index}`}
                    className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-jspurple to-jsaccent"
                    initial={{
                      x: Math.cos(angle) * 150 - 8,
                      y: Math.sin(angle) * 150 - 8,
                    }}
                    animate={{
                      x: (t) => Math.cos(t * 2 * Math.PI + angle) * 150 - 8,
                      y: (t) => Math.sin(t * 2 * Math.PI + angle) * 150 - 8,
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 15,
                      delay,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white"
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [1, 2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                      }}
                    />
                  </motion.div>
                );
              })}
              
              {/* Data streams */}
              {[...Array(16)].map((_, index) => {
                const speed = 3 + Math.random() * 5;
                const size = 1 + Math.random() * 2;
                const delay = Math.random() * 6;
                const angle = Math.random() * Math.PI * 2;
                
                return (
                  <motion.div
                    key={`data-stream-${index}`}
                    className="absolute top-1/2 left-1/2 rounded-full bg-white/70"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: [0, Math.cos(angle) * 250],
                      y: [0, Math.sin(angle) * 250],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: speed,
                      delay,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Headquarters Section */}
          <motion.div 
            className="mb-10 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-jspurple/20 p-3 rounded-full flex-shrink-0 mt-1">
                <Building className="text-jspurple h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Headquarters</h3>
                <p className="text-white mb-2">{headquarters.address.join(", ")}</p>
                <a 
                  href={`tel:${headquarters.address[2].split(": ")[1]}`} 
                  className="text-jsaccent hover:underline inline-flex items-center"
                >
                  {headquarters.address[2]}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(14, 165, 233, 0.3)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-jsaccent/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <MapPin className="text-jsaccent h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{location.city}, {location.country}</h3>
                    <p className="text-xs text-white/80">{location.address.join(", ")}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
