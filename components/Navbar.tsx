'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../public/logo.jpeg'
import Logo2 from '../public/images.jpeg'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'




const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <>
        <nav className='fixed w-full h-14 bg-white shadow-2xl'>
            <div className='flex justify-between w-full h-full px-6 2xl:px-16'>
                <div className='flex justify-evenly items-center gap-6'> 
                    <Image
                        src={Logo2}
                        width={50}
                        height={50}
                        alt="logo"
                        />
                    <Link href={"#"}>
                    <h1 className='font-bold font-mono text-lg'>Where in the World?</h1>
                    </Link>
                </div>
                <div className='hidden sm:flex '>
                    <ul className='hidden sm:flex justify-evenly items-center w-full h-full gap-8'>
                        <Link href={"#"}>
                            <li className='font-mono font-medium hover:border-b-2 border-spacing-4 border-black text-base' aria-current>Home</li>   
                        </Link>
                        <Link href={"#"}>
                            <li className='font-mono font-medium hover:border-b-2 border-spacing-4 border-black text-base'>+Blog</li>
                        </Link>
                        <Link href={"#"}>
                            <li className='font-mono font-medium hover:border-b-2 border-spacing-4 border-black text-base'>about me</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24 pt-4'>
                    <AiOutlineMenu size={20}></AiOutlineMenu>
                        
                </div>
                <div className={
                            menuOpen
                            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-black p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                        }>
                            
                    <div className='flex w-full items-center justify-end'>
                        
                        <div onClick={handleNav} className='cursor-pointer'>
                            <AiOutlineClose size={20} color='white'/>
                        </div>
                    </div>
                    <div className='flex-col py-6'>
                        <ul>
                            <Link href={"/"}>
                                <li onClick={()=>{
                                    setMenuOpen(false)
                                    }} 
                                    className='py-4 cursor-pointer text-white font-mono font-medium text-xl'>
                                    Home
                                </li>
                            </Link>
                            <Link href={"/"}>
                                <li onClick={()=>{
                                    setMenuOpen(false)
                                    }} 
                                    className='py-4 cursor-pointer  text-white font-mono font-medium'> 
                                    +Blog
                                </li>
                            </Link>
                            <Link href={"/"}>
                                <li onClick={()=>{
                                    setMenuOpen(false)
                                    }} 
                                    className='py-4 cursor-pointer  text-white font-mono font-medium'>
                                    About me
                                </li>
                            </Link>
                        </ul>

                    </div>

                </div>
                                
            </div>
            
        </nav>
    </>
  )
}

export default Navbar