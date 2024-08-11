import React from 'react';
import pic from '../assets/pic.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';

function HOME() {
    const handleClick = (link) => {
        const section = document.getElementById(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home" name="home" className='h-screen mt-16 md:mt-0 w-full bg-black text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 lg:flex-row gap-12 md:flex-row'>
                <div className='px-8 md:px-0'>
                    <h2 className='text-4xl'>
                        <center>Hi, My Name is <span className='text-purple-500'>Shiva</span></center>
                    </h2>
                    <p className='py-4'>
                        Hello! I'm J Shiva Shankar, a budding web developer with a passion for creating dynamic and responsive web applications.
                        Currently, I'm pursuing my studies and honing my skills as a fresher in the tech world. I have hands-on experience with HTML, CSS, JavaScript, and React.
                    </p>
                    <div>
                        <center>
                            <button
                                onClick={() => handleClick('projects')}
                                className='w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to bg-black cursor-pointer group'
                            >
                                My Work
                                <span className='ml-2 transform group-hover:rotate-90 duration-300'>
                                    <MdKeyboardArrowRight size={25}  className='ml-1'/> 
                                </span>
                            </button>
                        </center>
                    </div>
                </div>
                <div>
                    <img className='rounded-full w-2/3 mx-auto' src={pic} alt="myprofile" />
                </div>
            </div>
        </div>
    );
}

export default HOME;
