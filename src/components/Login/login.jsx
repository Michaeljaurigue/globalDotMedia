import React, { useState } from 'react';
import api from '../../utils/api'; // Adjust the path based on your file structure
import './login.css'; // Import the CSS file here
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const response = await api.login(email, password);
            console.log('Login successful:', response);
            // Store the token, for example, in localStorage (consider security implications)
            localStorage.setItem('token', response.token);
            // Redirect to the dashboard or home page
            navigate('/dashboard'); // Adjust the route as necessary
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure below
        }
    };

    return (
        <div className="login__container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login__form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button className="button" type="submit">Log In</button>

                </div>
            </form>
        </div>
    );
}

export default LoginComponent;
