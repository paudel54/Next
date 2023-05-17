import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
export default function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
            <section className='md:col-span-2'>
                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />
            </section>
            <section className='hidden md:col-span-1 md:inline-grid'>
                {/* Mini Profile */}

                {/* Suggestions */}
            </section>
        </main>
    )
}
