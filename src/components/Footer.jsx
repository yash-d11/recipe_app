import React from "react";

const Footer = () => {
    return (
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] m-auto p-5">
            <h2 className="text-green-600 text-center">Features</h2>
            <h1 className="text-2xl font-bold text-center mt-5">
                OUR AWESOME SERVICES
            </h1>

            <div className="features flex flex-wrap justify-between mt-5">
                <div className="w-full sm:w-[40%] flex items-center mb-5 sm:mb-0">
                    <i className="text-[5vh] sm:text-[10vh] ri-restaurant-line mr-5"></i>
                    <div className="">
                        <h1 className="text-lg sm:text-xl">Quality Food</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-[40%] flex items-center mb-5 sm:mb-0">
                    <i className="text-[5vh] sm:text-[10vh] ri-graduation-cap-line mr-5"></i>
                    <div className="">
                        <h1 className="text-lg sm:text-xl">Cook like a Chef</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-[40%] flex items-center mb-5 sm:mb-0">
                    <i className="text-[5vh] sm:text-[10vh] ri-bread-line mr-5"></i>
                    <div className="">
                        <h1 className="text-lg sm:text-xl">Ingredients</h1>

                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-[40%] flex items-center mb-5 sm:mb-0">
                    <i className="text-[5vh] sm:text-[10vh] ri-presentation-line mr-5"></i>
                    <div className="">
                        <h1 className="text-lg sm:text-xl">Easy Recipe</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-[40%] flex items-center">
                    <i className="text-[5vh] sm:text-[10vh] ri-temp-hot-line mr-5"></i>
                    <div className="">
                        <h1 className="text-lg sm:text-xl">Serve Hot</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
