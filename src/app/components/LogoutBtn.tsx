import React from 'react'


export default function LogoutBtn() {
  return (

    <form id='logout' action="/api/auth/signout" method="post">
      <button className="btn-primary" type="submit">
        Sign out
      </button>
    </form>
  )
}
