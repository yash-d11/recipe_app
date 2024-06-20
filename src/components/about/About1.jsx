import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[90%] m-auto  p-6 sm:p-10  rounded-lg">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 font-extrabold text-green-600 mb-10 text-center">
        About Us
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <p className="text-l font-semibold leading-relaxed mb-4">
          Welcome to Recipe Realm, your ultimate destination for culinary inspiration and delicious recipes. Our passion for food drives us to share the best recipes from around the world, making it easy for you to create mouth-watering dishes in your own kitchen.          </p>
          
        </div>
        <div className="flex justify-center mt-10">
        <img
          src="https://i0.wp.com/www.honeyandlime.co/wp-content/uploads/2022/01/Easy-and-healthy-plant-based-meal-ideas-for-dinner.png?resize=810%2C405&ssl=1" // Replace with your image URL
          alt="Sample"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
