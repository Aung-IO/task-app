import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit quisquam ratione odio iure sint! Labore veniam adipisci cum odio, voluptate nam dolor, consequatur velit facilis eos voluptas nemo distinctio.</p>

      <div className='flex justify-center my-8'>
        <Link href={"/tickets"}>
          <button className='btn-primary'>View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className='card'>
        <h3>New member of web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas velit ipsa aliquid temporibus corrupti, rem, sapiente tempora ullam incidunt molestias, suscipit est accusamus maiores deserunt beatae tempore nostrum at.</p>

      </div>
      <div className='card'>
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid laborum tenetur, magni quibusdam perspiciatis illum error cumque harum? Incidunt quod ipsa quae mollitia, impedit veritatis veniam voluptatibus reiciendis recusandae.</p>
      </div>
    </main>
  )
}
