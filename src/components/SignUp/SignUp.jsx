import React, { useState } from 'react';
import api from '../../utils/api'; // Adjust the path based on your file structure
import './SignUp.css'; // Import the CSS file here
import { useNavigate } from 'react-router-dom';

function SignupComponent({ signup }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await api.signup(name, email, password);
            console.log('Signup successful:', response);
            navigate('/dashboard'); // Redirect to the dashboard using navigate
        } catch (error) {
            console.error('Signup failed:', error);
            const message = error.response && error.response.data && error.response.data.error
                ? error.response.data.error
                : 'Signup failed. Please try again.';
            setErrorMessage(message);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        className="signup-input"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="signup-input"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="signup-input"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupComponent;
