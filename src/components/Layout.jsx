import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Recipes from "./Recipes";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <Home />
                <div className="mt-10"></div>
                <Recipes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
