'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = data => {
    console.log(data);
    // In a real application, you would send this data to an API
    setSuccessMessage('Thank you for your message! We will get back to you shortly.');
    reset(); // Reset form fields after successful submission
    setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 5 seconds
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center py-10 px-4 relative overflow-hidden">
        <style jsx global>{`
            @keyframes animate-blur-blob {
                0% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.2); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
            .animated-blob {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(255, 239, 173, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
                filter: blur(80px);
                border-radius: 50%;
                animation: animate-blur-blob 10s infinite ease-in-out;
                z-index: 0;
            }
        `}</style>
        <div className="animated-blob"></div>

        <div className="w-full max-w-4xl rounded-xl shadow-lg relative z-10">
            {/* Contact Info Container */}
            <div className="flex flex-col md:flex-row items-center justify-around bg-yellow-100 rounded-t-xl p-6 md:p-8 space-y-4 md:space-y-0 text-gray-800 shadow-md">
                <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span className="font-medium">+91 96551236</span>
                </div>
                <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    <span className="font-medium">New Delhi</span>
                </div>
                <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M22 6l-10 7L2 6"></path>
                    </svg>
                    <span className="font-medium">Arabianmehek@gmail.com</span>
                </div>
            </div>

            <div className="bg-white rounded-b-xl shadow-lg p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
                    Contact Us
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    We'd love to hear from you! Please fill out the form below.
                </p>

                {successMessage && (
                    <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center shadow-md">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
                        <input
                            id="name"
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-200"
                        />
                        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-200"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            {...register('subject', { required: 'Subject is required' })}
                            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-200"
                        />
                        {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message</label>
                        <textarea
                            id="message"
                            rows="4"
                            {...register('message', { required: 'Message is required' })}
                            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-200"
                        ></textarea>
                        {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-10 py-3 font-semibold rounded-full bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors duration-200 shadow-md transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
