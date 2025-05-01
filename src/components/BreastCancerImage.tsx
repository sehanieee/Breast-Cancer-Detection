import React from "react";
import { motion } from "framer-motion";

interface BreastCancerImageProps {
  width?: string;
  height?: string;
  className?: string;
  showHearts?: boolean;
  showRibbon?: boolean;
  animate?: boolean;
}

const BreastCancerImage: React.FC<BreastCancerImageProps> = ({
  width = "100%",
  height = "auto",
  className = "",
  showHearts = true,
  showRibbon = true,
  animate = true,
}) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1611077544777-4a9b30716b0e?w=100&q=80";
  const mainImageUrl =
    "https://storage.googleapis.com/tempo-public-assets/breast-cancer-awareness-woman.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const heartVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {animate ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative w-full h-full"
        >
          <img
            src={mainImageUrl}
            alt="Breast Cancer Awareness"
            className="w-full h-full object-contain"
          />

          {showHearts && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={heartVariants}
                  className="absolute"
                  style={{
                    top: `${20 + Math.random() * 30}%`,
                    left: `${10 + Math.random() * 80}%`,
                    transform: `rotate(${Math.random() * 30 - 15}deg)`,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="rgba(244, 114, 182, 0.6)"
                    />
                  </svg>
                </motion.div>
              ))}
            </>
          )}

          {showRibbon && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 bg-pink-500 text-white text-center py-2 px-4 rounded-b-lg"
            >
              <p className="font-bold">BREAST CANCER</p>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <div className="relative w-full h-full">
          <img
            src={mainImageUrl}
            alt="Breast Cancer Awareness"
            className="w-full h-full object-contain"
          />

          {showHearts && (
            <>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + Math.random() * 30}%`,
                    left: `${10 + Math.random() * 80}%`,
                    transform: `rotate(${Math.random() * 30 - 15}deg)`,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="rgba(244, 114, 182, 0.6)"
                    />
                  </svg>
                </div>
              ))}
            </>
          )}

          {showRibbon && (
            <div className="absolute bottom-0 left-0 right-0 bg-pink-500 text-white text-center py-2 px-4 rounded-b-lg">
              <p className="font-bold">BREAST CANCER</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BreastCancerImage;
