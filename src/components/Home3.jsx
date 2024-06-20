import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ExploreRecipes = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/recipes");
    };
    return (
        <div className="flex flex-col lg:flex-row m-auto mt-10 p-6 items-center justify-center">
            <div className="w-full lg:w-1/2 p-4 lg:p-8 order-2 lg:order-1">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-green-600">Culinary Adventures</h2>
                <p className="text-gray-600 mb-8">
                    Embark on a tantalizing journey through a world of flavors and culinary creativity with our delightful collection of recipes. Unleash your inner chef and explore endless possibilities to satisfy your cravings and inspire your cooking adventures!
                </p>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 duration-200"
                >
                    Explore Our Recipes
                </motion.button>
            </div>
            <img
                className="w-full lg:w-1/2 h-full lg:h-auto object-cover p-6 rounded-lg shadow-2xl order-1 lg:order-2"
                src="https://www.shutterstock.com/image-photo/portrait-various-indian-food-buffet-600nw-342898247.jpg"
                alt="Share Your Recipe"
            />
        </div>
    );
};


export default ExploreRecipes;
