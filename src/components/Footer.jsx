import React, { useState } from "react";
import { motion } from "framer-motion";
 // Import your CSS file here

const Footer = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const cardVariants = {
    initial: { opacity: 1 },
    selected: { opacity: 0, transition: { duration: 0.3 } },
  };

  const detailVariants = {
    initial: { opacity: 0 },
    selected: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  };

  const features = [
    {
      icon: "ri-restaurant-line",
      title: "Quality Food",
      description:
        "Delight in diverse recipes with easy instructions and helpful tips. Join our food-loving community for a delightful cooking experience.",
    },
    {
      icon: "ri-graduation-cap-line",
      title: "Cook like a Chef",
      description:
        "Elevate your cooking skills with our gourmet recipes. From novice to expert, explore a world of culinary delights and cook like a pro.",
    },
    {
      icon: "ri-bread-line",
      title: "Ingredients",
      description:
        "Explore a vast ingredient database, substitution suggestions, and shopping lists to simplify cooking. Streamline your process and discover new flavors effortlessly.",
    },
    {
      icon: "ri-presentation-line",
      title: "Easy Recipe",
      description:
        "Discover simple, beginner-friendly recipes that fit your busy lifestyle. Enjoy easy-to-follow instructions and quick meal ideas for delicious dishes in no time.",
    },
    {
      icon: "ri-temp-hot-line",
      title: "Serve Hot",
      description:
        "Serve your meals hot and fresh every time! Our simple yet effective tips guarantee that your dishes are always at their best temperature, ensuring a delightful experience.",
    },
    {
      icon: "ri-reply-all-line",
      title: "Easy Returns",
      description:
        "Easy Returns: Hassle-free refunds or exchanges within the specified period. Stress-free shopping with simple, convenient returns.",
    },
  ];

  const handleCardClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[80%] mt-10 mb-5 m-auto p-5">
      <h2 className="text-green-600 text-center">Features</h2>
      <h1 className="text-2xl font-bold text-center mt-5">OUR AWESOME SERVICES</h1>
      <div className="features flex flex-wrap justify-between mt-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[45%] lg:w-[30%] h-[250px] mb-5 sm:mb-0 flex items-center justify-center cursor-pointer hover:scale-105 hover:after"
            onClick={() => handleCardClick(index)}
          >
            <motion.div
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-5 border border-gray-200 rounded-lg shadow-lg bg-white "
              initial="initial"
              animate={selectedIndex === index ? "selected" : "initial"}
              variants={cardVariants}
              style={{ backfaceVisibility: "hidden" }}
            >
              <i className={`text-[5vh] sm:text-[10vh] ${feature.icon} mb-2`}></i>
              <div>
                <h1 className="text-lg sm:text-xl">{feature.title}</h1>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-5 border border-gray-200 rounded-lg shadow-lg bg-white backface-visibility-hidden "
              initial="initial"
              animate={selectedIndex === index ? "selected" : "initial"}
              variants={detailVariants}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div>
                <p className="text-sm text-zinc-800 mt-2 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
