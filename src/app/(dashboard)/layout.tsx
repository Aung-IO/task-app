import React from 'react'
import Navbar from '../components/Navbar'
import { createClient } from '../utils/supabase/server'

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

   
    return (
        <>
            <Navbar user={data.user} />
            {children}
        </>
    )
}
