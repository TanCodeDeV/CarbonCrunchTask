import { featuresList } from "../utils/Constants";
import { FaCube } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Features = ({ scrollToHero }) => {
  return (
    <div className="bg-gray-100 h-auto min-h-screen flex flex-col items-center justify-start text-white py-6">
      <h3 className="text-green-500 bg-white border border-gray-300 rounded-4xl px-10 py-2 w-fit shadow-lg">
        FEATURES
      </h3>
      <div className="mt-2">
        <section className="py-2">
          <h2 className="text-center text-4xl text-black font-bold mb-6">
            Why Carbon Crunch?
          </h2>
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg min-h-[250px]"
              >
                <FaCube className="text-green-500 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-green-500">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={scrollToHero}
            className="absolute bottom-5 animate-bounce"
          >
            <FaArrowDown className="text-green-500 text-3xl" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Features;
