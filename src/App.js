import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen';

function App() {
  const user = null;
    
    return (
    <div className="App">
      <Router>
        {!user ? (
            <LoginScreen/>
          ) : (
            <Routes>
          <Route exact path='/' element={<HomeScreen/>}>
          </Route>
        </Routes>
          )
        }
        
      </Router>
    </div>
  );
}

export default App;
