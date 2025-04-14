import Link from 'next/link'
import React from 'react'
import Logo from "./dojo-logo.png"
import Image from 'next/image'
import { UserProps } from '../types/user'



export default async function Navbar({ user }: UserProps) {

  return (
    <nav>
      <h1>KAP Help Desk</h1>
      <Image src={Logo} alt='Helpdesk logo' width={70} quality={100} placeholder='blur' />
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  )
}
