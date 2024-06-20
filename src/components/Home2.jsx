import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShareYourRecipe = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <img
                className="w-full lg:w-1/2 h-64 lg:h-auto object-cover m-auto mt-20 p-6 rounded-lg shadow-2xl"
                src="https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/258510336_4883575098343745_6291664813413268404_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p8JstKgXTzoQ7kNvgEfc3gH&_nc_ht=scontent.fbho3-1.fna&oh=00_AYDKnBfmTKAuWu786pj3x-Ra0dsDd9cqpIbNqGMv9_b_Cg&oe=667923CC"
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
