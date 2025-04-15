import React from 'react'
import Navbar from '../components/Navbar'
import { createClient } from '../utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
        redirect('/login')
    }

    return (
        <>
            <Navbar user={data.user} />
            {children}
        </>
    )
}
