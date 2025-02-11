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
            link: "https://moviemaniac-919jjuctl-priyas-projects-46ef61df.vercel.app/"
        },
        // {
        //     id: 1,
        //     logo: admindashbord,
        //     name: "Admin DashBoard",
        //     link: "https://tic-tac-2b9hsals8-priyas-projects-46ef61df.vercel.app/"
        // },
        {
            id: 2,
            logo: food_app,
            name: "Food Taste",
            link: "https://fooddelivery-k2v0uzdkf-priyas-projects-46ef61df.vercel.app/"
        },
        {
            id: 3,
            logo: news_pic,
            name: "Search News",
            link: "https://newswebsite-nbj0hboz3-priyas-projects-46ef61df.vercel.app/"
        },
        // {
        //     id: 4,
        //     logo: portfolio_pic,
        //     name: "PortFolio Template",
        //     link: "https://multiseach-81nagdhcz-priyas-projects-46ef61df.vercel.app/"
        // },
        {
            id: 4,
            logo: tasktrek,
            name: "Task Trek",
            link: "https://tasktrek-fs0a42in4-priyas-projects-46ef61df.vercel.app/"
        },
        {
            id: 5,
            logo: tictactoe,
            name: "Tic Tac Toe Game",
            link: "https://tic-tac-2b9hsals8-priyas-projects-46ef61df.vercel.app/"
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"

                >
                    <Box sx={{ ...style, width: 400 }}>
                        {
                            selectedProject ? (
                                <div className='w-[400px] h-[350px]'>
                                    <h2 id="child-modal-title">Project Name: {selectedProject.name}</h2>
                                    <p id="child-modal-description">
                                        Technology : {""}
                                    </p>
                                    {/* <Button onClick={handleClose}>Project Link</Button> */}
                                    <div
                                        className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"'
                                    // className='flex   align-bottom justify-center'
                                    >
                                        <a data-modal-hide="default-modal"
                                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                            // className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                                            href={selectedProject.link} target='_blank' >Project Link</a>
                                        <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleClose()}>Decline</button>
                                    </div>

                                </div>) : null
                        }

                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default Portfolio

