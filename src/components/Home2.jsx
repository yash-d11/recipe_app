import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShareYourRecipe = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <img
                className="w-full lg:w-1/2 h-64 lg:h-auto object-cover m-auto mt-20 p-6 rounded-lg shadow-2xl"
                src="https://st3.depositphotos.com/13324256/17303/i/380/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg"
                alt="Share Your Recipe"
            />
            <div className="w-full lg:w-1/2 mt-10 p-4 lg:p-8">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-green-600">Share Your Recipe</h2>
                <p className="text-gray-600 mb-8">
                Ignite culinary passions by sharing your favorite recipes! Inspire others, tantalize taste buds, and join our vibrant food community today.
                </p>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white py-2 px-4 ml-24 rounded-md hover:bg-green-700 duration-200"
                >
                    <Link to="/create-recipe">Create New Recipe</Link>
                </motion.button>
            </div>
        </div>
    );
};

export default ShareYourRecipe;
