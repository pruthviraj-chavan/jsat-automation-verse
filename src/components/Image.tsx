
import { useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  layout?: "fill" | "responsive" | "fixed";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  layout = "responsive",
  objectFit = "cover",
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const styles: React.CSSProperties = {
    objectFit,
    transition: "transform 0.3s ease, opacity 0.5s ease",
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
    <div className={`overflow-hidden ${layout === "responsive" ? "relative" : ""}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800/30 animate-pulse">
          <div className="w-10 h-10 border-4 border-jsaccent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        style={styles}
        loading="lazy"
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800/30 text-gray-500 dark:text-gray-400">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default Image;
