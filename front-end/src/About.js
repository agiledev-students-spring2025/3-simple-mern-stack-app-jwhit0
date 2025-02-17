import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    
    const [about, setAbout] = useState(null);
    
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                // Fetch About Us data 
                const response = await axios.get('http://localhost:5002/about');
                setAbout(response.data); 
            } catch (err) {
                console.error("Error fetching About Us data:", err);
                setError("Failed to load About Us information.");
            }
        };

        fetchAboutData();
    }, []);

    // If there's an error, display an error message
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    // If still loading, display a loading message
    if (!about) return <p>Loading...</p>;

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>About Us</h1>
            {/* Display image */}
            <img src={about.photoUrl} alt="Profile" style={{ width: "200px", borderRadius: "50%" }} />
            {/* Display about data */}
            <p>{about.bio}</p>
        </div>
    );
};

export default About;
