import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const result = await login(email, password);
        if (result && result.success) {
            navigate('/services');
        } else {
            setError(result?.message || 'Invalid email or password');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', fontFamily: 'sans-serif' }}>
            <div style={{ border: '1px solid #e5e7eb', padding: '30px', borderRadius: '16px', backgroundColor: '#fff', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '24px', color: '#111827' }}>Login to Teyzix</h2>
                {error && <div style={{ color: '#b91c1c', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Sign In</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px', color: '#4b5563' }}>
                    Don't have an account? <Link to="/register" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;