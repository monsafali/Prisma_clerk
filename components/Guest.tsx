import { SignInButton } from "@clerk/nextjs"



const Guest = () => {
  return (
      <div className='guest'>
          <h1>welcome</h1>
          <p>please sigin in the manage your transactions</p>
          <SignInButton />
    </div>
  )
}

export default Guest