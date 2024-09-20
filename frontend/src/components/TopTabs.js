import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work'; // New icon for Jobs
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // New icon for Running
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useDispatch } from 'react-redux';
import { logout } from '../Utility/Redux/Slices/AuthSlice';

const TopTabs = () => {
    const [value, setValue] = useState(0); // State to manage selected tab
    const dispatch = useDispatch();
    const navigate = useNavigate(); // To programmatically navigate

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLogout = () => {
        // Clear localStorage and logout
        localStorage.clear();
        dispatch(logout());

        // Reset the tab to Home after logging out
        setValue(0);

        // Redirect to the login page or home page after logout
        navigate('/');
    };

    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, link: '/home' },
        { text: 'Builds', icon:<BuildCircleIcon/>, link: '/Versions' },
        { text: 'Pools', icon: <LayersIcon/>, link: '/PoolSelection' },
        { text: 'Jobs', icon: <WorkIcon />, link: '/jobs' },
        { text: 'Running', icon: <PlayArrowIcon />, link: '/jobs/running' },
        { text: 'Reports', icon: <AssessmentIcon />, link: '/dashboard' },
        { text: 'Logout', icon: <LogoutIcon />, link: '/' },
    ];

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #0076CE, #005A99)', color: '#ffffff', boxShadow: '0px 2px 5px rgba(0,0,0,0.2)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="navigation tabs" 
                    sx={{ color: '#ffffff', flexWrap: 'wrap' }}
                >
                    {menuItems.map((item, index) => (
                        <Tab 
                            key={index}
                            label={
                                <>
                                    {item.icon}
                                    <Box sx={{ ml: 1 }}>{item.text}</Box>
                                </>
                            } 
                            component={Link} 
                            to={item.link} 
                            aria-label={item.text}
                            sx={{ color: '#ffffff' }}
                            onClick={() => {
                                if (item.text === 'Logout') {
                                    handleLogout();
                                } else {
                                    setValue(index); // Set the tab index for other items
                                }
                            }}
                        />
                    ))}
                </Tabs>
            </Box>
        </AppBar>
    );
}

export default TopTabs;
