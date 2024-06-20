import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Home from "./Home";
import Recipes from "./Recipes";
import ShareRecipeComponent from "./Home2";
import ExploreRecipes from "./Home3";
import Testimonials from "./Testimonial";
import Footr from "./Footr";
import WhyUs from "./Whyus";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <motion.div
                    initial={{ opacity: 0, y: 50  }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Home />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay:1.5 }}
                >
                    <ShareRecipeComponent />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50  }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <ExploreRecipes />
                </motion.div>
                
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <WhyUs />
                
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <Testimonials />
                
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <Footer />
                
            </motion.div>
            
        </div>
    );
};

export default Layout;
