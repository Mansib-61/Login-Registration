import React, { useState } from 'react';
import axios from 'axios';
import './Complain.css'; // Ensure you import the CSS

function Complain() {
    const [complaint, setComplaint] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the complaint data to the backend
        axios.post('http://localhost:8080/api/complain', { complaint, email })
            .then((response) => {
                alert('Complaint submitted successfully!');
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to submit complaint.');
            });
    };

    return (
        <div className="complain-container">
            <h2>Submit a Complaint</h2>
            <form className="complain-form" onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter your complaint"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    rows="4"
                    cols="50"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Complain;
