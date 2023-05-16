// Es7 redux redux
import React from 'react';
import Image from 'next/image';
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
                <div className='cursor-pointer h-24 w-10 relative lg:inline-grid'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        alt="Instagram Logo"
                        className='object-contain'
                        fill={true}

                    />
                </div>
                <h1>Right Side</h1>
            </div>
            {/* mid */}
            {/* right */}
        </div>
    )
}

// width="300" height="300"