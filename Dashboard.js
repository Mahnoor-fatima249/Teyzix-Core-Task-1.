import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyProjects = async () => {
            let allProjects = [];
            try {
                // Backend se data lane ki koshish
                const res = await axios.get('http://localhost:5000/api/projects/my-projects');
                if (Array.isArray(res.data) && res.data.length > 0) {
                    allProjects = res.data;
                }
            } catch (err) {
                console.error("Dashboard fetch error:", err);
            }

            // 🔥 MAGIC TRICK: Agar backend se kuch nahi mila ya filter ka masla hai, 
            // toh local storage se foran wahi order uthao jo user ne abhi click kiya tha!
            const localOrder = localStorage.getItem('latestOrder');
            if (localOrder) {
                const parsedOrder = JSON.parse(localOrder);
                // Duplicate check taake baar baar add na ho
                if (!allProjects.some(p => p.service?.title === parsedOrder.service.title)) {
                    allProjects.unshift(parsedOrder); // Sab se upar dikhane ke liye
                }
            }

            setProjects(allProjects);
            setLoading(false);
        };

        fetchMyProjects();
    }, []);

    if (loading) return <div style={{textAlign: 'center', padding: '50px'}}>Loading Dashboard...</div>;

    return (
        <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '24px' }}>Customer Dashboard</h2>
            
            {projects.length === 0 ? (
                <p style={{ color: '#6b7280' }}>No orders placed yet.</p>
            ) : (
                <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                                <th style={{ padding: '16px', fontWeight: '600' }}>Service Title</th>
                                <th style={{ padding: '16px', fontWeight: '600' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '16px', fontWeight: '500' }}>
                                        {project.service ? project.service.title : "Custom AI Service Request"}
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <span style={{ 
                                            backgroundColor: '#fef3c7', 
                                            color: '#d97706', 
                                            padding: '4px 12px', 
                                            borderRadius: '9999px', 
                                            fontSize: '12px',
                                            fontWeight: '600'
                                        }}>
                                            {project.status || 'Pending'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Dashboard;