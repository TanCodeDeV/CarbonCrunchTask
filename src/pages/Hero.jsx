import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Hero = ({ scrollToFeatures }) => {
  return (
    <section className="relative flex items-center h-screen bg-gray-100 px-50 overflow-hidden">
      {/* Left Side - Image */}
      <div className="relative w-[400px] md:w-[550px] flex-shrink-0">
        <motion.img
          src="https://s3-alpha-sig.figma.com/img/2f82/c8ff/6aedb0f7fd91444306aedde679c72011?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ka0Mb4qaf7vW~w6P3ZXzpYvhrgxxC8ZhRQPTt9LLKX2lUd31TmS4Px-Ej7upl0zvh0z4cz8h0~XyoH5lS3lQUXetO~j7ojTNGCAwGI2hG6-CrXg6OaYWdPSxFS1zigwr57WNlu16holwW1urWuGookg~pOlnokuTlMOGLy1jQukuxDas9nNLxKBhfjHqnm0nvb6JAKBFj9e6O0AYbf5wyz7cVoySsr10qgF2aHqObNgPp0PqxVcJ4cLFcFpQCQryPMMivOyzaAGVtiD4gP3EfgbAP7vV0t~kMm9TtGx4WH-3qWpRRP89AZs6fR7-c~P-JzeHMxzFfMLO4nRLHHkdWA__"
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
