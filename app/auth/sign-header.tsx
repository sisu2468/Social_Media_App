"use client"

import { useState } from 'react';
import Link from 'next/link'
import { FaHome, FaUser, FaBell, FaComments, FaGlobe, FaQuestionCircle, FaSearch } from 'react-icons/fa';

const SignHeader = () => {
    const [selectlanguage, setSelectLanguage] = useState(false);
    const [ curlang, setCurLang ] = useState('EN')
    const [ braille, setBraille ] = useState(false)
    
    return (
        <header className='bg-[#30305b] h-[55px] px-3 fixed z-40 w-full'>
            <nav className='h-full flex items-center justify-between'>
                <div className='flex justify-between gap-5 border-gray-500 h-full'>
                    <div className='flex items-center gap-28'>
                        <img
                            className='w-32 h-12 brightness-0 invert'
                            src='/images/ummaup.png'
                            alt="UmmaUp Logo"
                        />

                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Search People, Pages, Groups etc"
                                className='px-4 py-2.5 rounded-md bg-white/10 
                                text-white placeholder-gray-300  text-xs
                                focus:outline-none focus:bg-white/20
                                transition-colors w-[407px] sm:w-[320] md:w-[380px] lg:w-[407px] max-w-xl'
                            />
                            <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 
                                        text-gray-300 text-sm' />
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-white font-medium text-xs border-r-[1px] border-gray-500 pr-8 h-full flex items-center'>LOGOUT</span>
                    </div>
                </div>

                <div className='flex justify-between items-center gap-16 ml-auto'>
                    <div className='flex items-center gap-8'>
                        <Link href="/" className='text-white hover:text-gray-300 relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 458.5" className="" height="15px" fill="white">
                                <path d="M507 185.7L315.7 20.9C283.6-6.7 236.8-7 204.3 20.2L7.2 185.5c-8.5 7.1-9.6 19.7-2.5 28.2 4 4.7 9.6 7.2 15.3 7.2s9.1-1.5 12.8-4.7l25.6-21.4v165.4c.9 54.4 45.4 98.4 100 98.4h197.2c54.6 0 99.1-44 100-98.4V194.3l25.4 21.8c8.4 7.2 21 6.3 28.2-2.1 7.2-8.4 6.3-21-2.1-28.2zM298.7 418.5h-83.5v-65.7c0-23 18.7-41.8 41.8-41.8s41.8 18.7 41.8 41.8v65.7zm116.8-60c0 33.1-26.9 60-60 60h-16.8v-65.7c0-45.1-36.7-81.8-81.8-81.8s-81.8 36.7-81.8 81.8v65.7h-16.8c-33.1 0-60-26.9-60-60V161.2L230 50.9c17.4-14.6 42.4-14.4 59.6.4l126 108.5v198.7z"></path>
                            </svg>
                        </Link>
                        <div className='flex items-center gap-8 border-gray-500 relative'>
                            <button className='text-white hover:text-gray-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <span className='text-white font-semibold text-sm'>Privacy & Policy</span>
                        <span className='text-white font-semibold text-sm'>Contract</span>
                        <span className='text-white font-semibold text-sm'>Faq's</span>
                        <span className='text-white font-semibold text-sm'>Forum</span>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default SignHeader;