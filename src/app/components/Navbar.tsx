import Link from 'next/link'
import React from 'react'
import Logo from "./dojo-logo.png"
import Image from 'next/image'
import { UserProps } from '../types/user'
import LogoutBtn from './LogoutBtn'



export default async function Navbar({ user }: UserProps) {

  return (
    <nav>
      <h1>KAP Help Desk</h1>
      <Image src={Logo} alt='Helpdesk logo' width={70} quality={100} placeholder='blur' />
      <Link href="/">Home</Link>
      <Link href="/tickets" className='mr-auto'>Tickets</Link>
      {user && <span>Hello, {user.email?.split('@')[0]}</span>}

      {user && <LogoutBtn/>}
    </nav>
  )
}
