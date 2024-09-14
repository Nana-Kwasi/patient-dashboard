import React from 'react';
import { Link } from 'react-router-dom';




const WelcomeScreen = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/wel.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    position: 'relative', 
  };

  const footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '14px',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Welcome to the Patient Portal</h1>
      <p>Track your health at your fingertips</p>
      <Link to="/login">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>
      </Link>

     
      <footer style={footerStyle}>
        <p>&copy; 2024 HealthCare Inc. | <a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a> | <a href="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a></p>
        <p>Follow us on:
          <a href="https://facebook.com" style={{ color: '#fff', marginLeft: '10px', textDecoration: 'none' }}>Facebook</a> |
          <a href="https://twitter.com" style={{ color: '#fff', marginLeft: '10px', textDecoration: 'none' }}>Twitter</a>
        </p>
      </footer>
    </div>
  );
};

export default WelcomeScreen;

