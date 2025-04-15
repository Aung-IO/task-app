import Link from 'next/link'
import React from 'react'
import { createClient } from '../utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/')
    }
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
