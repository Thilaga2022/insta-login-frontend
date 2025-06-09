import React from 'react'

const Success = () => {
  const user = localStorage.getItem('username')
  return (
    <div>
      <h1>Login Successfull...!</h1>
      <p>Welcome {user} ... 🩷</p>
    </div>
  )
}

export default Success
