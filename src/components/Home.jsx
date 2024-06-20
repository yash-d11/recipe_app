import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });
    const text = "SIMPLE AND TASTY RECIPES".split(" ");
    const handleGetStarted = () => {
        navigate("/recipes");
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-20 lg:mt-[15vh] h-auto lg:h-[60vh] px-5">
            <motion.div
                className="left w-full lg:w-full mb-10 lg:mb-0 text-center lg:text-left"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-green-600 leading-tight">
                <div>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .5        ,
            delay: i / 3
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
                </h1>
                <p className="text-base lg:text-lg xl:text-xl text-zinc-400 mt-5 mb-10">
                    Welcome to RecipeRealm, the ultimate destination for food enthusiasts and home cooks! Share your favorite recipes, discover delicious dishes, and connect with a vibrant community of culinary creators. Let's cook, share, and savor together at RecipeRealm!
                </p>
                <motion.button whileTap={{ scale: 0.85 }} onClick={handleGetStarted} className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200 rounded-full">
    Get Started &nbsp; &#8594;
</motion.button>
            </motion.div>
            <motion.div
                className="w-full lg:w-1/2 flex justify-center"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <img
                    className="w-full lg:w-3/4 xl:w-2/3"
                    src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                    alt="Cooking Recipe"
                />
            </motion.div>
        </div>
    );
};

export default Home;



