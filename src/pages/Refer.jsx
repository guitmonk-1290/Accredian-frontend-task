import React, { useState } from 'react'
import styles from '../style'
import { Navbar, Hero, Footer } from '../components';
import ReferModal from '../modals/ReferModal';

const Refer = (props) => {

    const [open, setOpen] = useState(false);

    const triggerModal = () => {
        setOpen(!open);
    }

    return (
        <>
            <ReferModal isOpen={open} onClose={triggerModal} />
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar signed={props.signed} colorChange={true} />
                    </div>
                </div>

                <div className={`bg-primary ${styles.flexStart} ml-12 mr-12`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero triggerModal={triggerModal} />
                    </div>
                </div>

                <div className={` bg-primary ${styles.flexStart} ml-12 mr-12 mt-8 md:mt-0`}>
                    <div className={`${styles.boxWidth} text-center h-full w-full`}>
                        <span className='text-black font-bold text-[22px]'>The Referral Approach</span>
                    </div>
                </div>

                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <section id="home" className={`pl-4 flex md:flex-row flex-col sm:py-10 py-1 bg-white ml-12 mr-12`}>
                            <div className='flex flex-col mt-8 md:flex-row md:mt-0 gap-12 md:gap-32 w-fit ml-auto mr-auto'>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-center content-center ml-auto mr-auto w-[80px] h-[80px] bg-blue-300'>
                                        <span className='mt-auto text-blue-900 font-bold text-[32px]'>1</span>
                                    </div>
                                    <span className='text-black text-center font-semibold'>Submit referrals via <br /> our referral section</span>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-center content-center ml-auto mr-auto w-[80px] h-[80px] bg-red-300'>
                                        <span className='mt-auto text-red-900 font-bold text-[32px]'>2</span>
                                    </div>
                                    <span className='text-black text-center font-semibold'>Earn rewards when <br /> referral joins a program</span>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-center content-center ml-auto mr-auto w-[80px] h-[80px] bg-green-300'>
                                        <span className='mt-auto text-green-900 font-bold text-[32px]'>3</span>
                                    </div>
                                    <span className='text-black text-center font-semibold'>Both parties receive <br /> a bonus after 30 days</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <footer className="bg-gradient-to-r from-blue-800 via-sky-600 to-sky-100 pt-8 pb-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl font-bold text-white mb-2">accredian</h3>
                            <p className="text-gray-100 text-[13px] font-semibold text-base leading-relaxed">
                                5C4, Venus Atlantis Space<br />Zydus Corporate Park <br />Bengaluru, India - 227784
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-end mt-12 md:mt-0">
                            <ul className="list-none ml-auto mr-auto md:mr-0 flex flex-row gap-12">
                                <li>
                                    <a href="#" className="text-black hover:text-blue-600 transition duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-blue-600 transition duration-300">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-blue-600 transition duration-300">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="ml-auto mr-auto md:mr-0 pt-9">
                                <div className="md:mb-9 flex justify-center">
                                    <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                                fillRule="evenodd"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    
                                    <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-4">
                        <p className="text-center text-black font-semibold text-sm">
                            &copy; {new Date().getFullYear()} accredian. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>

    )
};

export default Refer