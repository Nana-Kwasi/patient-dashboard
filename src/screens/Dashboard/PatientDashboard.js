import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

// Sample data for graphs starting from August 26th to the current month
const dataBills = [
  { name: 'Aug 26', total: 1140, outstanding: 500 },  // August outstanding
  { name: 'Sep', total: 960, outstanding: 407 },       // September outstanding
];

const totalBill = dataBills.reduce((sum, entry) => sum + entry.total, 0);
const outstandingBill = dataBills.reduce((sum, entry) => sum + entry.outstanding, 0);

const dataTreatments = [
  { name: 'Vital Signs Monitorin', response: 85 },
  { name: 'Neurological Examination', response: 40 },
  { name: 'Imaging', response: 62 },
  { name: 'Life Support', response: 35 },
  // { name: 'ORIF Surgery', response: 0.1 },

];

const dataDaysSpent = [
  { name: 'Week 1', days: 5 },
  { name: 'Week 2', days: 7 },
  { name: 'Week 3', days: 4 },
  { name: 'Week 4', days: 6 },
];

const PatientDashboard = () => {
  const dashboardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
  };

  const imageLinkStyle = {
    display: 'block',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    marginTop: '10px',
    fontSize: '20px',
    color: 'white',
  };

  const profileContainerStyle = {
    textAlign: 'right',
    marginBottom: '30px',
    padding: '0 50px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // To adjust the gap between profile image and name
  };

  const profileImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  };

  const profileNameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
  };

  const containerStyle = {
    backgroundImage: 'url(/d1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const additionalTextStyle = {
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      {/* Top Bar with Logo and Hospital Name */}
      <div style={topBarStyle}>
        <div style={logoStyle}>
          <img src="/logo.png" alt="Hospital Logo" style={logoImageStyle} />
          <span style={hospitalNameStyle}>Annie's Dashboard</span>
        </div>
        <span style={additionalTextStyle}>Providing Care with Compassion</span>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {/* Profile Section */}
        <div style={profileContainerStyle}>
          <img src="/pro.jpeg" alt="Profile" style={profileImageStyle} />
          <p style={profileNameStyle}>Annie Love</p>
        </div>

        <div style={dashboardContainerStyle}>
          {/* Manage Appointments */}
          <div style={imageLinkStyle}>
            <Link to="/appointments">
              <img src="/online.png" alt="Manage Appointments" style={imageStyle} />
            </Link>
            <div style={labelStyle}>Appointments</div>
          </div>

          {/* View Medical Records */}
          <div style={imageLinkStyle}>
            <Link to="/medical-records">
              <img src="/health-report.png" alt="View Medical Records" style={imageStyle} />
            </Link>
            <div style={labelStyle}>Medical Records</div>
          </div>

          {/* Request Prescription Refills */}
          <div style={imageLinkStyle}>
            <Link to="/prescriptions">
              <img src="/online-pharmacy.png" alt="Request Prescription Refills" style={imageStyle} />
            </Link>
            <div style={labelStyle}>Prescription Refills</div>
          </div>

          {/* View Billing Information */}
          <div style={imageLinkStyle}>
            <Link to="/billing">
              <img src="/payment.png" alt="View Billing Information" style={imageStyle} />
            </Link>
            <div style={labelStyle}>Billing Information</div>
          </div>

          {/* Health Monitoring Tools */}
          <div style={imageLinkStyle}>
            <Link to="/health-monitoring">
              <img src="/diagnosis.png" alt="Health Monitoring Tools" style={imageStyle} />
            </Link>
            <div style={labelStyle}>Health Monitoring Tools</div>
          </div>
        </div>

        {/* Graphs Section */}
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ color: 'white' }}> </h2>

          {/* Graph for Total and Outstanding Bills */}
          <div>
            <h3 style={{ color: 'white' }}>Billing Information</h3>
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
            <div style={{ color: 'white', marginTop: '10px' }}>
              <p>Total Bill: €{totalBill}</p>
              <p>Outstanding Bill: €{outstandingBill}</p>
            </div>
          </div>

          {/* Graph for Treatments and Response */}
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
          </div>

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
    </div>
  );
};

export default PatientDashboard;
