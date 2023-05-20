import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EnteryNav from "../Entry/EnteryNav";
import ProtectedRoute from "../ProtectedRoute";
import './login.css'
const Login=({setUser})=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(name,email)
        if(!name||!email) return <ProtectedRoute />;
        setUser({name:name,email:email})
        navigate('/dashboard')
    }
    return(
        <div className="form-section">
            <img src="https://channelmyanmar.org/wp-content/uploads/2018/12/44196111_2314620771886952_165796934605340672_n-4.jpg" alt="" className="entery-logo" />
            <form className="form" onSubmit={handleSubmit}>
                <h5>Login</h5>
                <div className="form-row">
                    <div className="from-row-1">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type='text'className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="form-row-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type='email'className='form-input' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <button type='submit' className="Login-btn">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login
