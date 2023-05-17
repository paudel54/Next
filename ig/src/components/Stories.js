"use client"
import React, { useEffect, useState } from 'react';
import Story from './Story';
import minifaker from 'minifaker';
import "minifaker/locales/en"
export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([]);
    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => (
            {
                username: minifaker.username({
                    locale: "en"
                }).toLocaleLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                id: i,
            }
        ));
        setStoryUsers(storyUsers);
    }, [])
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border-1 overflow-x-scroll rounded-sm scrollbar-none'>
            {/* {JSON.stringify(storyUsers)} */}
            {storyUsers.map(user => (
                <Story key={user.id} username={user.username} img={user.img} />
            ))}
        </div>
    )
}
