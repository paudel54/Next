import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
export default function Post({ id, username, userImg, img, caption }) {
    return (
        <div className='bg-white my-7 border rounded-md'>
            {/* Post Header */}
            <div className='flex items-center p-5'>
                <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username} />
                <p className='font-bold flex-1'>{username}</p>
                <BiDotsHorizontalRounded className='h-5' />
            </div>
            {/* Post Image */}
            <img src={img} className='object-cover w-full' />
        </div>
    )
}
