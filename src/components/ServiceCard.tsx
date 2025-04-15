
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { memo } from "react";
import Image from "./Image";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
  imageSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  icon,
  title,
  description,
  features,
  className,
  imageSrc,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.2
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={cn(
        "group relative bg-white dark:bg-jsblue/30 rounded-xl p-6 backdrop-blur-sm shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden",
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-jspurple/5 via-jsaccent/5 to-jspurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* Image Background (if provided) */}
      {imageSrc && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
      )}
      
      {/* Icon */}
      <motion.div 
        className="mb-4 bg-jspurple/10 w-12 h-12 rounded-lg flex items-center justify-center text-jspurple"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          backgroundColor: "rgba(139, 92, 246, 0.2)"
        }}
      >
        {icon}
      </motion.div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white relative">
        {title}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-jspurple"
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      {/* Features List */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            custom={index}
            variants={featureVariants}
          >
            <motion.span 
              className="text-jspurple mr-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.2, type: "spring" }}
              viewport={{ once: true }}
            >
              •
            </motion.span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
