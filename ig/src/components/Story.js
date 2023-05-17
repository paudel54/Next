import React from 'react'

export default function Story({ username, img }) {

    return (
        <div>
            {/* {JSON.stringify(username)} */}
            <img src={img} alt={username} />
            <p>{username}</p>
        </div>
    )
}
