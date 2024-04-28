import React, { useEffect } from "react";
import './login.css'; 
import logo from './d4858fd1d4664a86bcf06733e56608d7.jpg'

const Login = ({ onLogin }) => {
    function handleCallbackResponse(response){
        console.log("Encoded JWT token :" +  response.credential);
        onLogin();
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "290142301749-as1ocroam3u913j308co0gr545pnud2i.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    return (
        <div className="login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Welcome to My Map App!</h2>
            <p>Please sign in to access the full features of our app.</p>
            <div id="signInDiv"></div>
        </div>
    );
}

export default Login;
