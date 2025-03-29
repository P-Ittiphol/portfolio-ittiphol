import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import LinkHover from './LinkHover'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 '>
        <div className='text-center'>
            <Image src={isDarkMode ? '/image/ittiphol_dark1.png' : '/image/ittiphol_white1.png'} alt='' className='w-36 mx-auto mb-2 ' width={300} height={300}/>

            <div className='w-max flex items-center gap-2 mx-auto text-black dark:text-white'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                Ittiphol.puangchaiya@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] mt-12 py-6'>
            <p className='text-black dark:text-white'>
                © 2025 Ittiphol Mark. All rights reserved.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/P-Ittiphol" className='text-black dark:text-white'><LinkHover text="GitHub"/></a></li>
                <li><a target='_blank' href="" className='text-black dark:text-white'><LinkHover text="LinkedIn"/></a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer