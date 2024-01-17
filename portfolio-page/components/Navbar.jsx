import React from "react";
import { Home, Code2, Github, AtSign, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize)

        handleResize();

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    useEffect(() => {
        if(windowWidth > 639){
            setSidebarOpened(false);
        }
    }, [windowWidth]);

    return (
        <nav className="flex flex-row relative sm:flex-col md:flex-row justify-between w-full pb-6 sm:pb-2 pt-6 sm:px-4 md:py-6 bg-[#242424] shadow-lg z-10">
            <div aria-hidden={windowWidth < 639} className="flex justify-center items-center px-4 sm:px-10">
                <a aria-label="Home" className="flex justify-center items-center" href="/">
                    <img src="/profile-picture2.png" alt="Profile Image" className="rounded-full h-10 xs:h-14" />
                    <h1 className="font-bold ml-1 xs:ml-4 text-base xs:text-xl uppercase tracking-widest transition-all text-gradient-hover hover:[text-shadow:_0_0_25px_#7b2cbf]">Fabian Kleine</h1>
                </a>
            </div>
            <div aria-hidden={windowWidth < 639} className="hidden sm:flex justify-center items-center font-bold">
                <a href="/" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#1e96fc] hover:shadow-[0_0_25px_-3px_#1e96fc] hover:text-[#1e96fc] flex items-center"><Home className="inline mr-1 h-5" />Home</a>
                <a href="/projects" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#f72585] hover:shadow-[0_0_25px_-3px_#f72585] hover:text-[#f72585] flex items-center"><Code2 className="inline mr-1 h-5" />Projects</a>
                <a href="https://github.com/Fabian-Kleine" target="_blank" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#ffd60a] hover:shadow-[0_0_25px_-3px_#ffd60a] hover:text-[#ffd60a] flex items-center"><Github className="inline mr-1 h-5" />GitHub</a>
                <a href="/contact" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#fb5607] hover:shadow-[0_0_25px_-3px_#fb5607] hover:text-[#fb5607] flex items-center"><AtSign className="inline mr-1 h-5" />Contact</a>
            </div>
            <div className="flex justify-center items-center px-6 sm:hidden">
                <button aria-hidden={windowWidth > 639} aria-label={sidebarOpened ? "Close Menu" : "Open Menu"} onClick={() => setSidebarOpened(!sidebarOpened)} className="p-2 transition-colors rounded-full"><X className={`transition-all ${sidebarOpened ? "block" : "hidden"}`} /><Menu className={`transition-all ${!sidebarOpened ? "block" : "hidden"}`} /></button>
            </div>
            {sidebarOpened && (
                <div className="absolute bg-[#242424] w-full pb-4 font-bold top-20 xs:top-24 z-10 shadow-lg">
                    <a href="/" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#1e96fc] hover:shadow-[0_0_25px_-3px_#1e96fc] hover:text-[#1e96fc] flex items-center justify-end">Home<Home size={28} className="inline ml-2" /></a>
                    <a href="/projects" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#f72585] hover:shadow-[0_0_25px_-3px_#f72585] hover:text-[#f72585] flex items-center justify-end">Projects<Code2 size={28} className="inline ml-2" /></a>
                    <a href="https://github.com/Fabian-Kleine" target="_blank" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#ffd60a] hover:shadow-[0_0_25px_-3px_#ffd60a] hover:text-[#ffd60a] flex items-center justify-end">GitHub<Github size={28} className="inline ml-2" /></a>
                    <a href="/contact" className="text-lg px-6 py-4 mx-2 transition-all border border-transparent rounded-md hover:border-[#fb5607] hover:shadow-[0_0_25px_-3px_#fb5607] hover:text-[#fb5607] flex items-center justify-end">Contact<AtSign size={28} className="inline ml-2" /></a>
                </div>
            )}
        </nav>
    )
}

export default Navbar;