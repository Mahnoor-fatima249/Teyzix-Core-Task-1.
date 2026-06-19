import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Website Development',
        price: '',
        deliveryTime: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // 1. Token nikalen
        const token = localStorage.getItem('token');
        if (!token) {
            setError('You must be logged in to create a service.');
            return;
        }

        try {
            // 2. Data clean karein aur headers ke sath post karein
            const res = await axios.post(
                'http://localhost:5000/api/services',
                {
                    title: formData.title,
                    description: formData.description,
                    category: formData.category,
                    price: formData.price.toString(), // Database schema ke mutabiq string text formatting
                    deliveryTime: formData.deliveryTime
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Token authorization inject karein
                    }
                }
            );

            if (res.data.success) {
                setSuccess('Service Listed Successfully!');
                setTimeout(() => navigate('/services'), 2000);
            }
        } catch (err) {
            console.error("Publish Error:", err.response?.data);
            setError(err.response?.data?.message || 'Server standard mismatch error (500).');
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', border: '1px solid #e5e7eb', borderRadius: '16px', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
            <h2 style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '24px' }}>Create a New Service Gig</h2>
            
            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
            {success && <div style={{ color: 'green', marginBottom: '15px' }}>{success}</div>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Service Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile Apps">Mobile Apps</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', minHeight: '100px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Price (USD)</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Delivery Time</label>
                    <input type="text" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Publish Service Gig</button>
            </form>
        </div>
    );
};

export default CreateService;