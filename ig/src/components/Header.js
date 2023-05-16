// Es7 redux redux
import React from 'react';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
export default function Header() {
    return (
        <div className=''>
            {/* left */}
            <div className='flex items-center justify-between max-w-6xl'>
                <div className='cursor-pointer h-24 w-24 relative lg:inline-grid'>
                    <Image src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
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

                <div className='cursor-pointer h-24 w-10 relative lg:inline-grid'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        alt="Instagram Logo"
                        className='object-contain'
                        fill={true}
                    />
                </div>

            </div>


            {/* right */}
            <h1>Right Side</h1>
        </div>
    )
}

// width="300" height="300"