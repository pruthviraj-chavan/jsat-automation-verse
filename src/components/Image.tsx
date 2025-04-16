
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  layout?: "fill" | "responsive" | "fixed";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  width?: number;
  height?: number;
  priority?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  layout = "responsive",
  objectFit = "cover",
  width,
  height,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  
  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    setRetryCount(0);
  }, [src]);

  const handleImageError = () => {
    console.log(`Image error: ${src}`);
    if (retryCount < maxRetries) {
      // Try loading the image again after a short delay with cache busting
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        const imgElement = document.querySelector(`[data-src="${src}"]`) as HTMLImageElement;
        if (imgElement) {
          const cacheBuster = `?retry=${retryCount + 1}&t=${new Date().getTime()}`;
          imgElement.src = src.includes('?') ? `${src}&cb=${cacheBuster}` : `${src}${cacheBuster}`;
        }
      }, 1000);
    } else {
      setError(true);
    }
  };

  const styles: React.CSSProperties = {
    objectFit,
    transition: "transform 0.3s ease, opacity 0.5s ease",
    objectPosition: "center",
  };

  if (layout === "fill") {
    styles.position = "absolute";
    styles.top = 0;
    styles.left = 0;
    styles.width = "100%";
    styles.height = "100%";
  } else if (layout === "fixed" && width && height) {
    styles.width = width;
    styles.height = height;
  }

  return (
    <div 
      className={`overflow-hidden ${layout === "responsive" ? "relative" : ""}`}
      style={layout === "responsive" && !width && !height ? { paddingBottom: "56.25%" } : undefined}
    >
      {!isLoaded && !error && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full border-2 border-t-jspurple border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute inset-1 rounded-full border-2 border-t-transparent border-r-jsaccent border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
          </div>
        </motion.div>
      )}
      
      <motion.img
        src={src}
        alt={alt}
        data-src={src}
        className={`transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
        style={styles}
        loading={priority ? "eager" : "lazy"}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5 }}
      />
      
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800/30 text-gray-500 dark:text-gray-400">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 mb-2 text-gray-400"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span className="text-sm">Failed to load image</span>
          <button 
            className="mt-2 px-3 py-1 text-xs bg-jsaccent/20 text-jsaccent rounded-md hover:bg-jsaccent/30 transition-colors"
            onClick={() => {
              setError(false);
              setRetryCount(0);
              setIsLoaded(false);
            }}
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
};

export default Image;
