import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

const dataBills = [
  { name: 'Aug', total: 1140, outstanding: 500 }, 
  { name: 'Sep', total: 960, outstanding: 407 },    
];

const totalBill = dataBills.reduce((sum, entry) => sum + entry.total, 0);
const outstandingBill = dataBills.reduce((sum, entry) => sum + entry.outstanding, 0);

const dataTreatments = [
  { name: 'Vital Signs Monitoring', response: 85 },
  { name: 'Neurological Examination', response: 40 },
  { name: 'Imaging', response: 62 },
  { name: 'Life Support', response: 35 },
];

const dataDaysSpent = [
  { name: 'Week 1', days: 5 },
  { name: 'Week 2', days: 7 },
  { name: 'Week 3', days: 4 },
  { name: 'Week 4', days: 6 },
];

const PatientDashboard = () => {
  const containerStyle = {
    backgroundImage: 'url(/db2.jpg)',  // Adjusted to reflect the attached image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
  };

  const topBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const logoImageStyle = {
    width: '50px',
    height: '50px',
  };

  const hospitalNameStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // To adjust the gap between profile image and name
  };

  const profileImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  };

  const profileNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '50px',
    marginBottom: '50px',
  };

  const cardStyle = {
    backgroundColor: 'green',  // Light background
    padding: '20px',
    borderRadius: '10px',
    color: '#333',
    flex: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    textAlign: 'left',
  };

  const cardVitalStyle = {
    backgroundColor: '#E3F2FD',  // Light blue background for vitals
    padding: '20px',
    borderRadius: '10px',
    color: '#333',
    flex: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    textAlign: 'left',
  };

  const cardHeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: 'white',
    
  };
  const cardHeaderStyle1 = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: 'black',
    
  };

  return (
    <div style={containerStyle}>
      {/* Top Bar with Logo, Hospital Name, and Profile Section */}
      <div style={topBarStyle}>
        <div style={logoStyle}>
          <img src="/logo.png" alt="Hospital Logo" style={logoImageStyle} />
          <span style={hospitalNameStyle}>Annie's Dashboard</span>
        </div>

        <div style={navLinksStyle}>
          <Link to="/medical-records" style={navLinkStyle}>Medical Records</Link>
          <Link to="/billing" style={navLinkStyle}>Billing Info</Link>
          <Link to="/prescriptions" style={navLinkStyle}>Prescription Refills</Link>
          <Link to="/health-monitoring" style={navLinkStyle}>Health Monitoring</Link>
        </div>

        <div style={profileContainerStyle}>
          <img src="/pro.jpeg" alt="Profile" style={profileImageStyle} />
          <span style={profileNameStyle}>Annie Love</span>
        </div>
      </div>

      {/* Cards for Current Status and Current Vitals */}
      <div style={cardsContainerStyle}>
        {/* Card for Current Status */}
        <div style={cardStyle}>
          <h3 style={cardHeaderStyle}>Current Status</h3>
          <ul style={{ color: 'white',  }}>
            <li>Patient is alert, oriented to time, place, and person, and fully breathing independently.</li>
            <li>Neurological function shows significant improvement with no signs of seizures or brain swelling.</li>
            <li>Patient is ambulatory with assistance and continues to work with physical and occupational therapists.</li>
            <li>Current medications include oral pain management (Acetaminophen 500 mg, as needed) and continued physical therapy for motor recovery.</li>
            <li>Awaiting surgery for left femur fracture.</li>
          </ul>
        </div>

        {/* Card for Current Vitals */}
        <div style={cardVitalStyle}>
          <h3 style={cardHeaderStyle1}>Current Vitals</h3>
          <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
          <p><strong>Heart Rate:</strong> 72 bpm</p>
          <p><strong>Respiratory Rate:</strong> 16 breaths/min</p>
          <p><strong>Body Temperature:</strong> 36.8°C</p>
        </div>
      </div>

      {/* Graphs Section */}
      <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '80px' , }}>
          <h3 style={{ color: 'white' }}>Response to Treatment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataTreatments}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Bar dataKey="response" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Graph for Total and Outstanding Bills */}
        <div style={{ marginTop: '80px' , }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
              <Bar dataKey="outstanding" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ color: 'white', marginTop: '10px', fontSize: "20px" }}>
            <p>Total Bill: €{totalBill}</p>
            <p>Outstanding Balance: €{outstandingBill}</p>
          </div>
        </div>

        {/* Graph for Treatments and Response
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ color: 'white' }}>Response to Treatment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataTreatments}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Bar dataKey="response" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}

        {/* Graph for Days Spent in Hospital */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ color: 'white' }}>Days Spent in Hospital</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataDaysSpent}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="days" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
