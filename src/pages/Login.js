import React,{useState,} from 'react'
import { useNavigate } from 'react-router-dom'
function Login({setUser}) {
    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const storedUser  = JSON.parse(localStorage.getItem('userDB'));
        if(storedUser && storedUser.email=== email && storedUser.password===password){
            localStorage.setItem('user',JSON.stringify(storedUser))
            setUser(storedUser)
            navigate('/weather')
        }else{
            alert('invalide credentials')
        }
    }

    return(
        <div className='container mt-5'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type='email' className='form-control my-2' onChange={(e)=>setEmail(e.target.value)}/>
                <input type='password' placeholder='password' className='form-control my-2' onChange={(e)=>setPassword(e.target.value)}/>
                <button className='btn btn-primary'>Login</button>
            </form>

        </div>
    )
  
}

export default Login