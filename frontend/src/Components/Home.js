import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../Utility/Redux/Slices/AuthSlice';

const Home = () => {

    const user = useSelector(getUser);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f0f4f8",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "800px",
            margin: "50px auto"
        }}>
            {/* Optional image */}
            {/* <img 
                src='https://th.bing.com/th/id/OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa?rs=1&pid=ImgDetMain' 
                style={{ height: "120px", width: "120px", borderRadius: "50%", marginBottom: "20px" }} 
                alt='' 
            /> */}
            <h1 style={{ 
                fontSize: "2rem", 
                fontWeight: "bold", 
                color: "#0076CE", 
                marginBottom: "15px" 
            }}>
                Welcome, {user?.user?.username}
            </h1>
            <p style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#333"
            }}>
                The <strong>DevQaLink</strong> project is a collaborative platform designed to bridge the gap between developers and QA testers. 
                It facilitates seamless communication and collaboration by allowing developers to upload and manage build versions of their software. 
                At the same time, QA testers can create, manage, and execute tests for those builds. This system streamlines the development and testing 
                process, ensuring that both teams can work together efficiently to identify issues, track progress, and ensure the quality of the final product. 
                <strong>DevQaLink</strong> enhances productivity and communication between these crucial roles in software development.
            </p>
        </div>
    );
};

export default Home;
