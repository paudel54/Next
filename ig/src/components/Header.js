// Es7 redux redux
import React from 'react';
import Image from 'next/image';
import { BsSearch, BsFillPlusCircleFill } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';

export default function Header() {
    return (
        <div className='shadow-sm border-b-2 sticky top-0 bg-white z-30'>
            {/* left */}
            <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
                <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                    <Image src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                        alt="Instagram Logo"
                        className='object-contain'
                        fill={true}

                    />
                </div>
                <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        alt="Instagram Logo"
                        className='object-contain'
                        fill={true}
                    />
                </div>

                {/* mid */}
                <div className='relative mt-1'>
                    <div className='absolute top-2 left-2'>
                        <BsSearch className='h-5 text-gray-500' />
                    </div>
                    <input type='text' placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md ' />
                </div>

                {/* right */}
                <div>
                    <div className='flex space-x-4 items-center'>
                        <ImHome className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                        <BsFillPlusCircleFill className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                        <img src='https://xsgames.co/randomusers/avatar.php?g=male'
                            alt='user image' className='h-10 rounded-full' />
                    </div>
                </div>

            </div>

        </div>
    )
}

// width="300" height="300"