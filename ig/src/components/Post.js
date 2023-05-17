import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsChatDots, BsBookmarks } from 'react-icons/bs';

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
            {/* Post Buttons */}
            <div className='flex justify-between px-4 pt-4 p-2'>
                <div className='flex space-x-4'>
                    <AiOutlineHeart className='btn' />
                    <BsChatDots className='btn' />
                </div>
                <BsBookmarks className='btn' />
            </div>
        </div>
    )
}
