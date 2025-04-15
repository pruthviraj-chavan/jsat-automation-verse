
import { motion } from 'framer-motion';
import { MapPin, Globe, Building } from 'lucide-react';
import Image from './Image';

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
            With strategic locations across the globe, we provide local expertise with global capabilities
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
                  background: `url(public/lovable-uploads/1ef31024-8a26-4abf-a42c-f64ed5d03f2a.png)`,
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
                src="public/lovable-uploads/1ef31024-8a26-4abf-a42c-f64ed5d03f2a.png"
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
                
                {/* Connect headquarters to all locations */}
                {locations.map((location, i) => (
                  <motion.path
                    key={`hq-line-${i}`}
                    d={`M${headquarters.coordinates.x}% ${headquarters.coordinates.y}% Q${(headquarters.coordinates.x + location.coordinates.x) / 2}% 
                       ${Math.min(headquarters.coordinates.y, location.coordinates.y) - 10}%, ${location.coordinates.x}% ${location.coordinates.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1 + (i * 0.1) }}
                  />
                ))}
                
                {/* Connect some locations to each other for network effect */}
                {locations.map((location, i) => 
                  locations.slice(i + 1).map((target, j) => {
                    // Only draw some connections to avoid clutter
                    if ((i + j) % 4 === 0) {
                      return (
                        <motion.path
                          key={`line-${i}-${j}`}
                          d={`M${location.coordinates.x}% ${location.coordinates.y}% Q${(location.coordinates.x + target.coordinates.x) / 2}% 
                             ${Math.min(location.coordinates.y, target.coordinates.y) - 15}%, ${target.coordinates.x}% ${target.coordinates.y}%`}
                          stroke="url(#lineGradient)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, delay: 1.5 + (i * 0.1) }}
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>

              {/* Headquarters Pin with special styling */}
              <div
                className="location-pin-container absolute"
                style={{ 
                  left: `${headquarters.coordinates.x}%`, 
                  top: `${headquarters.coordinates.y}%`,
                  zIndex: 10
                }}
              >
                {/* Large outer pulse for headquarters */}
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-jspurple/20"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{ 
                    width: ['30px', '80px'], 
                    height: ['30px', '80px'],
                    opacity: [0.8, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeOut"
                  }}
                />
                
                {/* The headquarters pin */}
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-jspurple shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-full bg-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Headquarters label */}
                <motion.div 
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-jspurple/90 px-3 py-1.5 rounded-full text-white text-xs whitespace-nowrap border border-jspurple/50 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-1">
                    <Building size={12} />
                    <span className="font-bold">Headquarters</span>
                  </div>
                </motion.div>
              </div>

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
                    {location.city}, {location.country}
                  </motion.div>
                </div>
              ))}
              
              {/* Adding data flow animations */}
              {Array.from({ length: 15 }).map((_, index) => (
                <motion.div
                  key={`data-flow-${index}`}
                  className="absolute w-1 h-1 rounded-full bg-jsaccent/80 shadow-[0_0_5px_rgba(14,165,233,0.8)]"
                  initial={{ 
                    top: `${20 + Math.random() * 60}%`, 
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
                <p className="text-gray-300 mb-2">{headquarters.address.join(", ")}</p>
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
                    <p className="text-xs text-gray-400">{location.address.join(", ")}</p>
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
