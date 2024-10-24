import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css'; // Import the CSS file

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/auth/login', formData)
            .then(res => {
                alert('Login successful');
                navigate('/'); // Redirect to the Home page
            })
            .catch(err => alert('Login failed'));
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br/>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
