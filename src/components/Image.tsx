
import { useState } from "react";

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

  const styles: React.CSSProperties = {
    objectFit,
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
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        style={styles}
        loading="lazy"
      />
    </div>
  );
};

export default Image;
