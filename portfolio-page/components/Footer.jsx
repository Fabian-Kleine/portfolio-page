import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black px-4 py-6">
            <div className="w-full sm:max-w-[80rem] sm:w-[92%] m-auto">
                <div className="w-full sm:w-2/5 sm:max-w-[50rem]">
                    <h2 className="text-left font-bold text-xl xs:text-2xl uppercase tracking-widest">Fabian Kleine</h2>
                    <p className="text-left mt-4 text-sm md:text-base 2xl:text-lg leading-7 sm:max-w-[55rem] mb-4">I'm a student and selftaught Programmer focusing on web development but I'm ready for everything</p>
                </div>
                <div className="py-6 border-t-2 border-gray-700 text-center text-sm">
                    © Copyright 2023. Made by <a href="/" className="underline cursor-pointer font-bold">Fabian Kleine</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;