import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [email, setEmail]=useState('');
    const [password , setPassword]= useState('')
    const navigate = useNavigate();
    const handleRegister = (e)=>{
        e.preventDefault();
        localStorage.setItem('userDB',JSON.stringify({email,password}))
        alert('registred succesfully please login');
        navigate('/login');

    }
  return (
    <div className='container mt-5'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input type='email' placeholder='email' className='form-control my-2' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='password' className='form-control my-2' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn btn-success'>
                Register
            </button>
        </form>

    </div>
  )
}

export default Register