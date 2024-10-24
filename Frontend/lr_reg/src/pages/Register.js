import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Register.css'; // Import the CSS file

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/auth/register', formData)
            .then(res => {
                alert('Registration successful');
                navigate('/login'); // Redirect to the login page
            })
            .catch(err => alert('Registration failed'));
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} /><br/>
                <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} /><br/>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br/>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
}

export default Register;
