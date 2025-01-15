import React from 'react'

import pic from '../../public/photo.avif';

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";
function Home() {
    return (
        <>
            <div
                name='Home'
                className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome in my feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["coder", "Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div><br />
                        <p className='text-sm md:text-md text-justify'>
                            I cannot imagine my days without my best friend.
                            They have become an integral part of my life,
                            and I cannot imagine my days without their presence,
                            which brings joy, love, and a sense of belonging beyond description.
                            Having such an amazing person by my side is a blessing,
                            and I cherish our friendship beyond measure.
                        </p><br />
                        {/* Social media icon */}
                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 justify-between'>
                            <div className='text-center space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <div>
                                    <ul className='flex space-x-5'>
                                        <li>{""}
                                            <FaFacebook className='text-2xl cursor-pointer' />
                                        </li>
                                        <li>{""}
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </li>
                                        <li>{""}
                                            <FaTelegram className='text-2xl cursor-pointer' />
                                        </li>
                                        <li>{""}
                                            <FaYoutube className='text-2xl cursor-pointer' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt='' />
                    </div>
                </div>
                <br />
                <hr />
            </div>
        </>
    )
}

export default Home
