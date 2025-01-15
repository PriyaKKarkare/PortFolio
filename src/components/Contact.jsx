import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/blllkpob", userInfo)
            toast.success("Your Message has been send!")
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!")

        }
    }


    return (
        <div
            name='Contact'
            className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span>Please fill out the below form to contact me</span>
            <div className='flex flex-col justify-center items-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    // action='https://getform.io/f/blllkpob' method='POST'
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='font-semibold text-xl mb-4'>Send your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            FullName
                        </label>
                        <input
                            {...register('name', { required: true })}
                            className='shadow text-gray-700 appearance-none border rounded-lg px-3 leading-tight focus:outline-none focus:shadow-outline py-2'
                            id='name'
                            type='text'
                            placeholder='Enter your fullname'
                            name='name'
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Email Address
                        </label>
                        <input
                            {...register('email', { required: true })}
                            className='shadow text-gray-700 appearance-none border rounded-lg px-3 leading-tight focus:outline-none focus:shadow-outline py-2'
                            id='email'
                            type='email'
                            placeholder='Enter your email address'
                            name='email'
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Message
                        </label>
                        <textarea
                            {...register('message', { required: true })}
                            className='shadow text-gray-700 appearance-none border rounded-lg px-3 leading-tight focus:outline-none focus:shadow-outline py-2'
                            id='message'
                            type='text'
                            placeholder='Enter your message'
                            name='message'
                        />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    {/* <div className='flex justify-center items-center'> */}
                    <button type='submit' className='bg-black text-white px-3 py-2 hover:bg-slate-700 duration-300 rounded-xl '>Send</button>
                    {/* </div> */}
                </form>
            </div >
        </div >
    )
}

export default Contact
