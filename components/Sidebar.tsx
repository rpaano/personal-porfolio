import React from 'react'
import Image from 'next/image'
import profilePic from './profile/profilePic.jpg'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {
    
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme( theme === "light" ? "dark": "light" )
    }
    
    return (
        <div>
            <Image
                src={'/profile/profilePic.jpg'}
                alt="avatar"
                className="mx-auto border rounded-full "
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Romel</span> Paano
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
                Web Developer
            </p>
            <a 
                href='#'
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
                download="name"
            >
                <GiTie className="w-6 h-6"/> Download Resume
            </a>
            
            <div className="flex justify-around mx-auto my-5 text-green-500 md:w-full">
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            {/* Address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Cebu, Philippines</span>
                </div>
                <p className="my-2">rpaano02@gmail.com</p>
                <p className="my-2">09989460098 (Smart) /</p>
                <p className="my-2">09158237614 (Globe)</p>
            </div>

            <button 
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400" 
                onClick={() => window.open('mailto:rpaano02@gmail.com')}>
                    Email me
            </button>
            <button 
                onClick={ changeTheme }
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
                    Toogle Theme
            </button>
            
        </div>
    )
}

export default Sidebar