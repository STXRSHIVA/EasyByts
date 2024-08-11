import React from 'react';
import redbus from "../assets/redbus.png";
import youtube from "../assets/youtube.png";

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col px-24 text-white justify-center items-center aspect-auto pt-10">
            <center>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl font-bold border-b-4 border-purple-500 p-2 inline'>Projects</p>
                    <p className='py-6'>These are some Clones I've made</p>
                </div>

                <div className="flex gap-5 mt-5 flex-col md:flex-row">
                    <div className="flex flex-col gap-5">
                        <span>
                            <img className="w-4/5 shadow-lg shadow-purple-500 rounded-lg" src={redbus} alt="redbus" />
                        </span>
                        <h1 className="text-xl lg:text-3xl">RedBus Clone using Tailwind CSS</h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span>
                            <img className="w-4/5 shadow-lg shadow-purple-500 rounded-lg" src={youtube} alt="youtube" />
                        </span>
                        <h1 className="text-xl lg:text-3xl">YouTube Clone using Tailwind CSS</h1>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Projects;
