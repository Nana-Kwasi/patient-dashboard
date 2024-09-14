// src/screens/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [hospitalID, setHospitalID] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [showCard, setShowCard] = useState(false); // State to show patient card
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isBlocked) {
      setError('You are blocked from logging in. Please try again later.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (hospitalID === 'P2024GER-7934XQZ8') {
        setShowCard(true); // Show the patient details card after successful login
        setError('');
      } else {
        setAttempts((prev) => prev + 1);
        setError('Invalid Hospital ID. Please try again.');
        if (attempts >= 2) {
          setIsBlocked(true);
          setTimeout(() => {
            setAttempts(0);
            setIsBlocked(false);
          }, 60000); // Block for 1 minute
        }
      }
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
  };

  useEffect(() => {
    setError('');
  }, [hospitalID]);

  const cardMessages = [
    "Your privacy is our top priority. We use advanced encryption to keep your data safe.",
    "All personal health information is confidential and accessible only to authorized medical staff.",
    "Our portal complies with Germany's strict GDPR regulations for data protection.",
    "Your health data is never shared with third parties without your explicit consent.",
    "We use multi-factor authentication to ensure secure access to your account.",
    "Regular security audits ensure that our systems remain secure and reliable.",
    "Your session is encrypted with the latest SSL/TLS protocols, ensuring that your data is secure in transit.",
    "We prioritize transparency and provide clear logs of who accessed your health data and when."
  ];

  const cardColors = [
    '#ff7f50', '#ff6347', '#4682b4', '#32cd32', 
    '#8a2be2', '#ffa07a', '#20b2aa', '#dc143c'
  ];

  const renderEducationCards = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {cardMessages.map((message, index) => (
        <div key={index} style={{
          backgroundColor: cardColors[index],
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );

  // Render patient details card
  const renderPatientCard = () => (
    <div style={{
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '300px',
      marginTop: '20px'
    }}>
      <img
        src="/pro.jpeg"
        alt="Patient Profile"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '15px'
        }}
      />
      <h3>Patient Details</h3>
      <p><strong>Name:</strong> Annie Love Mertens</p>
      <p><strong>Hospital ID:</strong> P2024GER-7934XQZ8</p>
      <p><strong>Date of Birth</strong> 02/04/1978</p>
      <p><strong>Condition:</strong>Surgery</p>
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );

  return (
    <div style={{
      backgroundImage: 'url("/login.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      overflowY: 'auto',  // Enable scrolling if needed
      paddingBottom: '20px',
    }}>
      <h2 style={{ marginTop: '60px', color:"#007BFF"}}>Login with Hospital ID</h2>
      
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '300px',
        color: 'white',
      }}>
        <input
          type="text"
          placeholder="Hospital ID"
          value={hospitalID}
          onChange={(e) => setHospitalID(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: 'none',
          }}
          disabled={isBlocked} // Disable input if blocked
        />
        <br />
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            backgroundColor: isLoading ? '#ccc' : '#007BFF',
            color: 'white',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
          disabled={isLoading || isBlocked} // Disable button if loading or blocked
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        {isBlocked && <p style={{ color: 'orange', marginTop: '10px' }}>Too many attempts. Try again in 1 minute.</p>}
      </div>

      {/* Show patient card after successful login */}
      {showCard && renderPatientCard()}

      {/* Educational cards below the login */}
      <h2 style={{ marginTop: '40px' }}> </h2>
      {renderEducationCards()}
    </div>
  );
};

export default LoginScreen;
