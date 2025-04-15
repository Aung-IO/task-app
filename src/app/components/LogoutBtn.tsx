import React from 'react'
import logout from '../actions/logout'

export default function LogoutBtn() {
  return (

    <form>
      <button className='btn-primary inline' formAction={logout}>Log out</button>
    </form>
  )
}
