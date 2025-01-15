import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 '>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <FaFacebook size={24} />
                            <FaTwitter size={24} />
                            <FaLinkedin size={24} />
                            <FaInstagram size={24} />
                        </div>
                        <div className='mt-8 border-gray-700 pt-8 flex flex-col items-center border-t'>
                            <p  className='text-sm'>
                                &copy; 2025 your company. all rights reserved.
                            </p>
                            <p className='text-sm'>Supportive Partner ❤️ Priya</p>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
