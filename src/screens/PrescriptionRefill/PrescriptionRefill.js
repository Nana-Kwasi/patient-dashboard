// src/screens/PrescriptionRefill.js
import React from 'react';

// Sample prescription data for an accident patient preparing for surgery
const prescriptionData = [
  {
    category: 'Pre-Surgery Medications',
    prescriptions: [
      { name: 'Paracetamol', dosage: '500 mg, 3x daily', status: 'Delivered' },
      { name: 'Ibuprofen', dosage: '400 mg, as needed for pain', status: 'Delivered' },
      { name: 'Omeprazole', dosage: '20 mg, once daily (before meals)', status: 'Processing' },
    ],
  },
  {
    category: 'Blood Thinners',
    prescriptions: [
      { name: 'Aspirin', dosage: '75 mg, once daily', status: 'Delivered' },
      { name: 'Clopidogrel', dosage: '75 mg, once daily', status: 'Processing' },
    ],
  },
  {
    category: 'Pain Management',
    prescriptions: [
      { name: 'Morphine', dosage: '5 mg, every 4 hours as needed', status: 'Processing' },
      { name: 'Tramadol', dosage: '50 mg, as needed for severe pain', status: 'Delivered' },
    ],
  },
  {
    category: 'Antibiotics (Post-Surgery)',
    prescriptions: [
      { name: 'Ceftriaxone', dosage: '1g, intravenous, twice daily', status: 'Processing' },
      { name: 'Amoxicillin-Clavulanate', dosage: '625 mg, 3x daily', status: 'Processing' },
    ],
  },
  {
    category: 'Anti-Inflammatory Medications',
    prescriptions: [
      { name: 'Diclofenac', dosage: '50 mg, twice daily', status: 'Delivered' },
      { name: 'Prednisone', dosage: '10 mg, once daily', status: 'Processing' },
    ],
  },
];

const PrescriptionRefill = () => {
  const pageStyle = {
    padding: '20px',
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#333',
  };

  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    maxWidth: '800px',
    margin: '20px auto',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '10px',
  };

  const thStyle = {
    backgroundColor: '#3f51b5',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
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
    marginTop: '50px',
  };

  const hospitalLogoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoImageStyle = {
    width: '50px',
    marginRight: '10px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    color: '#3f51b5',
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

      {/* Page Content */}
      <h1 style={headerStyle}>Prescription Refill</h1>
      <p style={{ textAlign: 'center' }}> </p>

      {prescriptionData.map((prescriptionCategory, index) => (
        <div key={index} style={cardStyle}>
          <h2>{prescriptionCategory.category}</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Medication</th>
                <th style={thStyle}>Dosage</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {prescriptionCategory.prescriptions.map((prescription, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{prescription.name}</td>
                  <td style={tdStyle}>{prescription.dosage}</td>
                  <td style={tdStyle}>{prescription.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Footer */}
      <div style={footerStyle}>
        <p>© 2024 Germany Health Care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrescriptionRefill;
