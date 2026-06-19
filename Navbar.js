import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '0 20px', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidtH: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
                
                {/* Logo */}
                <Link to="/services" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: '900', color: '#4f46e5', letterSpacing: '-0.05em' }}>
                    TEYZIX CORE
                </Link>

                {/* Navigation Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <Link to="/services" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600', fontSize: '15px' }}>
                        Browse Services
                    </Link>

                    {/* Agar USER LOGGED IN hai toh yeh buttons dikhao */}
                    {user ? (
                        <>
                            <Link to="/dashboard" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600', fontSize: '15px' }}>
                                Dashboard
                            </Link>
                            
                            {/* Create Gig / Publish Service Button */}
                            <Link to="/create-service" style={{ textDecoration: 'none', backgroundColor: '#4f46e5', color: '#ffffff', fontWeight: '700', fontSize: '14px', padding: '10px 18px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)' }}>
                                Create Service Gig +
                            </Link>

                            <button onClick={handleLogout} style={{ border: 'none', backgroundColor: 'transparent', color: '#ef4444', fontWeight: '700', fontSize: '15px', cursor: 'pointer' }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Agar USER LOGGED IN NAHI hai toh yeh dikhao */}
                            <Link to="/login" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600', fontSize: '15px' }}>
                                Sign In
                            </Link>
                            <Link to="/register" style={{ textDecoration: 'none', backgroundColor: '#f3f4f6', color: '#1f2937', fontWeight: '700', fontSize: '14px', padding: '10px 18px', borderRadius: '10px' }}>
                                Join Now
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;