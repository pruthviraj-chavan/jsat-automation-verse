
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import Image from './Image';

interface LocationType {
  city: string;
  country: string;
  address: string;
  coordinates: { x: number; y: number };
}

const Locations = () => {
  const locations: LocationType[] = [
    { 
      city: "Los Angeles", 
      country: "USA", 
      address: "611 N Brand Blvd, Suite 1300, Glendale, CA 91203", 
      coordinates: { x: 18, y: 38 } 
    },
    { 
      city: "San Francisco", 
      country: "USA", 
      address: "1900 Powell Street, Suite 700, Emeryville, CA 94608", 
      coordinates: { x: 16, y: 38 } 
    },
    { 
      city: "San Diego", 
      country: "USA", 
      address: "770 First Ave, Suite 250, San Diego, CA 92101", 
      coordinates: { x: 17, y: 39 } 
    },
    { 
      city: "Boston", 
      country: "USA", 
      address: "300 Baker Ave, Suite 300a, Concord, MA 01742", 
      coordinates: { x: 25, y: 35 } 
    },
    { 
      city: "Chicago", 
      country: "USA", 
      address: "544 Lakeview Parkway, Suite 100, Vernon Hills, IL 60061", 
      coordinates: { x: 23, y: 35 } 
    },
    { 
      city: "India", 
      country: "Pune", 
      address: "Shrirang House, 35A/355/1 Shivaji Nagar, J.M. Road, Pune, India 411005", 
      coordinates: { x: 65, y: 45 } 
    },
    { 
      city: "Singapore", 
      country: "Singapore", 
      address: "50 Havelock Road, Suite 02-767, The Beo Crescent, 160050 Singapore", 
      coordinates: { x: 77, y: 55 } 
    },
    { 
      city: "Netherlands", 
      country: "Netherlands", 
      address: "Kanaalpark 140, 2321 JV Leiden, Netherlands", 
      coordinates: { x: 48, y: 32 } 
    },
    { 
      city: "Romania", 
      country: "Romania", 
      address: "Alexandru Vaida Voevod Street 53B, United Business Center Iulius, 6th Floor, Cluj-Napoca 400436, Romania", 
      coordinates: { x: 52, y: 33 } 
    },
    { 
      city: "Costa Rica", 
      country: "Costa Rica", 
      address: "Escazu Corporate Center (6th Floor), San Rafael de Escazu, San Jose 10203, Costa Rica", 
      coordinates: { x: 25, y: 48 } 
    },
    { 
      city: "United Kingdom", 
      country: "UK", 
      address: "960 Capability Green, Luton Bedfordshire, LU1 3PE, United Kingdom", 
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

  // Generate random pulse delays for location pins
  const getRandomDelay = () => Math.random() * 2;

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
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            With over 10 strategic locations across the globe, we provide local expertise with global capabilities
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* World Map */}
          <motion.div 
            className="world-map h-[500px] md:h-[600px] mb-10 rounded-xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Earth Background with Glow */}
            <div className="absolute inset-0 bg-jsblue/80 rounded-xl overflow-hidden">
              <motion.div
                className="absolute w-full h-full"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%'],
                  transition: {
                    duration: 60,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }}
                style={{
                  background: `url('public/lovable-uploads/322da8bf-92a9-4384-9e2b-19943b554345.png')`,
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 0%',
                  filter: 'brightness(0.7) saturate(1.5)',
                }}
              >
                {/* Pulsing glow overlay */}
                <motion.div 
                  className="absolute inset-0 bg-jsaccent/10"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </div>

            {/* World Map with Moving Effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                y: [-10, 0, -10],
                rotateZ: [0, 2, 0], 
                rotateX: [0, 5, 0],
                rotateY: [0, 3, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="public/lovable-uploads/322da8bf-92a9-4384-9e2b-19943b554345.png"
                alt="World Map"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              
              {/* Connection lines between locations */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {locations.map((location, i) => 
                  locations.slice(i + 1).map((target, j) => {
                    // Only draw some connections to avoid clutter
                    if ((i + j) % 3 === 0) {
                      return (
                        <motion.path
                          key={`line-${i}-${j}`}
                          d={`M${location.coordinates.x}% ${location.coordinates.y}% Q${(location.coordinates.x + target.coordinates.x) / 2}% 
                             ${Math.min(location.coordinates.y, target.coordinates.y) - 20}%, ${target.coordinates.x}% ${target.coordinates.y}%`}
                          stroke="url(#lineGradient)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, delay: 1 + (i * 0.2) }}
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>

              {/* Location Pins with advanced animations */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="location-pin-container absolute"
                  style={{ 
                    left: `${location.coordinates.x}%`, 
                    top: `${location.coordinates.y}%`,
                    zIndex: 5
                  }}
                >
                  {/* Large outer pulse */}
                  <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-jsaccent/10"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ 
                      width: ['20px', '60px'], 
                      height: ['20px', '60px'],
                      opacity: [0.6, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      delay: getRandomDelay(),
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Medium pulse */}
                  <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-jsaccent/20"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ 
                      width: ['10px', '40px'], 
                      height: ['10px', '40px'],
                      opacity: [0.8, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5,
                      delay: getRandomDelay(),
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* The pin itself */}
                  <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-jsaccent shadow-[0_0_10px_rgba(14,165,233,0.7)]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5, backgroundColor: '#8B5CF6' }}
                  />
                  
                  {/* City name */}
                  <motion.div 
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-jsblue/90 px-3 py-1 rounded-lg text-white text-xs whitespace-nowrap opacity-0 pointer-events-none border border-jsaccent/30 shadow-lg"
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {location.city}
                  </motion.div>
                </div>
              ))}
              
              {/* Adding data flow animations */}
              {Array.from({ length: 10 }).map((_, index) => (
                <motion.div
                  key={`data-flow-${index}`}
                  className="absolute w-1 h-1 rounded-full bg-jsaccent/80 shadow-[0_0_5px_rgba(14,165,233,0.8)]"
                  initial={{ 
                    top: `${30 + Math.random() * 40}%`, 
                    left: 0,
                    opacity: 0.8,
                    scale: 0.5
                  }}
                  animate={{ 
                    left: ['0%', '100%'],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{ 
                    duration: 5 + Math.random() * 10, 
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
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
                    <h3 className="font-bold text-white">{location.city}</h3>
                    <p className="text-xs text-gray-400">{location.address}</p>
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
