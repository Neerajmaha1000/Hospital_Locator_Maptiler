import React from 'react';
import './navbar.css';

export default function Navbar({ isLoggedIn, onLogout }) {
    return (
        <div className="navbar">
            <h1>These is My Map App...</h1>
            {isLoggedIn && (
                <button className="logout-button" onClick={onLogout}>Logout</button>
            )}
        </div>
    );
}
