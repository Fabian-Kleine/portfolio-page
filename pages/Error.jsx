import React from "react";
import { useRouteError } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const Error = () => {

    const error = useRouteError();

    console.error(error);

    return (
        <div className="relative h-[90vh] bg-pattern z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full xl:w-fit 2xl:max-w-7xl">
                <ShieldAlert className="inline m-auto mb-4" size={"100"} />
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl leading-20 font-extrabold tracking-wide uppercase">{error.status} - {error.statusText}</h1>
                <p className="mx-8 mt-12 text-center text-sm xs:text-lg md:text-xl 2xl:text-2xl leading-7">{error.data}</p>
                <div className="flex justify-center mt-12">
                    <a href="/" className="text-xl md:text-2xl 2xl:text-3xl tracking-tight px-16 py-4 uppercase transition-all border-2 rounded-md border-[#1e96fc] text-[#1e96fc] hover:shadow-[0_0_35px_-3px_#1e96fc] hover:bg-[#1e96fc] hover:text-white font-bold">Home</a>
                </div>
            </div>
        </div>
    )
}

export default Error