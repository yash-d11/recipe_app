import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const WhyUs = () => {
  const benefits = [
    { title: "Quality Assurance" },
    { title: "Customer Support" },
    { title: "Affordable Pricing" },
    { title: "Expert Team" },
    { title: "Innovative Solutions" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the unique advantages of partnering with us. Our commitment
          to excellence and customer satisfaction sets us apart in the industry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              
              className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
