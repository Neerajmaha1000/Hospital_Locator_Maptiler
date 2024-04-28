// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import Map from './components/Map.js';
import Login from './components/login.js';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedLoginStatus === 'true');
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <div className="App">
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            {isLoggedIn ? (
                <Map />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
