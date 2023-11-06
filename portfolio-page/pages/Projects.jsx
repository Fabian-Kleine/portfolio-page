import React from "react";
import TechnologieBadge from "../components/TechnologieBadge";
import projects from "../json/projects/";


const Projects = () => {
    return (
        <div className="relative h-[90vh] z-0 flex justify-center">
            <div className="relative top-16 max-w-[90vw] w-[90%]">
                <h1 className="text-4xl 2xl:text-5xl leading-20 font-bold tracking-widest uppercase mb-4">Projects</h1>
                <div className="flex items-center flex-col">
                <div className="h-2 w-10 bg-gradient3 mb-4 rounded-xl"></div>
                    {projects.map((project) =>
                        <div className="bg-[#242424] mb-4 bg-opacity-60 border-[#242424] border-2 w-full xl:w-1/2 rounded-md p-2">
                            <a href={"/project/" + project.filename}>
                                <h2 className="text-left px-2 pt-2 font-bold text-2xl">{project.title}</h2>
                                <div className="flex flex-wrap px-2 my-2 xl:my-0">
                                    <TechnologieBadge technologies={project.technologies} type={"badge"} />
                                </div>
                                <p dangerouslySetInnerHTML={{__html: project.overview}} className="text-left text-white/50 line-clamp-2 px-2 max-w-2xl">
                                    
                                </p></a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;