import React from "react";

const Story = () => {
  return (
    <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[85%] m-auto  p-2 sm:p-5  rounded-lg">
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-extrabold text-green-600 mb-5 text-center">
        Our Story
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <p className="text-lg leading-relaxed mb-4">
          Founded by a group of food enthusiasts, Recipe Realm was born out of a love for cooking and a desire to share this passion with the world. We started as a small blog and have grown into a thriving community where food lovers can connect, learn, and inspire each other.          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
