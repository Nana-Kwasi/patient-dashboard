// import React from 'react';
// import { Link } from 'react-router-dom';

// const billingData = [
//   {
//     category: 'Post-Surgery Medications',
//     items: [
//       { name: 'Paracetamol', dosage: '500 mg, 3x daily', price: 160, status: 'Delivered' },
//       { name: 'Ibuprofen', dosage: '400 mg, as needed for pain', price: 150, status: 'Delivered' },
//       { name: 'Cefuroxime', dosage: '500 mg, twice daily', price: 200, status: 'Delivered' }, // Antibiotic
//       { name: 'Aspirin', dosage: '75 mg, once daily', price: 134, status: 'Delivered' }, // Blood thinner
//       { name: 'Pantoprazole', dosage: '40 mg, once daily (before meals)', price: 180, status: 'Delivered' }, // To protect stomach
//     ],
//   },
//   {
//     category: 'Blood Thinners',
//     items: [
//       { name: 'Aspirin', dosage: '75 mg, once daily', price: 134, status: 'Delivered' },
//       { name: 'Clopidogrel', dosage: '75 mg, once daily', price: 150, status: 'Delivered' },
//     ],
//   },
//   {
//     category: 'Lab Test Results',
//     items: [
//       { name: 'Complete Blood Count (CBC)', price: 250, details: 'Measures red and white blood cells' },
//       { name: 'Liver Function Test', price: 200, details: 'Checks liver enzymes' },
//       { name: 'Blood Sugar Level', price: 150, details: 'Checks glucose levels' },
//       { name: 'Cholesterol Test', price: 150, details: 'Measures LDL, HDL, and triglycerides' },
//       { name: 'Renal Function Test', price: 200, details: 'Assesses kidney function' },
//       { name: 'Electrolyte Panel', price: 150, details: 'Sodium, potassium, chloride levels' },
//     ],
//   },
//   {
//     category: 'Vital Signs',
//     items: [
//       { name: 'Blood Pressure Check', price: 50, details: 'Systolic/Diastolic measurement' },
//       { name: 'Heart Rate Monitoring', price: 50, details: 'Pulse rate per minute' },
//       { name: 'Respiratory Rate Check', price: 50, details: 'Breathing rate per minute' },
//       { name: 'Body Temperature Check', price: 50, details: 'Body temperature in Celsius' },
//       { name: 'Oxygen Saturation Test', price: 50, details: 'O2 levels in blood' },
//       { name: 'ECG Test', price: 50, details: 'Heart electrical activity check' },
//     ],
//   },
//   {
//     category: 'Emergency Surgery Required',
//     items: [
//       { name: 'ORIF Surgery', details: 'Successfully completed', price: 3421 },
//       { name: 'Anesthesia', details: 'General anesthesia for surgery', price: 500 },
//       { name: 'Post-Surgery Medication', details: 'Pain relief and antibiotics', price: 300 },
//       { name: 'Physiotherapy Session', details: 'Post-surgery rehab', price: 150 },
//     ],
//   },
// ];

// const calculateCategoryTotal = (items) =>
//   items.reduce((sum, item) => sum + (typeof item.price === 'number' ? item.price : 0), 0);

// const totalBill = billingData.reduce((sum, category) => sum + calculateCategoryTotal(category.items), 0);
// const paidAmount = 2194.00;
// const outstandingAmount = totalBill - paidAmount;

// const BillingSystem = () => {
//   const pageStyle = {
//     padding: '20px',
//     backgroundImage: 'url("/background.jpg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     color: '#333',
//   };

//   const cardStyle = {
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '10px',
//     padding: '20px',
//     marginBottom: '20px',
//     backgroundColor: '#fff',
//     maxWidth: '800px',
//     margin: '20px auto',
//   };

//   const buttonStyle = {
//     backgroundColor: '#4CAF50', 
//     color: 'white',
//     padding: '10px 20px',
//     textAlign: 'center',
//     fontSize: '16px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     border: 'none',
//     marginBottom: '20px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     transition: '0.3s',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#45a049',
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginBottom: '10px',
//   };

//   const thStyle = {
//     backgroundColor: '#3f51b5',
//     color: '#fff',
//     padding: '10px',
//     textAlign: 'left',
//     borderBottom: '1px solid #ddd',
//   };

//   const tdStyle = {
//     padding: '10px',
//     borderBottom: '1px solid #ddd',
//   };

//   const headerStyle = {
//     textAlign: 'center',
//     marginTop: '50px',
//     color: '#3f51b5',
//   };

//   const totalStyle = {
//     fontWeight: 'bold',
//     fontSize: '18px',
//     margin: '20px 0',
//     textAlign: 'center',
//   };

//   const outstandingStyle = {
//     fontWeight: 'bold',
//     fontSize: '18px',
//     margin: '20px 0',
//     textAlign: 'center',
//     color: 'red',
//   };

//   return (
//     <div style={pageStyle}>
//       <div
//         style={{
//           backgroundColor: '#3f51b5',
//           color: '#fff',
//           padding: '10px 20px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src="/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
//           <div>
//             <h2>Committed to your well-being</h2>
//           </div>
//         </div>
//       </div>

//       <h1 style={headerStyle}>Billing Information</h1>

//       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//         <Link to="/forms">
//           <button style={buttonStyle}>Pay Now</button>
//         </Link>
//         <p style={totalStyle}>Total Bill: €{totalBill.toFixed(2)}</p>
//         <p style={totalStyle}>Paid Amount: €{paidAmount.toFixed(2)}</p>
//         <p style={outstandingStyle}>Outstanding Amount: €{outstandingAmount.toFixed(2)}</p>
//       </div>

//       {billingData.map((category, index) => (
//         <div key={index} style={cardStyle}>
//           <h2>{category.category}</h2>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th style={thStyle}>Item</th>
//                 <th style={thStyle}>Dosage/Details</th>
//                 <th style={thStyle}>Price</th>
//                 {category.items[0]?.status && <th style={thStyle}>Status</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {category.items.map((item, i) => (
//                 <tr key={i}>
//                   <td style={tdStyle}>{item.name}</td>
//                   <td style={tdStyle}>{item.dosage || item.details}</td>
//                   <td style={tdStyle}>{typeof item.price === 'number' ? `€${item.price.toFixed(2)}` : '-'}</td>
//                   {item.status && <td style={tdStyle}>{item.status}</td>}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}

//       <div style={{ backgroundColor: '#3f51b5', color: '#fff', padding: '20px', textAlign: 'center' }}>
//         <p>© 2024 Germany Health Care. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default BillingSystem;



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const billingData = [
  {
    category: 'Post-Surgery Care',
    items: [
      { name: 'Physical Therapy (4 sessions)', details: '60 euros per session', price: 240, status: 'Scheduled' },
      { name: 'Imaging Tests', details: 'X-rays and other imaging', price: 150, status: 'Completed' },
      { name: 'Blood Clot Prevention Medications', details: 'Medications to prevent DVT', price: 183.99, status: 'Delivered' },
      { name: 'Mobility Aids Rental', details: 'Crutches, walker, etc. (2 weeks)', price: 280, status: 'Rented' },
      { name: 'Wound Care Supplies', details: 'Bandages, antiseptics, etc.', price: 90, status: 'Delivered' },
    ],
  },
  {
    category: 'ORIF Surgery and Related Procedures',
    items: [
      { name: 'Surgeon Fee', details: 'ORIF Surgery', price: 1800, status: 'Completed' },
      { name: 'Anesthesia Fee', details: 'Anesthesia during ORIF', price: 900, status: 'Completed' },
      { name: 'Operating Room Fee', details: 'Room usage and equipment', price: 800, status: 'Completed' },
    ],
  },
];

const calculateCategoryTotal = (items) =>
  items.reduce((sum, item) => sum + (typeof item.price === 'number' ? item.price : 0), 0);

const totalBill = billingData.reduce((sum, category) => sum + calculateCategoryTotal(category.items), 0);
const insuranceCovered = 1750;  // Insurance paid half
const paidAmount = `NGO covered €${insuranceCovered.toFixed(2)}`;
const outstandingAmount = totalBill - insuranceCovered;  // Remaining amount after insurance coverage

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

  const buttonStyle = {
    backgroundColor: '#4CAF50', 
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
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

   const titleStyle = {
    color: '#007bff',
    fontSize: '22px',
    marginBottom: '15px',
    fontWeight: 'bold',
  };

  const messageStyle = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '15px',
  };

  const amountStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: '20px',
  };



  // useEffect to display the alert after component mounts
  useEffect(() => {
    // Create the alert content with the updated message
    const alertContent = `
      <div style="
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        color: #333;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        max-width: 450px;
        margin: 0 auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        text-align: center;
      ">
        <h2 style="color: #007bff; font-size: 22px; margin-bottom: 20px;">
          Congratulations, Annie!
        </h2>
        <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
          NGO has generously covered half of your surgery bill.
        </p>
        <p style="font-size: 20px; font-weight: bold; color: #28a745;">
          Amount covered by NGO: €1,750
        </p>
        <button id="okBtn" style="
          background-color: #28a745;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
          margin-top: 20px;
        ">OK</button>
      </div>
    `;

    // Create alert element
    const styledAlert = document.createElement('div');
    styledAlert.innerHTML = alertContent;
    styledAlert.style.position = 'fixed';
    styledAlert.style.top = '50%';
    styledAlert.style.left = '50%';
    styledAlert.style.transform = 'translate(-50%, -50%)';
    styledAlert.style.backgroundColor = '#ffffff';
    styledAlert.style.padding = '20px';
    styledAlert.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    styledAlert.style.zIndex = '1000';
    styledAlert.style.borderRadius = '10px';

    // Append the alert to the body
    document.body.appendChild(styledAlert);

    // Add click event for "OK" button
    const okButton = styledAlert.querySelector('#okBtn');
    okButton.addEventListener('click', () => {
      styledAlert.remove(); // Close the alert on button click
    });

    // Cleanup function to remove the alert when the component unmounts
    return () => {
      styledAlert.remove();
    };
  }, []);



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
      </div>

      <h1 style={headerStyle}>Billing Information</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/forms">
          <button style={buttonStyle}>Pay Now</button>
        </Link>
        <p style={totalStyle}>Total Bill: €{totalBill.toFixed(2)}</p>
        <p style={totalStyle}>Paid Amount: {paidAmount}</p>
        <p style={outstandingStyle}>Outstanding Amount: €{outstandingAmount.toFixed(2)}</p>
      </div>

      {billingData.map((category, index) => (
        <div key={index} style={cardStyle}>
          <h2>{category.category}</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Item</th>
                <th style={thStyle}>Details</th>
                <th style={thStyle}>Price</th>
                {category.items[0]?.status && <th style={thStyle}>Status</th>}
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.details}</td>
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
