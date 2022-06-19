import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen';
import { auth } from './features/counter/firebase';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectuser } from './features/counter/userSlice';
import ProfileScreen from './screen/ProfileScreen';

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout());
      }
    })
    return unsSubscribe;
  }, [dispatch]);
    
    return (
    <div className="App">
      <Router>
        {!user ? (
            <LoginScreen/>
          ) :
          (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />}/>     
            <Route exact path="/" element={<HomeScreen/>}/>
      
        </Routes>
          )
        }
        
      </Router>
    </div>
  );
}

export default App;
