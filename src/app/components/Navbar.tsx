import Link from 'next/link'
import React from 'react'
import Logo from "./dojo-logo.png"
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
          <h1>Help Desk</h1>
          <Image src={Logo} alt='Helpdesk logo' width={70} quality={100} placeholder='blur'/>
          <Link href="/">Home</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
  )
}
