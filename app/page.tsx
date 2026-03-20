import AddTransaction from '@/components/AddTransaction';
import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const HomePage = async () => {
  const user = await currentUser()
  
  if (!user) return <Guest />
  

  return (
    <main>
      <h1>Welcome {user?.firstName} {user?.lastName}</h1>
      <AddTransaction/>
    </main>

  )
}

export default HomePage;