import React from "react";
import { useState } from "react";

const Contact = () => {
    const [error, setError] = useState("");

    function handleMessageSubmit(e) {
        e.preventDefault();

        const name = e.target[0].value;
        const subject = e.target[1].value;
        const message = e.target[2].value.replace(/\n\r?/g, '%0D%0A');

        if (!name) {
            setError("Please Enter Your Name!")
            return;
        } 
        if (!subject) {
            setError("Please Enter A Subject!")
            return;
        }
         if (!message) {
            setError("Please Enter A Message!")
            return;
        }

        setError("");

        window.location.href = `mailto:contact@fabian-kleine.dev?subject=${subject}&body=${message}%0D%0A%0D%0ASent by ${name}`;
        
        const inputs = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');

        inputs.forEach((input) => {
            input.value = "";
        });

        textarea.value = "";
    }
    return (
        <div className="w-full bg-pattern">
            <div className="max-w-[80rem] w-[92%] m-auto py-32 z-10">
                <div className="flex flex-col items-center mb-36">
                    <h2 className="text-4xl 2xl:text-5xl leading-20 font-bold tracking-widest uppercase">Contact</h2>
                    <div className="h-2 w-10 bg-gradient2 rounded-xl my-4"></div>
                    <p className="text-center text-lg md:text-xl 2xl:text-2xl leading-7 max-w-[55rem] m-auto">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>
                <div className="flex justify-center">
                    <div className="p-16 shadow-2xl bg-[#353535] rounded w-full xl:w-3/5 xl:max-w-[60rem]">
                        <form onSubmit={handleMessageSubmit}>
                            <div className="mb-12">
                                <label className="block font-bold text-left mb-4 tracking-wider" htmlFor="name">Name</label>
                                <input placeholder="Enter Your Name" className="p-4 w-full rounded-md text-black bg-[#f0f0f0] focus:outline-0 border border-[#ebebeb]" type="text" name="name" id="name" />
                            </div>
                            <div className="mb-12">
                                <label className="block font-bold text-left mb-4 tracking-wider" htmlFor="subject">Subject</label>
                                <input placeholder="Enter Your Subject" className="p-4 w-full rounded-md text-black bg-[#f0f0f0] focus:outline-0 border border-[#ebebeb]" type="text" name="subject" id="subject" />
                            </div>
                            <div className="mb-12">
                                <label className="block font-bold text-left mb-4 tracking-wider" htmlFor="message">Message</label>
                                <textarea placeholder="Enter Your Message" name="message" id="message" cols="30" rows="10" className="p-4 w-full rounded-md text-black bg-[#f0f0f0] focus:outline-0 border border-[#ebebeb] resize-none"></textarea>
                            </div>
                            <span className="block text-red-600 text-lg md:text-xl mb-12">{error}</span>
                            <div className="sm:flex sm:justify-end">
                                <button type="submit" className="text-lg md:text-xl 2xl:text-2xl tracking-tight w-full sm:w-fit px-10 py-4 sm:py-2 uppercase transition-all border-2 rounded-md border-[#fb5607] text-[#fb5607] hover:shadow-[0_0_35px_-3px_#fb5607] hover:bg-[#fb5607] hover:text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;