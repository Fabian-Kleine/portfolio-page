import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, Github } from "lucide-react";
import TechnologieBadge from "../components/TechnologieBadge";
import SyntaxHighlighter from 'react-syntax-highlighter';
import "highlight.js/styles/github-dark-dimmed.css";

async function getJSON(projectname) {
    const project = await import(`../json/projects/${projectname}.json`);
    return project.default;
}

const Project = () => {
    const { projectname } = useParams();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        async function fetchProjectData() {
            try {
                const data = await getJSON(projectname);
                setProjectData(data);
            } catch (error) {
                console.error(error);
            }

        }
        fetchProjectData();
    }, [projectname]);

    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="relative max-[320px]:h-screen h-[80vh] xs:h-[60vh] z-0 flex justify-center bg-pattern">
                <div className="relative top-10 min-[321px]:top-52 max-w-none md:max-w-[50vw] w-[90%]">
                    <h1 className="text-4xl xl:text-5xl leading-20 font-bold tracking-widest uppercase mb-4">{projectData.title}</h1>
                    {projectData.tags.includes("wip") && (
                        <p className="mx-8 mt-4 text-center text-base md:text-lg 2xl:text-xl leading-7 capitalize font-bold">This project is currently under development</p>
                    )}
                    <p className="mx-8 mt-12 text-center text-lg md:text-xl 2xl:text-2xl leading-7">This page contains everything about the Project <b>{projectData.title}</b> which includes the Project Overview, Tools Used, Code Examples, What I Learned From It and more</p>
                    <div className="relative top-10">
                        {projectData.buttons.project && (
                            <a className="max-[320px]:px-10 text-xl md:text-2xl 2xl:text-3xl tracking-tight px-16 py-4 mx-2 mb-2 uppercase transition-all border-2 rounded-md border-[#f72585] text-[#f72585] hover:shadow-[0_0_35px_-3px_#f72585] hover:bg-[#f72585] hover:text-white inline-flex items-center" href={projectData.buttons.project} target="_blank"><Link className="inline mr-2" />Project Link</a>
                        )}
                        {projectData.buttons.github && (
                            <a className="max-[320px]:px-10 text-xl md:text-2xl 2xl:text-3xl tracking-tight px-16 py-4 mx-2 uppercase transition-all border-2 rounded-md border-[#ffd60a] text-[#ffd60a] hover:shadow-[0_0_35px_-3px_#ffd60a] hover:bg-[#ffd60a] hover:text-white inline-flex items-center" href={projectData.buttons.github} target="_blank"><Github className="inline mr-2" />GitHub</a>
                        )}
                    </div>
                </div>
            </div>
            <div className="md:max-w-[50rem] w-[92%] m-auto py-24 box-shadow-gray-top z-10">
                <div className="mb-8">
                    <h3 className="text-left mb-10 text-xl md:text-2xl 2xl:text-3xl leading-20 font-bold">Project Overview</h3>
                    <p className="text-left br-margin text-sm md:text-base 2xl:text-lg" dangerouslySetInnerHTML={{ __html: projectData.overview }}></p>
                </div>
                <div className="mb-8">
                    <h3 className="text-left mb-10 text-xl md:text-2xl 2xl:text-3xl leading-20 font-bold">Technologies & Tools Used</h3>
                    <div className="flex flex-wrap">
                        <TechnologieBadge technologies={[...projectData.technologies, ...projectData.tools]} type={"default"} />
                    </div>
                </div>
                {projectData.content.length > 0 &&
                    projectData.content.map((content, index) =>
                        <div className="mb-8" key={index}>
                            {content.title &&
                                <h3 className="text-left mb-10 text-xl md:text-2xl 2xl:text-3xl leading-20 font-bold">{content.title}</h3>
                            }
                            {content.type == "code" &&
                                <SyntaxHighlighter wrapLongLines={true} useInlineStyles={false} language={content.language} className="text-xs sm:text-base text-left rounded-md p-2">
                                    {content.code}
                                </SyntaxHighlighter>
                            }
                            {content.type == "img" &&
                                <img loading="lazy" src={content.src} className="w-full mb-2" />
                            }
                            {content.caption &&
                                <span dangerouslySetInnerHTML={{ __html: content.caption }} className="block text-left"></span>
                            }
                            {content.type == "list" &&
                                <ul className="text-left ml-6 list-disc text-base md:text-lg 2xl:text-xl">
                                    {content.list.map((e) =>
                                        <li>{e}</li>
                                    )}
                                </ul>
                            }
                            {content.text &&
                                <p className="text-left br-margin text-sm md:text-base 2xl:text-lg" dangerouslySetInnerHTML={{ __html: content.text }}></p>
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Project;