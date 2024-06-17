import React from "react";

const About = () => {
    const mailTo = () => {
        window.location.href = 'mailto:yashdudani21@gmail.com?subject=Inquiry';
    };

    return (
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] m-auto mt-10 p-6 sm:p-10 bg-green-100 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 font-extrabold text-green-600 mb-10">
                LET'S TALK ABOUT WHAT WE ARE
            </h1>
            <button
                onClick={mailTo}
                className="rounded-md text-sm sm:text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
            >
                Know more &nbsp; &#8594;
            </button>
        </div>
    );
};

export default About;
