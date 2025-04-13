import React from 'react'
import { TicketProps } from '../types/ticket'
import Link from 'next/link'

async function getTickets() {
    // delay
    await new Promise( resolve => setTimeout(resolve,3000))
    
    const res = await fetch("http://localhost:4000/tickets", {
        cache: 'no-store'
    })
    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()
    return (
        <>
            {
                tickets.map((ticket: TicketProps) => (
                    <div key={ticket.id} className='card my-5'>
                      <Link href={`tickets/${ticket.id}`}>
                      <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 198)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                      </Link>
                    </div>
                ))
            }
            {
                tickets.length === 0 && (
                    <p className='text-center'>There is no open tickets, yay!</p>
                )
            }
        </>
    )
}
