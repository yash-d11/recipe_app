import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Home from "./Home";
import Testimonials from "./Testimonial";
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
