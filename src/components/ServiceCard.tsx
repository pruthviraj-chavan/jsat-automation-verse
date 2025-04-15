
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "card3d group relative bg-white dark:bg-jsblue/50 rounded-xl p-6 backdrop-blur-sm shadow-xl border border-gray-200 dark:border-gray-800",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-jspurple/10 to-jsaccent/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
      
      <div className="mb-4 bg-jspurple/10 w-12 h-12 rounded-lg flex items-center justify-center text-jspurple">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-jspurple mr-2">•</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
