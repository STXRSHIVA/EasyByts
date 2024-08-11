import React from 'react';
import html from "../assets/html.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.svg";
import css from "../assets/css.png";

const Experience = () => {
    const techs = [
        { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
        { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
        { id: 3, src: js, title: 'JAVASCRIPT', style: 'shadow-yellow-500' },
        { id: 4, src: tailwind, title: 'TAILWIND', style: 'shadow-sky-400' },
        { id: 5, src: react, title: 'REACT', style: 'shadow-blue-600' },
        { id: 6, src: java, title: 'JAVA', style: 'shadow-red-500' },
        { id: 7, src: github, title: 'GITHUB', style: 'shadow-white' },
    ];

    return (
        <div id="experience" className='text-white px-24 pt-20 md:pt-0'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold border-b-4 border-purple-500 p-2'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img className='w-20 mx-auto' src={src} alt={title} />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
