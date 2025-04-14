"use client"
import { useState } from 'react'
import { AuthFormProps } from '../types/auth';


export default function AuthForm({ handleSubmit }: AuthFormProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit({ e, email, password });
    };

    return (
        <form >
            <label htmlFor="email">
                <span>Email :</span>
                <input id='emial' name="email" type="email" required onChange={e => setEmail(e.target.value)} value={email} />
            </label>

            <label htmlFor="password">
                <span>Password :</span>
                <input id='password' name='password' type="password" required onChange={e => setPassword(e.target.value)} value={password} />
            </label>

            <button className='btn-primary'>Submit</button>
        </form>
    )
}
