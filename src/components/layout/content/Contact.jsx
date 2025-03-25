import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { initialValues, validationSchema } from '../../../validation/contactForm';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
// import withReactContent from 'sweetalert2-react-content';
const Contact = () => {
    const [loading, setLoading] = useState(false); // Add loading state

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const formRef = useRef();
    // const mySwal = withReactContent(Swal);

    const { VITE_REACT_APP_SERVICE_ID, VITE_REACT_APP_TEMPLATE_ID, VITE_REACT_APP_USER_ID } = import.meta.env;
    const onSubmit = (values, { resetForm }) => {
        setLoading(true);
        emailjs.sendForm(VITE_REACT_APP_SERVICE_ID, VITE_REACT_APP_TEMPLATE_ID, formRef.current, {
            publicKey: VITE_REACT_APP_USER_ID
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for contacting us!',
                    showConfirmButton: true,
                    timer: 2000,
                })
                resetForm();
            }).catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Message Not Sent!',
                    text: 'Please try again later!',
                    showConfirmButton: true,
                    confirmButtonColor: '#f44336',
                })
            }).finally(() => {
                setLoading(false);
            }
            )
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <>
            <div id='contact' className="min-h-screen flex items-center justify-center bg-black text-white" data-aos="fade-up">
                <div className="w-full max-w-md px-4">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-1 pt-8">Get In Touch</h2>
                        <p className="text-gray-400">
                            Shoot me an email ! by filling out your information below. I will get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-black shadow-lg rounded-lg p-8">
                        <form className="space-y-6" ref={formRef} onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Please enter your name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                />
                                {formik.touched.name && formik.errors.name ? (<p className='text-error' >{formik.errors.name}</p>) : null}
                            </div>
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="example@domain.com"
                                    className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                />
                                {formik.touched.email && formik.errors.email ? (<p className='text-error'  >{formik.errors.email}</p>) : null}
                            </div>
                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400">
                                    Subject
                                </label>
                                <input
                                    type="subject"
                                    id="subject"
                                    name="subject"
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    placeholder="The subject"
                                    className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                />
                                {formik.touched.subject && formik.errors.subject ? (<p className='text-error'  >{formik.errors.subject}</p>) : null}
                            </div>


                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="4"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                ></textarea>
                                {formik.touched.message && formik.errors.message ? (<p className='text-error'  >{formik.errors.message}</p>) : null}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`w-full py-3 px-4 bg-primary text-white font-semibold rounded-md transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${loading ? 'cursor-not-allowed opacity-50' : ''
                                    }`}
                                disabled={loading} // Disable button when loading
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                        <span className="ml-2">Submitting...</span>
                                    </div>
                                ) : (
                                    'Submit →'
                                )}
                            </button>
                        </form>
                    </div>
                </div >
            </div >
            <div className="fixed bottom-12 right-8 " >
                <a href="#home" className="bg-primary text-white  font-semibold rounded-lg p-3 px-5 shadow-lg">
                    &uarr;
                </a>
            </div>
        </>
    );
};

export default Contact;
