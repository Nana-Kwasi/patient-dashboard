// import React from 'react';
// import { Link } from 'react-router-dom';




// const WelcomeScreen = () => {
//   const backgroundStyle = {
//     backgroundImage: 'url("/wel.jpg")', 
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     color: 'white',
//     position: 'relative', 
//   };

//   const footerStyle = {
//     position: 'absolute',
//     bottom: '0',
//     width: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', 
//     color: '#fff',
//     textAlign: 'center',
//     padding: '10px 0',
//     fontSize: '14px',
//   };

//   return (
//     <div style={backgroundStyle}>
//       <h1>Welcome to the Patient Portal</h1>
//       <p>Track your health at your fingertips</p>
//       <Link to="/login">
//         <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>
//       </Link>

     
//       <footer style={footerStyle}>
//         <p>&copy; 2024 HealthCare Inc. | <a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a> | <a href="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a></p>
//         <p>Follow us on:
//           <a href="https://facebook.com" style={{ color: '#fff', marginLeft: '10px', textDecoration: 'none' }}>Facebook</a> |
//           <a href="https://twitter.com" style={{ color: '#fff', marginLeft: '10px', textDecoration: 'none' }}>Twitter</a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default WelcomeScreen;



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
    textAlign: 'center',  // Ensures all text is centered
    padding: '0 20px',    // Adds padding for small devices
  };

  const titleStyle = {
    fontSize: '3rem',      // Responsive title size
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',  // Adds shadow for better readability
  };

  const subtitleStyle = {
    fontSize: '1.5rem',    // Responsive subtitle size
    marginBottom: '30px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.7)',  // Adds shadow for better readability
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',  // Adds a green button color
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',  // Smooth transition effect
  };

  const buttonHoverStyle = {
    backgroundColor: '#218838',  // Darker green on hover
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

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '10px',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={titleStyle}>Welcome to the Patient Portal</h1>
      <p style={subtitleStyle}>Track your health at your fingertips</p>
      <Link to="/login">
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'gray')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          Get Started
        </button>
      </Link>

      <footer style={footerStyle}>
        <p>&copy; 2024 HealthCare Inc. | 
          <Link to="/privacy" style={linkStyle}>Privacy Policy</Link> | 
          <Link to="/terms" style={linkStyle}>Terms of Service</Link>
        </p>
        <p>Follow us on:
          <a href="https://facebook.com" style={linkStyle}>Facebook</a> | 
          <a href="https://twitter.com" style={linkStyle}>Twitter</a>
        </p>
      </footer>
    </div>
  );
};

export default WelcomeScreen;
