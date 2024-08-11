import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinksMobile = () => {
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
        <div className='mt-4  bg-black text-white py-4  lg:hidden'>
            <ul className='flex justify-around flex-col px-28 gap-4 text-center'>
                <h1 className='text-xl border-b-4 inline border-purple-500'>Social Links</h1>
                {links.map(({ id, child, href, download }) => (
                    <li key={id} className='flex items-center'>
                        <a className='flex items-center px-4' href={href} target='_blank' download={download} rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinksMobile;
