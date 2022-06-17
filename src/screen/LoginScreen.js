import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';
const LoginScreen = () => {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen-background'>
        <img className='loginScreen-logo'
          src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt='' />
        <button onClick={()=> setSignIn(true)} className='loginScreen-button'>Sign In</button>
        <div className='loginScreen-gradient'></div>
      </div>
      <div className='loginScreen-body'>
        {signIn ? (
          <SignInScreen/>
        ) : (
          <>
          <h1>Unlimited films, TV programes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

          
          <form className='loginScrenForm'>
            <input type='email' placeholder='Email Address' />
            <button onClick={()=> setSignIn(true)} className='loginScreen-Getstart-button'>GET STARTED</button>
          </form>
        </>
        )}
        
      </div>
    </div>
  )
}

export default LoginScreen