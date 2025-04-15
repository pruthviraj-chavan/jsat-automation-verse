
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
            className="world-map h-[500px] md:h-[600px] mb-10 rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Map Background */}
            <Image 
              src="public/lovable-uploads/322da8bf-92a9-4384-9e2b-19943b554345.png"
              alt="World Map"
              layout="fill"
              objectFit="cover"
            />
            
            {/* Location Pins */}
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="location-pin"
                style={{ 
                  left: `${location.coordinates.x}%`, 
                  top: `${location.coordinates.y}%`
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              >
                <motion.div 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-jsblue/90 px-3 py-1 rounded-lg text-white text-xs whitespace-nowrap opacity-0 pointer-events-none"
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {location.city}
                </motion.div>
              </motion.div>
            ))}
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
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <MapPin className="text-jsaccent mt-1 flex-shrink-0" />
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
