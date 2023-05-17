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
        <div>
            {/* {JSON.stringify(storyUsers)} */}
            {storyUsers.map(user => (
                <Story key={user.id} username={user.username} img={user.img} />
            ))}
        </div>
    )
}
