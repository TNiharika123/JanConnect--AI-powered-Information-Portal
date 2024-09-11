import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // Add state for error message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make POST request to the backend login route
            const result = await axios.post("http://localhost:5000/api/login", { email, password });
            navigate("/");
            
            
        } catch (err) {
            console.error(err);
            setError('An unexpected error occurred');
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter Email' 
                            autoComplete='off' 
                            name='email' 
                            className='form-input' 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            placeholder='Enter Password' 
                            name='password' 
                            className='form-input' 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Login
                    </button>
                    {error && <p className="error-message">{error}</p>} {/* Display error message */}
                </form>
                <p className="register-prompt">Don't have an account?</p>
                <Link to="/register" className="register-link">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
