import React from 'react'
import Post from './Post'
export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "Luka Watt",
            userImg: "https://xsgames.co/randomusers/avatar.php?g=male",
            img: "https://images.unsplash.com/photo-1684190709707-a5be73d0959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "A Candid Post"
        },
        {
            id: "2",
            username: "James Watt",
            userImg: "https://xsgames.co/randomusers/avatar.php?g=male",
            img: "https://images.unsplash.com/photo-1680775709856-cda66f5f9c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "A Candid Post"
        }
    ]
    return (
        <div>
            {posts.map((post, id) => (
                <Post key={id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
            ))}
        </div>
    )
}
