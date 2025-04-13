import { TicketProps } from '@/app/types/ticket'
import React from 'react'
import { notFound } from 'next/navigation'

export const dynamicParams = true

export async function generateMetadata({params} : {params : any}) {
    const id = params.id
    const res = await fetch(`http://localhost:4000/tickets/${id}`)
    const ticket = await res.json()
    return {
        title : `KAP helpdesk | ${ticket.title}`
    }
}

export async function generateStaticParams() {
    
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()

    return tickets.map((ticket: TicketProps) => ({
        id: ticket.id
    }))
}

async function getSingleTicket(id: number): Promise<TicketProps> {
    // delay
    await new Promise(resolve => setTimeout(resolve,3000))
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: { revalidate: 30 }
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export default async function TicketDetail({ params }: { params: any }) {
    const ticket: TicketProps = await getSingleTicket(params.id)
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className='card'>
                <h2>{ticket.title}</h2>
                <small>Created by - {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
