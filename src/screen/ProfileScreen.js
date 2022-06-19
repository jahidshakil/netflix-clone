import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../features/counter/firebase'
import Navbar from '../features/counter/Navbar'
import { selectuser } from '../features/counter/userSlice'
import './ProfileScreen.css'
const ProfileScreen = () => {
  const user = useSelector(selectuser);
  return (
      <div className='profileScreen'>
          <Navbar />
          <div className='profileScreen-body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen-Info'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
            
        <div className='profileScreen-details'>
          <h2>{user.email}</h2>
          
            <div className='profileScreen-plan'>
              <h3>Plans</h3>
            <button onClick={()=> auth.signOut() } className='profileScreen-signOut'>Sign Out</button>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileScreen