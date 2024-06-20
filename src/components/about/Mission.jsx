import React from "react";

const Mission = () => {
  return (
    <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[85%] m-auto  p-2 sm:p-5  rounded-lg">
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-extrabold text-green-600 mb-5 text-center">
        Our Mission?
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <p className="text-lg leading-relaxed mb-4">
          At Recipe Realm, our mission is to inspire home cooks and food enthusiasts to explore new flavors, master cooking techniques, and enjoy the art of cooking. We believe that anyone can cook with the right guidance and a bit of creativity.          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
