import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Login from'./pages/Login.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register.js';
import Weather from './pages/Weather.js';
import ProtectedRoute from './components/ProtectedRoute.js';
function App() {
  const [user, setUser]= useState(null)
  useEffect(()=>{
    const stored  = localStorage.getItem('user')
    if(stored) setUser(JSON.parse(stored))
  },[])
  
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Navigate to="/weather" />}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/weather'
        element={
          <ProtectedRoute user={user}>
            <Weather user={user} />
          </ProtectedRoute>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
