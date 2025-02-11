import React, { useRef } from 'react'

import pic from '../../public/work_life.jpg';
import profilepic from '../../public/PROFILE_IMAGE.jpg';

function Home() {
    const linkRef = useRef(null);
    return (
        <>
            <div
                name='home'
                className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-2/4 mt-12 md:mt-24 space-y-7 order-2 md:order-1  flex flex-col '>
                        <span className='text-6xl text-decoration-line: underline font-mono mb-5'>WELCOME !!<span className=' text-7xl text-red-600'>!</span> </span>
                        <div>
                            <a
                                href="/Priya_Resume(1).pdf"
                                download="Priya_Resume(1).pdf"
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Download Resume
                            </a>
                        </div>
                        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={profilepic} alt="" />
                            <div className="space-y-2 text-center sm:text-left">
                                <div className="space-y-0.5 mb-3">
                                    <p className="text-lg font-semibold text-black">Priya Kashinath Karkare</p>
                                    <p className="font-medium text-gray-700">Frontend developer<br /> React Js Developer</p>
                                </div>
                                <a ref={linkRef} href="mailto:priya9930688736@gmail.com?" target="_blank"
                                    className='cursor-pointer px-2 py-2 rounded-lg border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...'>Click here to send email</a>
                                <div className='mt-2 flex justify-evenly'>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M5.022 4.764c.489 0 .75-.37.8-.856l.188-1.877A.952.952 0 0 0 5.063.985H2.791a1.127 1.127 0 0 0-1.067.749A16.11 16.11 0 0 0 1 7a16.737 16.737 0 0 0 .743 5.242c.154.463 1.748.773 2.236.773H5a.95.95 0 0 0 .946-1.046l-.188-1.877a.95.95 0 0 0-.946-.856h-.761A14.627 14.627 0 0 1 3.937 7c-.02-.747.019-1.495.114-2.236h.971Zm13.365 7.592L18.6 11H14a1 1 0 0 1 0-2h4.918l.159-1H14a1 1 0 1 1 0-2h5.393l.158-1H14a1 1 0 1 1 0-2h5.868l.111-.7a2.04 2.04 0 0 0-.473-1.629A1.912 1.912 0 0 0 18.063 0H9a1 1 0 0 0-1 1v11.78A2.985 2.985 0 0 0 7 15v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a2.991 2.991 0 0 0-1.613-2.644Z" />
                                    </svg>
                                    <span className='cursor-not-allowed disabled text '> 7718051565<br />8108141328</span>
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
            </div >
        </>
    )
}

export default Home
