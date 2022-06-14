import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      <h1 className='text-center my-5'>Register page</h1>
      <h2 className='text-center'>Your credentials are:</h2>
      <br />
      <h3 className='text-center'>
        <strong>Username:</strong> Admin <br />
        <strong>Password:</strong> 12345
      </h3>

      <p className='text-center'>
        Follow the link below to log in: <br />
        <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default RegisterPage