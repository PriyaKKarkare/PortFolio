import React, { useState } from 'react';

import logopic from '../../public/logo_pic.jpg';

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        // {
        //     id: 1,
        //     text: "Home"
        // },
        // {
        //     id: 2,
        //     text: "About"
        // },
        // {
        //     id: 2,
        //     text: "Portfolio"
        // },
        // {
        //     id: 4,
        //     text: "Experience"
        // },
        // {
        //     id: 3,
        //     text: "Contact"
        // }
    ]
    return (
        <>
            {/* <div className='h-auto max-w-screen-2xl transition-all duration-300  blur-xs hover:blur-none' style={{ backgroundImage: "url('/worklifestyle.jpg')" }}> */}
            <div className='bg-slate-500 max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-20 fixed top-0 left-0 right-0 z-50'>
                <div className='flex justify-between items-center h-20'>
                    <div className='flex flex-col'>
                        <img src={logopic} className='flex justify-center h-12 w-12 rounded-full shadow-lg border-[2px]' />
                        <h1 className='font-semibold text-xl'>
                            {/* <span className='text-black-700 text-2xl'>P</span>riya */}
                            <p className='text-sm'>Frontend Developer</p>
                        </h1>
                    </div>
                    <div >
                        {/* desktop */}
                        <ul className='hidden md:flex space-x-8'>
                            <li className=' border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300  hover:scale-105 duration-200 font-semibold text-2xl cursor-pointer flex items-center space-x-2'>
                                <Link
                                    onClick={() => setMenu(false)}
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    className="group flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li
                                className='border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300  hover:scale-105 duration-200 font-semibold text-2xl cursor-pointer flex items-center space-x-2'
                            >
                                <Link
                                    onClick={() => setMenu(false)}
                                    to="portfolio"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    className="group flex items-center"
                                >
                                    <svg
                                        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM10 4h4v2h-4V4Zm10 16H4V8h16v12Z" />
                                    </svg>
                                    Portfolio
                                </Link>
                            </li>
                            <li className='border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300  hover:scale-105 duration-200 font-semibold text-2xl cursor-pointer flex items-center space-x-2'>
                                <Link
                                    onClick={() => setMenu(false)}
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    className="group flex items-center"
                                >
                                    <svg
                                        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 20"
                                    >
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                        <div className='md:hidden' onClick={() => setMenu(!menu)}>
                            {!menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
                        </div>
                    </div>
                </div>
                {/* mobile */}
                {/* {menu &&
                    (<div className='bg-white'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 font-semibold text-2xl cursor-pointer' key={id}>
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                    >{text}</Link></li>
                            ))}
                        </ul>
                    </div>)} */}
            </div>

        </>
    )
}

export default Navbar
