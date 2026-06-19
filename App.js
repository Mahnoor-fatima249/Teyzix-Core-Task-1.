import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Services from './pages/services'; 
import CreateService from './pages/CreateService';

// Safe Protected Route Component taake bagair login koi dashboard na khol sakay
const ProtectedRoute = ({ children }) => {
    const { user, loading } = React.useContext(AuthContext);
    if (loading) return <div className="text-center py-20 font-bold">Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;
    return children;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen bg-gray-50 text-gray-900">
                    {/* Navbar wapas add ho gaya yahan */}
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate to="/services" replace />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/services" element={<Services />} />
                        
                        <Route path="/create-service" element={
                            <ProtectedRoute>
                                <CreateService />
                            </ProtectedRoute>
                        } />
                        
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;