"use client"
import React, { useState } from 'react'
import AuthForm from '../AuthForm'
import { AuthProps } from '@/app/types/auth'
import { useRouter } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/server'

export default function SignUp() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async ({ e, email, password }: AuthProps) => {
    e.preventDefault()
    setError('')

    const supabase = await createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/verify')
    }
  }
  return (
    <main>
      <h2 className='text-center'>Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && (
        <div className='error'>{error}</div>
      )}
    </main>
  )
}
