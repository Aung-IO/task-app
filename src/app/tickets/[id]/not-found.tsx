import Link from 'next/link'
import React from 'react'

export default function NotFoundSingle() {
    return (
        <main className='text-center'>
            <h2 className='text-3xl'>We hit a brick wall.</h2>
            <p>We couldn't find the page you're looking for.</p>
            <p>Go back to <Link href={'/tickets'}>Tickets</Link></p>
        </main>
    )
}
