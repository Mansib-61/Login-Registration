import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

function Home() {
    const navigate = useNavigate(); // Hook to programmatically navigate

    return (
        <div className="home-container">
            <h1>Welcome to Login & Registration</h1>
            <p>Please register or login to continue.</p>
            <div className="home-buttons">
                <Link to="/login">
                    <button className="home-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="home-button">Register</button>
                </Link>
                <button className="home-button" onClick={() => navigate('/complain')}>
                    Submit a Complaint
                </button>
            </div>
        </div>
    );
}

export default Home;
