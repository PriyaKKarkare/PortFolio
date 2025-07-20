import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/blllkpob", userInfo)
            toast.success("Your Message has been send!")
            reset();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!")
        }
        setLoading(false);
    }


    return (
        <div
            name='contact'
            className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span>Please fill out the below form to contact me</span>
            <div className='flex flex-col justify-center items-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='font-semibold text-xl mb-4'>Send your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            FullName
                        </label>
                        <input
                            {...register('name', { required: true })}
                            className='shadow text-gray-700 appearance-none border rounded-lg px-3 leading-tight focus:outline-none focus:shadow-outline py-2 w-full resize-none'
                            id='name'
                            type='text'
                            placeholder='Enter your fullname'
                            name='name'
                        />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Email Address
                        </label>
                        <input
                            {...register('email', { required: true })}
                            className='shadow text-gray-700 appearance-none border rounded-lg px-3 leading-tight focus:outline-none focus:shadow-outline py-2 w-full resize-none'
                            id='email'
                            type='email'
                            placeholder='Enter your email address'
                            name='email'
                        />
                        {errors.email && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Message
                        </label>
                        <textarea
                            {...register('message', { required: true })}
                            className='shadow text-gray-700 appearance-none border rounded-lg px-3 leading-tight focus:outline-none focus:shadow-outline py-2 w-full resize-none'
                            id='message'
                            type='text'
                            placeholder='Enter your message'
                            name='message'
                        />
                        {errors.message && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                    <button
                        disabled={loading}
                        className={`bg-black text-white px-3 py-2 hover:bg-slate-700 duration-300 rounded-xl ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        type='submit'
                    >
                        {loading ? "Sending..." : "Send"}</button>
                </form>
            </div >
        </div >
    )
}

export default Contact
