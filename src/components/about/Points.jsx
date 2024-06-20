import React from "react";

const Mission = () => {
  const missionData = [
    {
      title: "What We Offer",
      description: [
        "<b>Diverse Recipes:</b> From quick weeknight dinners to gourmet meals, our extensive collection of recipes caters to all skill levels and preferences.",
        "<b>Expert Tips:</b> Learn from experienced chefs and food bloggers who share their best tips, tricks, and cooking secrets.",
        "<b>Community:</b> Join our vibrant community of food lovers, share your culinary creations, and get inspired by others.",
        "<b>Step-by-Step Guides:</b> Our detailed instructions and video tutorials make cooking easy and enjoyable.",
      ],
    },
    {
        title: "Why Choose Us",
        description: [
          "<b>Quality Assurance:</b> Every recipe is tested for quality and taste to ensure you get the best results every time.",
          "<b>Innovative Solutions:</b> We continuously update our site with new recipes and features to enhance your cooking experience.",
          "<b>Customer Support:</b> Our team is here to help you with any questions or feedback you may have.",
        ],
      }
  ];

  return (
    <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[85%] m-auto mt-10 p-2 sm:p-5 rounded-lg ">
      {missionData.map((item, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-600 mb-5 text-center">
            {item.title}
          </h2>
          <ul className="text-lg leading-relaxed mb-4 text-center list-disc">
            {item.description.map((point, i) => (
              <li className="mb-3" key={i} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Mission;
// Founded by a group of food enthusiasts, [Your Website Name] was born out of a love for cooking and a desire to share this passion with the world. We started as a small blog and have grown into a thriving community where food lovers can connect, learn, and inspire each other.