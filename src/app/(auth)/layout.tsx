import Link from 'next/link'
import React from 'react'

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <nav>
                <h1>KAP Help Desk</h1>
                <Link href="/signup">Sign up</Link>
                <Link href="/login">Log in</Link>
            </nav>
            {children}
        </>

    )
}
