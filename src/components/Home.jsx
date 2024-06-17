import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/recipes");
    };


    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-20 lg:mt-[15vh] h-auto lg:h-[60vh] px-5">
            <div className="left w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-green-600 leading-tight">
                    SIMPLE AND TASTY RECIPES
                </h1>
                <p className="text-base lg:text-lg xl:text-xl text-zinc-400 mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos maiores harum doloribus, praesentium alias qui esse id atque sapiente similique quis, velit fugit, nemo unde consectetur voluptatem sequi repellat.
                </p>
                <button  onClick={handleGetStarted} className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    className="w-full lg:w-3/4 xl:w-2/3"
                    src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                    alt="Cooking Recipe"
                />
            </div>
        </div>
    );
};

export default Home;




