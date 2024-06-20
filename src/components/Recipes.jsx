import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { Recipecontext } from "../contexts/RecipeContext";
import { motion } from "framer-motion";

const Recipes = () => {
    const [recipes, setrecipes] = useContext(Recipecontext);
    const { pathname } = useLocation();

    useEffect(() => {
        setrecipes(JSON.parse(localStorage.getItem("recipes")) || []);
    }, []);

    return (
        <div className="container mt-4 mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
            <p className="text-center text-zinc-400">
            Discover delightful recipes to inspire your culinary adventures!
            </p>
            <div className="recipe-cards mt-5 flex flex-wrap">
                {recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
                        No Recipe Found
                    </h1>
                )}
            </div>
            {pathname === "/recipes" && (
                <motion.button whileTap={{ scale: 0.85 }} className="block w-40 py-2 px-5 mt-5 mx-auto text-center rounded-md bg-green-200 text-green-600 hover:bg-green-300 duration-200"><Link
                    to="/create-recipe"
                    
                >
                    <i className="text-3xl text-green-600 ri-add-box-line"></i>
                    <span className="ml-2">Create New Recipe</span>
                </Link>
                </motion.button>
            )}
        </div>
    );
};

export default Recipes;
