import React from 'react'
import './SignInScreen.css'

const SignInScreen = () => {
  return (
      <div className='signInScreen'>
          <form>
              <h1>Sign In</h1>
              <input placeholder='Email' type='email' />
              <input placeholder='Password' type='password' />
              <button type='submit'>Sign In</button>
              <h4><span className='signUpScreen-gray'>New to Netflix?</span>
                  <span className='signupScreen-link'>Sign Up now</span>
              </h4>
          </form>
    </div>
  )
}

export default SignInScreen