import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 3, link: 'experience' },
        { id: 2, link: 'projects' },
        { id: 4, link: 'contact' },
    ];

    const handleClick = (link) => {
        const section = document.getElementById(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setNav(false); // Close mobile menu on click
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black px-4 flex justify-between items-center h-20 text-white z-50'>
            <div>
                <h1 className='text-4xl ml-2'>Shiva</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li 
                        key={id} 
                        className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 hover:text-purple-500 transition-all duration-200'
                        onClick={() => handleClick(link)}
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-purple-800 text-purple-500'>
                    {links.map(({ id, link }) => (
                        <li 
                            key={id} 
                            className='px-4 cursor-pointer capitalize py-6 text-4xl'
                            onClick={() => handleClick(link)}
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavBar;
