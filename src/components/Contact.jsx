import React from "react";
import ContactForm from "./Contactform";

const Contact = () => {
    return (
        
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] m-auto mt-10 p-6 sm:p-10 bg-green-200 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl mt-5 font-extrabold text-green-600 mb-10">
                DO YOU WANT TO REACH US ?
            </h1>
            <ContactForm />
            
            {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-5 font-extrabold text-green-600 mb-10">
                Use this email: yashdudani2@gmail.com
            </h1> */}
            
        </div>
    );
};

export default Contact;
