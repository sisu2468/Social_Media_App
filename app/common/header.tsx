"use client"

import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from "next/navigation"; // Import usePathname
import { FaHome, FaUser, FaBell, FaComments, FaGlobe, FaQuestionCircle, FaSearch } from 'react-icons/fa';
import Navbar from './navbar';

const exp = require("constants")
const languages = [
    { code: 'ARB', name: 'العربية', abbreviation: 'ARB' },
    { code: 'ARG', name: 'Español (Argentina)', abbreviation: 'ARG' },
    { code: 'BR', name: 'Português (Brasil)', abbreviation: 'BR' },
    { code: 'BUL', name: 'Български', abbreviation: 'BUL' },
    { code: 'CN', name: '中文', abbreviation: 'CN' },
    { code: 'CRO', name: 'Hrvatski', abbreviation: 'CRO' },
    { code: 'CZ', name: 'Čeština', abbreviation: 'CZ' },
    { code: 'DE', name: 'Deutsch', abbreviation: 'DE' },
    { code: 'DEN', name: 'Dansk', abbreviation: 'DEN' },
    { code: 'EST', name: 'Eesti', abbreviation: 'EST' },
    { code: 'FIN', name: 'Suomi', abbreviation: 'FIN' },
    { code: 'FR', name: 'Français', abbreviation: 'FR' },
    { code: 'GR', name: 'Ελληνικά', abbreviation: 'GR' },
    { code: 'HUN', name: 'Magyar', abbreviation: 'HUN' },
    { code: 'ICE', name: 'Íslenska', abbreviation: 'ICE' },
    { code: 'IND', name: 'भारतीय', abbreviation: 'IND' },
    { code: 'ISR', name: 'עברית', abbreviation: 'ISR' },
    { code: 'IT', name: 'Italiano', abbreviation: 'IT' },
    { code: 'JP', name: '日本語', abbreviation: 'JP' },
    { code: 'LAT', name: 'Latviešu', abbreviation: 'LAT' },
    { code: 'LIT', name: 'Lietuvių', abbreviation: 'LIT' },
    { code: 'MAL', name: 'Melayu', abbreviation: 'MAL' },
    { code: 'NAM', name: 'Tiếng Việt', abbreviation: 'NAM' },
    { code: 'NED', name: 'Nederlands', abbreviation: 'NED' },
    { code: 'NR', name: 'Norsk', abbreviation: 'NR' },
    { code: 'PHI', name: 'Filipino', abbreviation: 'PHI' },
    { code: 'PL', name: 'Polski', abbreviation: 'PL' },
    { code: 'PT', name: 'Português', abbreviation: 'PT' },
    { code: 'ROM', name: 'Română', abbreviation: 'ROM' },
    { code: 'RU', name: 'Русский', abbreviation: 'RU' },
    { code: 'SERB', name: 'Српски', abbreviation: 'SERB' },
    { code: 'SLO', name: 'Slovenščina', abbreviation: 'SLO' },
    { code: 'SLOVE', name: 'Slovenčina', abbreviation: 'SLOVE' },
    { code: 'SP', name: 'Español', abbreviation: 'SP' },
    { code: 'SW', name: 'Svenska', abbreviation: 'SW' },
    { code: 'TAI', name: '台灣中文', abbreviation: 'TAI' },
    { code: 'TUR', name: 'Türkçe', abbreviation: 'TUR' },
    { code: 'UK', name: 'English (UK)', abbreviation: 'UK' },
    { code: 'UKR', name: 'Українська', abbreviation: 'UKR' },
    { code: 'US', name: 'English (US)', abbreviation: 'US' }
];

const Header = () => {
    const [selectlanguage, setSelectLanguage] = useState(false);
    const [ curlang, setCurLang ] = useState('EN')
    const [ braille, setBraille ] = useState(false)
    const pathname = usePathname(); // Get the current route
    
    // List of routes where the sidebars should NOT appear
    const hideSidebars = ["/signin", "/signup"]; // Add other routes as needed
    const isSidebarHidden = hideSidebars.includes(pathname);
    
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
                                className='px-4 py-3 rounded-md bg-white/10 
                                text-white placeholder-gray-300  text-xs
                                focus:outline-none focus:bg-white/20
                                transition-colors w-[520px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-xl'
                            />
                            <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 
                                        text-gray-300 text-sm' />
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-white font-medium text-xs border-r-[1px] border-gray-500 pr-8 h-full flex items-center'>NEWSFEED</span>
                    </div>
                    <div className='flex items-center gap-8'>
                        <Link href="/" className='text-white hover:text-gray-300 relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 458.5" className="" height="15px" fill="white">
                                <path d="M507 185.7L315.7 20.9C283.6-6.7 236.8-7 204.3 20.2L7.2 185.5c-8.5 7.1-9.6 19.7-2.5 28.2 4 4.7 9.6 7.2 15.3 7.2s9.1-1.5 12.8-4.7l25.6-21.4v165.4c.9 54.4 45.4 98.4 100 98.4h197.2c54.6 0 99.1-44 100-98.4V194.3l25.4 21.8c8.4 7.2 21 6.3 28.2-2.1 7.2-8.4 6.3-21-2.1-28.2zM298.7 418.5h-83.5v-65.7c0-23 18.7-41.8 41.8-41.8s41.8 18.7 41.8 41.8v65.7zm116.8-60c0 33.1-26.9 60-60 60h-16.8v-65.7c0-45.1-36.7-81.8-81.8-81.8s-81.8 36.7-81.8 81.8v65.7h-16.8c-33.1 0-60-26.9-60-60V161.2L230 50.9c17.4-14.6 42.4-14.4 59.6.4l126 108.5v198.7z"></path>
                            </svg>
                        </Link>

                        <Link href="/profile" className='text-white hover:text-gray-300 relative'>
                            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.3 512" height="16px" fill="white">
                                <g>
                                    <path d="M196.3 239.5c30.4 0 58.1-11.4 79.3-30.1 7.2 12.8 17.4 23.7 30 32 15.5 10.1 33.1 15.4 51.2 15.4 6.4 0 12.8-.7 19.2-2 24.5-5.1 45.6-19.4 59.3-40.3 13.7-20.9 18.5-45.9 13.4-70.4-7.7-36.9-36.5-65.5-73.5-72.9-10.8-2.1-21.4 4.9-23.5 15.7-2.1 10.8 4.9 21.4 15.7 23.5 21.2 4.2 37.8 20.6 42.1 41.8 2.9 14 .2 28.4-7.7 40.3-7.9 12-19.9 20.2-34 23.1-14 2.9-28.4.2-40.3-7.7-12-7.9-20.2-19.9-23.1-34-.1-.6-.3-1.3-.5-1.9 7.7-15.8 12.1-33.6 12.1-52.4C316 53.7 262.3 0 196.3 0S76.5 53.7 76.5 119.8s53.7 119.8 119.8 119.8zm0-199.5c44 0 79.8 35.8 79.8 79.8s-35.8 79.8-79.8 79.8-79.8-35.8-79.8-79.8S152.3 40 196.3 40zM498.4 415.2c-15.6-51.9-57.9-92.1-110.5-105.1-10.7-2.6-21.6 3.9-24.2 14.6-2.6 10.7 3.9 21.6 14.6 24.2 38.9 9.6 70.2 39.3 81.7 77.7 2.6 8.7 10.5 14.3 19.1 14.3s3.8-.3 5.8-.8c10.6-3.2 16.6-14.3 13.4-24.9zM323.4 365.5c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l25.7 25.7c-24.5 3.1-64.3 7.5-106.6 9.4-115.7 5-154.1-12.4-166.7-23.2-6.8-5.8-7.6-11.2-7.6-15.3 0-9.5 3.7-17.3 11.4-24.5C88.6 331 197 329.1 235.6 331.3c11 .6 20.5-7.8 21.1-18.8.6-11-7.8-20.5-18.8-21.1-1.6 0-38.8-2.2-83.1 1.9-62 5.6-106 20.3-130.8 43.5C8.5 351.3.2 369.7 0 390c-.2 17.8 7.3 33.7 21.5 46 26.3 22.7 76.7 33.8 153.5 33.8s26.8-.3 41.4-1c36.6-1.6 70.8-5 95.7-7.9l-16.9 16.9c-7.8 7.8-7.8 20.5 0 28.3 3.9 3.9 9 5.9 14.1 5.9s10.2-2 14.1-5.9l56.2-56.2c3.8-3.8 5.9-8.8 5.9-14.1s-2.1-10.4-5.9-14.1l-56.2-56.2z"></path>
                                </g>
                            </svg>
                            <span className='absolute -top-3 -right-3 bg-red-500 text-white 
                                        text-[9px] rounded-full h-4 w-4 flex items-center 
                                        justify-center'>3</span>
                        </Link>

                        <Link href="/notifications" className='text-white hover:text-gray-300 relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span className='absolute -top-3 -right-3 bg-purple-500 text-white 
                                        text-[9px] rounded-full h-4 w-4 flex items-center 
                                        justify-center'>7</span>
                        </Link>

                        <Link href="/messages" className='text-white hover:text-gray-300 relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span className='absolute -top-3 -right-3 bg-blue-500 text-white 
                                        text-[9px] rounded-full h-4 w-4 flex items-center 
                                        justify-center'>1</span>
                        </Link>

                        <div className='flex items-center gap-8 border-gray-500 relative'>
                            <div className="relative">
                                <button
                                    className='text-white hover:text-gray-300 flex items-center'
                                    onClick={() => setSelectLanguage(!selectlanguage)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    <span className='absolute -top-2 -right-3 text-white 
                                        text-[9px] rounded-full h-4 w-4 flex items-center font-medium
                                        justify-center'>{curlang}</span>
                                </button>

                                {selectlanguage && (
                                    <div
                                        className={`absolute right-0 mt-5 w-[750px] bg-white rounded-lg shadow-lg p-4 
                                        transform transition-transform duration-300 ease-out 
                                        ${selectlanguage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
                                    >
                                        <div className="grid grid-cols-4 gap-1">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded text-gray-700"
                                                    onClick={() => {
                                                        setSelectLanguage(false);
                                                        setCurLang(lang.abbreviation);
                                                    }}
                                                >
                                                    <img src={`/images/flags/${lang.code}.png`} alt="" className="w-4 h-4" />
                                                    <span className="text-sm">
                                                        {lang.name}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className='text-white hover:text-gray-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between items-center gap-16'>
                    <div className='flex items-center gap-6'>
                        <button className='relative' onClick={() => setBraille(!braille)}>
                            <div className='w-7 h-[22px] rounded-full hover:bg-gray-800 hover:bg-opacity-50 hover:rounded-lg hover:w-8 hover:h-6 flex items-center justify-center transition-colors duration-1500 brightness-0 invert'>
                                <svg className="svg-inline--fa fa-braille" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="braille" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M240 240c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S257.6 240 240 240zM80 48c-35.38 0-64 28.62-64 64s28.62 64 64 64s64-28.62 64-64S115.4 48 80 48zM240 400c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S257.6 400 240 400zM592 144c17.62 0 32-14.38 32-32s-14.38-32-32-32s-32 14.38-32 32S574.4 144 592 144zM80 208c-35.38 0-64 28.62-64 64s28.62 64 64 64s64-28.62 64-64S115.4 208 80 208zM80 400c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S97.63 400 80 400zM432 240c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S449.6 240 432 240zM592 240c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S609.6 240 592 240zM240 48c-35.38 0-64 28.62-64 64s28.62 64 64 64s64-28.62 64-64S275.4 48 240 48zM592 400c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S609.6 400 592 400zM432 48c-35.38 0-64 28.62-64 64s28.62 64 64 64s64-28.62 64-64S467.4 48 432 48zM432 400c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S449.6 400 432 400z"></path></svg>
                            </div>
                        </button>
                        {braille && (
                            <Navbar />
                        )}
                        <button
                            className='text-white hover:text-gray-300 transition-colors'
                        >
                            <h5 className='text-xs font-semibold'>Jack Carter</h5>
                        </button>
                        <button
                            className='text-white hover:text-gray-300 transition-colors'
                        >
                            <img className='rounded-full w-[36.75px] h-[36.75px]' src='/images/admin.jpg'/>
                        </button>
                        <button
                            className='text-white hover:text-gray-300 transition-colors'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sliders">
                                <line x1="4" y1="21" x2="4" y2="14"></line>
                                <line x1="4" y1="10" x2="4" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12" y2="3"></line>
                                <line x1="20" y1="21" x2="20" y2="16"></line>
                                <line x1="20" y1="12" x2="20" y2="3"></line>
                                <line x1="1" y1="14" x2="7" y2="14"></line>
                                <line x1="9" y1="8" x2="15" y2="8"></line>
                                <line x1="17" y1="16" x2="23" y2="16"></line>
                            </svg>
                        </button>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;