import React, { useContext, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./signup.css";
import LocationContext from '../context/LocationContext';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

    const { setLocation } = useContext(LocationContext); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocation(city); 
        try {
        
            
            navigate("/interest");
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || 'An unexpected error occurred');
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="signup-title">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input 
                            type="text" 
                            placeholder='Enter Name' 
                            autoComplete='off' 
                            name='name' 
                            className='form-input'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
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
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            placeholder='Enter Password' 
                            name='password' 
                            className='form-input' 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="city-state-group">
                        <div className="form-group">
                            <label htmlFor="city" className="form-label"><strong>City</strong></label>
                            <input 
                                type="text" 
                                placeholder='Enter City' 
                                id="city"
                                name='city' 
                                value={city}
                                className='form-input' 
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state" className="form-label"><strong>State</strong></label>
                            <input 
                                type="text" 
                                placeholder='Enter State' 
                                name='state' 
                                className='form-input' 
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Sign Up
                    </button>
                    {error && <p className="error-message">{error}</p>} {/* Display error message */}
                </form>
                <p className="login-prompt">Already have an account?</p>
                <Link to="/login" className="login-link">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
