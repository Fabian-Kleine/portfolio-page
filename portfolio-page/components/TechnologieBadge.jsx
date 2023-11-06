import React from "react";
import techData from "../json/technologies.json";

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

const TechnologieBadge = ({ technologies, type }) => {
    var renderedTechnologie = [];

    technologies.forEach((name) => {
        renderedTechnologie.push(techData[name]);
    });

    if (type == "badge") {
        return (
            <>
                {renderedTechnologie.map((tech, i) =>
                    <span style={{
                        '--dynamic-color': `${hexToRgb(tech.color).r}, ${hexToRgb(tech.color).g}, ${hexToRgb(tech.color).b}`,
                    }} key={i} className={"flex items-center cursor-default text-sm font-bold px-2 mr-2 mb-2 rounded-xl border-techBadge border-2 bg-techBadge bg-opacity-60"}>
                        <img src={tech.icon} alt={tech.name} className="h-5 mr-1" />
                        {tech.name}
                    </span>
                )}
            </>
        )
    } else {
        return (
            <>
                {renderedTechnologie.map((tech, i) =>
                    <div key={i} style={{
                        '--dynamic-color': `${hexToRgb(tech.color).r}, ${hexToRgb(tech.color).g}, ${hexToRgb(tech.color).b}`,
                        '--dynamic-shadow-color': `${hexToRgb(tech.hover).r}, ${hexToRgb(tech.hover).g}, ${hexToRgb(tech.hover).b}`,
                    }} className={"transition-shadow cursor-default mr-6 mb-6 py-2 px-4 bg-techBadge border-2 rounded-lg border-techBadge bg-opacity-60 hover:shadow-techBadge"}>
                        <img src={tech.icon} alt={tech.name} className="inline h-10" />
                        <h4 className="inline font-bold">{tech.name}</h4>
                    </div>
                )}
            </>
        )
    }
}

export default TechnologieBadge;