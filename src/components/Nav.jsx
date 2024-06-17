import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-[10vh] w-full flex items-center justify-between">
            <img
                className="h-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt=""
            />
            <div className="hidden sm:flex gap-x-10 text-md items-center">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <div className="sm:hidden">
                <button onClick={toggleMenu}>
                    <i className="text-3xl ri-grid-fill text-green-600"></i>
                </button>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden absolute top-[10vh] left-0 w-full bg-white py-2">
                    <Link
                        className="block text-center py-2 border-b border-gray-200"
                        to="/"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        className="block text-center py-2 border-b border-gray-200"
                        to="/recipes"
                        onClick={toggleMenu}
                    >
                        Recipes
                    </Link>
                    <Link
                        className="block text-center py-2 border-b border-gray-200"
                        to="/about"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        className="block text-center py-2 border-b border-gray-200"
                        to="/contact"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;

