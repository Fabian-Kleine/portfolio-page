import React from "react";
import TechnologieBadge from "../components/TechnologieBadge";
import projects from "../json/projects/";
import { Filter, Hammer, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";


const Projects = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const [filter, setFilter] = useState({
        status: [],
        size: [],
        lang: []
    });
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setFilteredProjects(projects);
    }, []);

    function handleFilterApply() {
        var newProjects = [];
        projects.forEach((project) => {
            var includesStatus = filter.status.some(f => project.tags.includes(f));
            if (filter.status.length == 0) includesStatus = true;
            var includesSize = filter.size.some(f => project.tags.includes(f));
            if (filter.size.length == 0) includesSize = true;
            var includesLang = filter.lang.some(f => project.tags.includes(f));
            if (filter.lang.length == 0) includesLang = true;

            if (includesStatus && includesSize && includesLang) newProjects.push(project);
        });
        setFilteredProjects(newProjects);
        setOpenFilter(false);
    }

    return (
        <div className="relative min-h-[90vh] z-0 flex justify-center">
            <div className="relative top-16 max-w-[90vw] w-[90%]">
                <h1 className="text-4xl 2xl:text-5xl leading-20 font-bold tracking-widest uppercase mb-4">Projects</h1>
                <div className="flex items-center flex-col pb-32">
                    <div className="h-2 w-10 bg-gradient3 mb-4 rounded-xl"></div>
                    <div className="relative flex justify-left items-center w-full xl:w-1/2 mb-4">
                        <button onClick={() => setOpenFilter(!openFilter)} className="bg-[#242424] bg-opacity-60 border-[#242424] border-2 rounded-md p-2 font-bold"><Filter className="inline mr-2" />Filter by Tags</button>
                        <div className={`${openFilter ? "block" : "hidden"} absolute top-12 bg-[#242424] shadow-lg border-[#242424] border-2 rounded-md p-2 font-bold`}>
                            <h4 className="text-white/50 text-left mt-2 border-b border-white/50">Project Status</h4>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label htmlFor="finished"><ShieldCheck className="inline mr-1" />Finished <span className="text-white/50 font-normal">({projects.filter(project => project.tags.includes("finished")).length})</span></label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, status: [...filter.status, "finished"] }) : setFilter({ ...filter, status: filter.status.filter((f) => { return f != "finished" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="finished"
                                    id="finished" />
                            </div>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label htmlFor="wip"><Hammer className="inline mr-1" />Work in Progress <span className="text-white/50 font-normal">({projects.filter(project => project.tags.includes("wip")).length})</span></label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, status: [...filter.status, "wip"] }) : setFilter({ ...filter, status: filter.status.filter((f) => { return f != "wip" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="wip"
                                    id="wip" />
                            </div>
                            <h4 className="text-white/50 text-left mt-2 border-b border-white/50">Project Size</h4>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label htmlFor="small">Small <span className="text-white/50 font-normal">({projects.filter(project => project.tags.includes("small")).length})</span></label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, size: [...filter.size, "small"] }) : setFilter({ ...filter, size: filter.size.filter((f) => { return f != "small" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="small"
                                    id="small" />
                            </div>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label htmlFor="medium">Medium <span className="text-white/50 font-normal">({projects.filter(project => project.tags.includes("medium")).length})</span></label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, size: [...filter.size, "medium"] }) : setFilter({ ...filter, size: filter.size.filter((f) => { return f != "medium" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="medium"
                                    id="medium" />
                            </div>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label htmlFor="large">Large <span className="text-white/50 font-normal">({projects.filter(project => project.tags.includes("large")).length})</span></label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, size: [...filter.size, "large"] }) : setFilter({ ...filter, size: filter.size.filter((f) => { return f != "large" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="large"
                                    id="large" />
                            </div>
                            <h4 className="text-white/50 text-left mt-2 border-b border-white/50">Language</h4>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label className="flex items-center" htmlFor="js">
                                    <img src="/technologie-icons/icons8-js.svg" alt="JavaScript" className="inline h-5 mr-1" />
                                    JavaScript
                                    <span className="ml-1 text-white/50 font-normal">({projects.filter(project => project.tags.includes("js")).length})</span>
                                </label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, lang: [...filter.lang, "js"] }) : setFilter({ ...filter, lang: filter.lang.filter((f) => { return f != "js" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="js"
                                    id="js" />
                            </div>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label className="flex items-center" htmlFor="python">
                                    <img src="/technologie-icons/icons8-python.svg" alt="Python" className="inline h-5 mr-1" />
                                    Python
                                    <span className="ml-1 text-white/50 font-normal">({projects.filter(project => project.tags.includes("python")).length})</span>
                                </label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, lang: [...filter.lang, "python"] }) : setFilter({ ...filter, lang: filter.lang.filter((f) => { return f != "python" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="python"
                                    id="python" />
                            </div>
                            <div className="flex flex-row-reverse items-center justify-end mb-1">
                                <label className="flex items-center" htmlFor="R">
                                    <img src="/technologie-icons/R_logo.svg.png" alt="R" className="inline h-5 mr-1" />
                                    R 
                                    <span className="ml-1 text-white/50 font-normal">({projects.filter(project => project.tags.includes("R")).length})</span>
                                </label>
                                <input
                                    onChange={(e) => e.target.checked ? setFilter({ ...filter, lang: [...filter.lang, "R"] }) : setFilter({ ...filter, lang: filter.lang.filter((f) => { return f != "R" }) })}
                                    className="mr-2 h-4 w-4"
                                    type="checkbox"
                                    name="R"
                                    id="R" />
                            </div>
                            <div className="flex justify-left mt-4">
                                <button onClick={handleFilterApply} className="tracking-tight w-full sm:w-fit px-8 py-1 transition-all border-2 rounded-md border-[#f72585] text-[#f72585] hover:shadow-[0_0_35px_-3px_#f72585] hover:bg-[#f72585] hover:text-white">Apply</button>
                            </div>
                        </div>
                        <span className="ml-2 text-lg"><b>{filteredProjects.length}</b> {filteredProjects.length != 1 ? "Projects" : "Project"}</span>
                    </div>
                    {filteredProjects.map((project, i) =>
                        <div key={i} className="bg-[#242424] mb-4 bg-opacity-60 border-[#242424] border-2 w-full xl:w-1/2 rounded-md p-2">
                            <a href={"/project/" + project.filename}>
                                <h2 className="text-left px-2 pt-2 font-bold text-2xl line-clamp-1">{project.title}{project.tags.includes("wip") && (<span className={"inline-flex items-center cursor-default text-sm font-bold px-2 ml-2 mb-2 rounded-xl border-2"}><Hammer className="inline h-4" />W.I.P.</span>)}</h2>
                                <div className="flex flex-wrap px-2 my-2 xl:my-0">
                                    <TechnologieBadge technologies={project.technologies} type={"badge"} />
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: project.overview }} className="text-left text-white/50 line-clamp-2 px-2 max-w-2xl">
                                    
                                </p>
                                <span className="block px-2 text-left text-[#1e96fc] font-bold">Read more...</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;