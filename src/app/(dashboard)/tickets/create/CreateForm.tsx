"use client"
import Error from 'next/error'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function CreateForm() {
  const router = useRouter()
  // title , body, priority, isLoading
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState("low")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const newTicket = {
      title, body, priority,
    }
    const res = await fetch('api/tickets', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket)
    })

    const json = await res.json()
    
    if(json.error){
      console.log("Error create ticket");
      
    }

    if(json.data) {
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <label>
        <span>Title :</span>
        <input
          required
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body :</span>
        <textarea
          required
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority :</span>
        <select
          onChange={e => setPriority(e.target.value)}
          value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Meidum Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>

      <button className='btn-primary' disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  )
}
