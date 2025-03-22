import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { EARTH_INGLASS_IMG } from "../utils/Constants";

const Hero = ({ scrollToFeatures }) => {
  return (
    <section className="relative flex items-center h-screen bg-gray-100 px-50 overflow-hidden">
      {/* Left Side - Image */}
      <div className="relative w-[400px] md:w-[550px] flex-shrink-0">
        <motion.img
          src={EARTH_INGLASS_IMG}
          alt="Earth in Glass Dome"
          className="w-full"
          initial={{ y: 50, opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Right Side - Features */}
      <div className="flex flex-col">
        {/* Overlapping Feature (Closer to Image) */}
        <motion.div
          className="relative bg-green-500 text-black p-4 rounded-md shadow-lg w-[300px] mb-[-10px] z-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold">3X</h2>
          <p className="text-2xl">
            ESG High Performers Deliver A Higher Total Shareholder Return
          </p>
        </motion.div>

        {/* Slightly More Right */}
        <motion.div
          className="relative bg-gray-500 text-white p-4 rounded-md shadow-lg w-[320px] ml-[-150px] mb-[-10px]"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold">98%</h2>
          <p className="text-2xl">
            Of CEOs Agree Sustainability Is Their Responsibility
          </p>
        </motion.div>

        {/* Further Right */}
        <motion.div
          className="relative bg-black text-white p-4 rounded-md shadow-lg w-[340px] ml-[-10px] mb-[-10px] z-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold">18%</h2>
          <p className="text-2xl">
            Of CEOs Agree Sustainability Is Their Responsibility
          </p>
        </motion.div>

        {/* Further Right */}
        <motion.div
          className="relative ml-[-150px] bg-white text-green-500 p-4 rounded-md shadow-md w-[360px]"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold">37%</h2>
          <p className="text-2xl">
            Of The World's Largest Companies Have A Public Net Zero Target.
          </p>
        </motion.div>
      </div>
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-5 animate-bounce"
      >
        <FaArrowUp className="text-green-500 text-3xl" />
      </button>
    </section>
  );
};

export default Hero;
