import React from 'react'

export default function MiniProfile() {
    return (
        <div className='flex items-center justify-between ml-8'>
            <img className='h-16 rounded-full border p-[2px]' src='https://i.pravatar.cc/150?img=20' alt='logo' />
            <div className='flex-1 ml-4'>
                <h2 className='font-bold'>Anna Taylor</h2>
                <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
        </div>
    )
}
