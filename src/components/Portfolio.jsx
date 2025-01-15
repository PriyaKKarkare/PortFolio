import React from 'react'

import java from '../../public/java.png'
import express from '../../public/express.png'
import mongodb from '../../public/mongodb.jpg'
import python from '../../public/python.webp'
import reactjs from '../../public/reactjs.png'
import nodejs from '../../public/node.png'

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: reactjs,
            name: "ReactJS"
        },
        {
            id: 4,
            logo: nodejs,
            name: "NodeJS"
        },
        {
            id: 5,
            logo: python,
            name: "Python"
        },
        {
            id: 6,
            logo: java,
            name: "Java"
        }
    ]
    return (
        <div 
        name='Portfolio'
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='md:w-[310px] md:h-[310px] rounded-lg shadow-lg cursor-pointer border-[2px] p-1 hover:scale-110 duration-300'
                                key={id}>
                                <img className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' src={logo} alt='' />
                                <div>
                                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>I cannot imagine my days without my best friend.
                                    </p>
                                </div>
                                <div className='py-2 px-1 justify-around space-x-3'>
                                    <button className='bg-blue-500 hover:bg-blue-700 font-bold text-white rounded px-4 py-2'>Video</button>
                                    <button className='bg-green-500  hover:bg-green-700 font-bold text-white rounded px-4 py-2'>Source code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
