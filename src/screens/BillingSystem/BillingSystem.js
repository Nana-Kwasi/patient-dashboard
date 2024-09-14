import React from 'react';

const billingData = [
  {
    category: 'Pre-Surgery Medications',
    items: [
      { name: 'Paracetamol', dosage: '500 mg, 3x daily', price: 100, status: 'Delivered' },
      { name: 'Ibuprofen', dosage: '400 mg, as needed for pain', price: 150, status: 'Delivered' },
      { name: 'Omeprazole', dosage: '20 mg, once daily (before meals)', price: 200, status: 'Processing' },
    ],
  },
  {
    category: 'Blood Thinners',
    items: [
      { name: 'Aspirin', dosage: '75 mg, once daily', price: 100, status: 'Delivered' },
      { name: 'Clopidogrel', dosage: '75 mg, once daily', price: 150, status: 'Processing' },
    ],
  },
  {
    category: 'Lab Test Results',
    items: [
      { name: 'Complete Blood Count (CBC)', price: 250, details: 'Measures red and white blood cells' },
      { name: 'Liver Function Test', price: 200, details: 'Checks liver enzymes' },
      { name: 'Blood Sugar Level', price: 150, details: 'Checks glucose levels' },
      { name: 'Cholesterol Test', price: 150, details: 'Measures LDL, HDL, and triglycerides' },
      { name: 'Renal Function Test', price: 200, details: 'Assesses kidney function' },
      { name: 'Electrolyte Panel', price: 150, details: 'Sodium, potassium, chloride levels' },
    ],
  },
  {
    category: 'Vital Signs',
    items: [
      { name: 'Blood Pressure Check', price: 50, details: 'Systolic/Diastolic measurement' },
      { name: 'Heart Rate Monitoring', price: 50, details: 'Pulse rate per minute' },
      { name: 'Respiratory Rate Check', price: 50, details: 'Breathing rate per minute' },
      { name: 'Body Temperature Check', price: 50, details: 'Body temperature in Celsius' },
      { name: 'Oxygen Saturation Test', price: 50, details: 'O2 levels in blood' },
      { name: 'ECG Test', price: 50, details: 'Heart electrical activity check' },
    ],
  },
  {
    category: 'Emergency Surgery',
    items: [
      { name: 'ORIF Surgery', details: 'Time: 10:00 AM, Date: 15/09/2024', price: '-' },
      { name: 'Anesthesia', details: 'General anesthesia for surgery', price: '-' },
      { name: 'Surgical Tools', details: 'ORIF specific tools', price: '-' },
      { name: 'Post-Surgery Medication', details: 'Pain relief and antibiotics', price: '-' },
      { name: 'Physiotherapy Session', details: 'Post-surgery rehab', price: '-' },
    ],
  },
];

const calculateCategoryTotal = (items) =>
  items.reduce((sum, item) => sum + (typeof item.price === 'number' ? item.price : 0), 0);

const totalBill = billingData.reduce((sum, category) => sum + calculateCategoryTotal(category.items), 0);

const paidAmount = 1193; 
const outstandingAmount = totalBill - paidAmount;

const BillingSystem = () => {
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

  const headerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    color: '#3f51b5',
  };

  const totalStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '20px 0',
    textAlign: 'center',
  };

  const outstandingStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '20px 0',
    textAlign: 'center',
    color: 'red',
  };

  return (
    <div style={pageStyle}>
      <div
        style={{
          backgroundColor: '#3f51b5',
          color: '#fff',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <div>
            <h2>Committed to your well-being</h2>
          </div>
        </div>
        <div>
          <p>Call us: +49 123 456 7890</p>
        </div>
      </div>

      <h1 style={headerStyle}>Billing Information</h1>
      <p style={{ textAlign: 'center' }}>View and pay your bills online.</p>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={totalStyle}>Total Bill: €{totalBill.toFixed(2)}</p>
        <p style={totalStyle}>Paid Amount: €{paidAmount.toFixed(2)}</p>
        <p style={outstandingStyle}>Outstanding Amount: €{outstandingAmount.toFixed(2)}</p>
      </div>

      {billingData.map((category, index) => (
        <div key={index} style={cardStyle}>
          <h2>{category.category}</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Item</th>
                <th style={thStyle}>Dosage/Details</th>
                <th style={thStyle}>Price</th>
                {category.items[0]?.status && <th style={thStyle}>Status</th>}
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.dosage || item.details || '-'}</td>
                  <td style={tdStyle}>{typeof item.price === 'number' ? `€${item.price.toFixed(2)}` : '-'}</td>
                  {item.status && <td style={tdStyle}>{item.status}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div style={{ backgroundColor: '#3f51b5', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>© 2024 Germany Health Care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BillingSystem;
