import React from 'react'
import Navbar from '../features/counter/Navbar'
import './ProfileScreen.css'
const ProfileScreen = () => {
  return (
      <div className='profileScreen'>
          <Navbar />
          <div className='profileScreen-body'>
              <h1>Edit Profile</h1>
              <div className='profileScreen-Info'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
              </div>
          </div>
    </div>
  )
}

export default ProfileScreen