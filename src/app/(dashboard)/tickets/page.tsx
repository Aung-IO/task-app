import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "KAP Helpdesk | Tickets",
  description: "Generated by Technoverse",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  )
}
