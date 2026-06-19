import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Client');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
            if (res.data) {
                alert('Registration Successful! Please login.');
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', fontFamily: 'sans-serif' }}>
            <div style={{ border: '1px solid #e5e7eb', padding: '30px', borderRadius: '16px', backgroundColor: '#fff', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '24px', color: '#111827' }}>Create Account</h2>
                {error && <div style={{ color: '#b91c1c', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>I want to join as a:</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}>
                            <option value="Client">Client (Buy Services)</option>
                            <option value="Service Provider">Service Provider (Sell Services)</option>
                        </select>
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Register</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px', color: '#4b5563' }}>
                    Already have an account? <Link to="/login" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;