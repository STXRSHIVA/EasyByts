import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/j-shiva-shankar-868562257/',

        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/STXRSHIVA',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:jangamshiva2005@gmail.com',
            
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume1.pdf',
            download: true,

        },
    ];

    return (
        <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed lg:'>
            <ul>
                {links.map(({ id, child, href, download, style }) => (
                    <li key={id} className={`flex justify-between items-center  w-40 h-14 bg-purple-400 px-4 ml-[-115px]  duration-500 hover:ml-[-5px]`}>
                        <a className='flex  justify-between items-center w-full' href={href} target='_blank' download={download} rel="noreferrer" >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
