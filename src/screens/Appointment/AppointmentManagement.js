// src/screens/AppointmentManagement.js
import React from 'react';

// Sample appointment data
const appointments = [
  {
    id: 1,
    patientName: 'Annie Love',
    // message: 'Regular check-up for hypertension.',
    doctorName: 'Dr. Med Herbert Ackstaller',
    // appointmentDate: '2024-09-15',
    // appointmentTime: '10:30 AM',
    doctorImage: '/med.jpeg',
    expertise: 'Surgeon',
  },
//   {
//     id: 2,
//     patientName: 'Annie Love',
//     message: 'Follow-up on blood test results.',
//     doctorName: 'Dr. Michael Brown',
//     appointmentDate: '2024-09-18',
//     appointmentTime: '12:00 PM',
//     doctorImage: '/doc.jpg',
//     expertise: 'General Medicine',
//   },
//   {
//     id: 3,
//     patientName: 'Annie Love',
//     message: 'Open Reduction and Internal Fixation Surgery.',
//     doctorName: 'Dr. Emma Watson',
//     appointmentDate: '2024-09-22',
//     appointmentTime: '09:00 AM',
//     doctorImage: '/doc.jpg',
//     expertise: 'Orthopedic Surgery',
//   },
];

const AppointmentManagement = () => {
  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    maxWidth: '500px',
    margin: '20px auto',
    textAlign: 'left',
    paddingLeft: '60px', // Shifts the card content to the right
  };

  const doctorImageStyle = {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '20px',
  };

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const cardTextStyle = {
    fontSize: '14px',
    marginBottom: '5px',
  };

  const topBarStyle = {
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const footerStyle = {
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const hospitalLogoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoImageStyle = {
    width: '50px',
    marginRight: '10px',
  };

  const pageStyle = {
    maxHeight: '100vh',
    overflowY: 'auto', // Allow vertical scrolling
    paddingBottom: '80px', // Adjust to ensure footer doesn't overlap
    backgroundImage: 'url("/app.jpg")', // Background image for the entire page
    backgroundSize: 'cover', // Make the background cover the entire screen
    backgroundPosition: 'center',
  };

  return (
    <div style={pageStyle}>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div style={hospitalLogoStyle}>
          <img src="/logo.png" alt="Logo" style={logoImageStyle} />
          <div>
            <h2>Committed to your well-being</h2>
          </div>
        </div>
        <div>
          {/* <p>Call us: +49 123 456 7890</p> */}
        </div>
      </div>

      {/* Appointment Cards */}
      <div style={{ padding: '20px', marginTop: '20px' }}>
        {appointments.map((appointment) => (
          <div key={appointment.id} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <img src={appointment.doctorImage} alt={appointment.doctorName} style={doctorImageStyle} />
              <div>
                <h3>{appointment.doctorName}</h3>
                <p>{appointment.expertise}</p>
              </div>
            </div>
            <div style={cardTextStyle}>
              <strong>Patient:</strong> {appointment.patientName}
            </div>
            <div style={cardTextStyle}>
              {/* <strong>Message:</strong> {appointment.message} */}
            </div>
            <div style={cardTextStyle}>
              {/* <strong>Date:</strong> {appointment.appointmentDate} */}
            </div>
            <div style={cardTextStyle}>
              {/* <strong>Time:</strong> {appointment.appointmentTime} */}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <p>© 2024 Germany Health Care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AppointmentManagement;
