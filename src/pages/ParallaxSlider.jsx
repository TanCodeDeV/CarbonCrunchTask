import React from "react";
import { motion } from "framer-motion";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

const ParallaxSlider = () => {
  return (
    <div className="relative overflow-hidden w-full h-[500px] flex items-center justify-center">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default ParallaxSlider;
