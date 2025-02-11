import React, { useState } from 'react'

import admindashbord from '../../public/admindashbord.jpg'
import food_app from '../../public/food_app.jpg'
import news_pic from '../../public/news_pic.jpg'
import portfolio_pic from '../../public/portfolio_pic.jpg'
import tasktrek from '../../public/task_trek.jpg'
import curdoperation from '../../public/developer_male.jpg'
import signuppage from '../../public/signup_pic.jpg'
import multisearch from '../../public/multisearch.jpg'
import tictactoe from '../../public/tic_tac_toe.jpg'
import stepper from '../../public/stepper.jpg'
import movie_maniac from '../../public/moviemaniac.jpg'

import { Box, Modal } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    pt: 2,
    px: 4,
    pb: 3,
};

function Portfolio() {
    const workcardItem = [
        {
            id: 1,
            logo: movie_maniac,
            name: "Movie Maniac",
            link: "https://moviemaniac-919jjuctl-priyas-projects-46ef61df.vercel.app/",
            technology: "React 19 (UI development),  Vite (Fast development and build),  ESLint (Linting and best practices), react's built-in state (useState, useContext), CSS or inline styles"
        },
        {
            id: 2,
            logo: food_app,
            name: "Food Taste",
            link: "https://fooddelivery-k2v0uzdkf-priyas-projects-46ef61df.vercel.app/",
            technology: "React 18 (UI development),  React Router (Navigation between pages), ESLint (Linting and best practices), React’s built-in state, CSS or inline styles"
        },
        {
            id: 3,
            logo: news_pic,
            name: "Search News",
            link: "https://newswebsite-nbj0hboz3-priyas-projects-46ef61df.vercel.app/",
            technology: "React 19 (UI development), Create React App (CRA), Web Vitals (for measuring web performance), Fetch API"
        },
        {
            id: 4,
            logo: tasktrek,
            name: "Task Trek",
            link: "https://tasktrek-fs0a42in4-priyas-projects-46ef61df.vercel.app/",
            technology: "React 18, Material UI (MUI), Emotion (for styling components in MUI), Vite"
        },
        {
            id: 5,
            logo: tictactoe,
            name: "Tic Tac Toe Game",
            link: "https://tic-tac-2b9hsals8-priyas-projects-46ef61df.vercel.app/",
            technology: "React 18, React DOM, Vite, CSS"
        },
    ]
    const basicworkcardItem = [

    ]
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (projectlink) => {
        setSelectedProject(projectlink)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const handleProjectLinkClick = (link) => {
        handleClose(); // Close the modal first
        setTimeout(() => {
            window.open(link, "_blank", "noopener,noreferrer"); // Open link in new tab after closing modal
        }, 300); // Delay to allow modal close animation (adjust timing if needed)
    };

    return (
        <div
            name='portfolio'
            className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'
        >
            <div>
                <h1
                    className='hover:scale-110 duration-300 flex justify-center text-4xl font-bold mb-5'
                >Portfolio</h1>
                <span className=' underline font-semibold'>Work Projects</span>
                <hr className='m-5 ' />
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {
                        workcardItem.map((project) => (
                            <div className='bg-gray-600 px-4 py-4 md:w-[280px] md:h-[260px] rounded-lg shadow-lg cursor-pointer border-[2px] p-1 hover:scale-110 duration-300'
                                key={project.id}>
                                <div className='flex justify-center'>
                                    <img className='w-[120px] h-[120px] bg-white/30 backdrop-blur-lg p-1 border-[2px]' src={project.logo} alt='' />

                                </div><div className='mt-3'>
                                    <div className=' underline flex justify-center px-2 text text-white'>{project.name}</div>
                                    {/* <p className='px-2 text-gray-700'>I cannot imagine my days without my best friend.
                                    </p> */}
                                </div>
                                <div className='flex py-2 px-1 justify-center space-x-3'>
                                    {/* <button className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => handleOpen(project)}>Info</button> */}
                                    <button className=' inline-flex text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => handleOpen(project)}>Info
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {/* <span className=' underline font-semibold'>Basic Work Projects</span> */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                        {
                            basicworkcardItem.map((project) => (
                                <div className='bg-gray-600 py-4 px-4 md:w-[280px] md:h-[260px] rounded-lg shadow-lg cursor-pointer border-[2px] p-1 hover:scale-110 duration-300'
                                    key={project.id}>
                                    <div className='flex justify-center'>
                                        <img className='w-[120px] h-[120px] bg-white/30 backdrop-blur-lg p-1 border-[2px]' src={project.logo} alt='' />

                                    </div>
                                    <div className='mt-3'>
                                        <div className='underline flex justify-center px-2 text-white'>{project.name}</div>
                                        {/* <p className='px-2 text-gray-700'>I cannot imagine my days without my best friend.
                                    </p> */}
                                    </div>
                                    <div className='flex py-1 px-1 justify-center space-x-3'>
                                        <button className=' inline-flex text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => handleOpen(project)}>Info
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <hr className='m-5' />
                </div>
            </div>
            <div>
                <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                    <Box className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-96 mx-auto my-20">
                        {selectedProject ? (
                            <div className="w-full">
                                <h2 id="child-modal-title" className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                    Project Name: <span className="text-blue-600">{selectedProject.name}</span>
                                </h2>
                                <p id="child-modal-description" className="text-gray-600 dark:text-gray-300 mb-4">
                                    <strong>Technology:</strong> {selectedProject.technology}
                                </p>

                                <div className="flex justify-between items-center mt-5">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => handleProjectLinkClick(selectedProject.link)}
                                    >
                                        Project Link
                                    </a>
                                    <button
                                        type="button"
                                        className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700 transition duration-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={handleClose}
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default Portfolio

