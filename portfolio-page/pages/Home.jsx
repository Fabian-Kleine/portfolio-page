import React from "react";
import TechnologieBadge from "../components/TechnologieBadge";
import projects from "../json/projects/";
import { Hammer } from "lucide-react";

const Home = () => {

    //get random project
    const project = projects[Math.floor(Math.random() * projects.length)];

    return (
        <>
            <div className="relative h-[90vh] bg-pattern z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full xl:w-fit 2xl:max-w-7xl">
                    <h1 className="text-4xl md:text-5xl 2xl:text-6xl leading-20 font-extrabold tracking-wider uppercase">Hi, I'm <span className="text-gradient">Fabian Kleine</span></h1>
                    <p className="mx-8 mt-12 text-center text-sm xs:text-lg md:text-xl 2xl:text-2xl leading-7">I'm a student and selftaught Programmer focusing on web development but also interested to learn more</p>
                    <div className="flex justify-center mt-12">
                        <a href="/projects" className="text-xl md:text-2xl 2xl:text-3xl tracking-tight px-16 py-4 uppercase transition-all border-2 rounded-md border-[#f72585] text-[#f72585] hover:shadow-[0_0_35px_-3px_#f72585] hover:bg-[#f72585] hover:text-white">Projects</a>
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
                    <div className="mouse"></div>
                </div>
            </div>
            <div className="max-w-[80rem] w-[92%] m-auto py-32 box-shadow-gray-top z-10">
                <div className="flex flex-col items-center mb-36">
                    <h2 className="text-4xl 2xl:text-5xl leading-20 font-bold tracking-widest uppercase">About Me</h2>
                    <div className="h-2 w-10 bg-gradient1 rounded-xl my-4"></div>
                    <p className="text-center text-lg md:text-xl 2xl:text-2xl leading-7 max-w-[55rem] m-auto">Here you will find more information about my current skills and technologies I use and a random project</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
                    <div>
                        <h3 className="text-left mb-12 text-xl md:text-2xl 2xl:text-3xl leading-20 font-bold">Random Project</h3>
                        <div className="bg-[#242424] mb-4 bg-opacity-60 border-[#242424] border-2 w-full rounded-md p-2">
                            <a href={"/project/" + project.filename}>
                                <h2 className="text-left px-2 pt-2 font-bold text-2xl line-clamp-1">{project.title}{project.tags.includes("wip") && (<span className={"inline-flex items-center cursor-default text-sm font-bold px-2 ml-2 mb-2 rounded-xl border-2"}><Hammer className="inline h-4" />W.I.P.</span>)}</h2>
                                <div className="flex flex-wrap px-2 my-2 xl:my-0">
                                    <TechnologieBadge technologies={project.technologies} type={"badge"} />
                                </div>
                                <p dangerouslySetInnerHTML={{__html: project.overview}} className="text-left text-white/50 line-clamp-2 px-2 max-w-2xl">
                                    
                                </p>
                                <span className="block px-2 text-left text-[#1e96fc] font-bold">Read more...</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-left mb-12 text-xl md:text-2xl 2xl:text-3xl leading-20 font-bold">Skills & Technologies</h3>
                        <div className="flex flex-wrap">
                            <TechnologieBadge technologies={["html", "css", "js", "node", "react", "next", "MongoDB", "tailwindcss", "python"]} type={"default"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home