// src/screens/MedicalRecords.js
import React from 'react';

// Sample Medical Records for Annie Love
const medicalRecords = [
  {
    category: 'General Information',
    records: [
      { label: 'Name', value: 'Annie Love' },
      { label: 'Age', value: '46' },
    //   { label: 'Blood Type', value: 'O+' },
      { label: 'Height', value: '170 cm' },
    //   { label: 'Weight', value: '65 kg' },
    ],
  },
  {
    category: 'Vital Signs',
    records: [
      { label: 'Blood Pressure', value: '120/80 mmHg' },
      { label: 'Heart Rate', value: ' 80 bpm' },
      { label: 'Respiratory Rate', value: '20 breaths/min ' },
      { label: 'Body Temperature', value: '37°C' },
    ],
  },
  {
    category: 'Allergies',
    records: [
      { label: 'Penicillin', value: 'Severe reaction' },
      { label: 'Pollen', value: 'Mild reaction' },
    ],
  },
  {
    category: 'Medications',
    records: [
      { label: 'Amlodipine', value: '5 mg, once daily' },
      { label: 'Ibuprofen', value: '200 mg, as needed for pain' },
    ],
  },
  {
    category: 'Previous Surgeries',
    records: [
      { label: 'Appendectomy', value: '2015' },
      { label: 'ORIF Surgery', value: '2023 (Left Ankle)' },
      { label: 'ORIF Surgery', value: '2024 (Left Leg)' },

    ],
  },
  {
    category: 'Post-Surgery Lab Test Results',
    records: [
      { label: 'Complete Blood Count (CBC)', value: 'Normal' },
      { label: 'Liver Function Test', value: 'Normal' },
      { label: 'Blood Sugar Level', value: '110 mg/dL (Post-Surgery)' },
      { label: 'Electrolytes', value: 'Within Normal Range' },
      { label: 'Inflammatory Markers', value: 'Slightly Elevated' },
      { label: 'Hemoglobin Levels', value: '12.5 g/dL' },
    ],
  }
  
//   {
//     category: 'Immunizations',
//     records: [
//       { label: 'Tetanus', value: '2021' },
//       { label: 'Influenza', value: '2023' },
//       { label: 'COVID-19', value: '2023 (Booster)' },
//     ],
//   },
//   {
//     category: 'Family Medical History',
//     records: [
//       { label: 'Hypertension', value: 'Mother' },
//       { label: 'Type 2 Diabetes', value: 'Father' },
//       { label: 'Breast Cancer', value: 'Grandmother (Maternal)' },
//     ],
//   },
];

const MedicalRecords = () => {
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
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  const hospitalLogoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoImageStyle = {
    width: '50px',
    marginRight: '10px',
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

      {/* Medical Records */}
      <h1 style={headerStyle}>Medical Records & Test Results</h1>
      <p style={{ textAlign: 'center' }}></p>

      {medicalRecords.map((recordCategory, index) => (
        <div key={index} style={cardStyle}>
          <h2>{recordCategory.category}</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Field</th>
                <th style={thStyle}>Details</th>
              </tr>
            </thead>
            <tbody>
              {recordCategory.records.map((record, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{record.label}</td>
                  <td style={tdStyle}>{record.value}</td>
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

export default MedicalRecords;





// // src/screens/MedicalRecords.js
// import React from 'react';

// // Sample Medical Records for Annie Love
// const medicalRecords = [
//   {
//     category: 'General Information',
//     records: [
//       { label: 'Name', value: 'Annie Love' },
//       { label: 'Age', value: '32' },
//       { label: 'Blood Type', value: 'O+' },
//       { label: 'Height', value: '170 cm' },
//       { label: 'Weight', value: '65 kg' },
//     ],
//   },
//   {
//     category: 'Vital Signs',
//     records: [
//       { label: 'Blood Pressure', value: '120/80 mmHg' },
//       { label: 'Heart Rate', value: '72 bpm' },
//       { label: 'Respiratory Rate', value: '16 breaths/min' },
//       { label: 'Body Temperature', value: '36.8°C' },
//     ],
//   },
//   {
//     category: 'Allergies',
//     records: [
//       { label: 'Penicillin', value: 'Severe reaction' },
//       { label: 'Pollen', value: 'Mild reaction' },
//     ],
//   },
//   {
//     category: 'Medications',
//     records: [
//       { label: 'Amlodipine', value: '5 mg, once daily' },
//       { label: 'Ibuprofen', value: '200 mg, as needed for pain' },
//     ],
//   },
//   {
//     category: 'Previous Surgeries',
//     records: [
//       { label: 'Appendectomy', value: '2015' },
//       { label: 'ORIF Surgery', value: '2023 (Left Ankle)' },
//     ],
//   },
//   {
//     category: 'Lab Test Results',
//     records: [
//       { label: 'Complete Blood Count (CBC)', value: 'Normal' },
//       { label: 'Liver Function Test', value: 'Normal' },
//       { label: 'Blood Sugar Level', value: '98 mg/dL (Fasting)' },
//       { label: 'Cholesterol', value: '200 mg/dL' },
//     ],
//   },
//   {
//     category: 'Immunizations',
//     records: [
//       { label: 'Tetanus', value: '2021' },
//       { label: 'Influenza', value: '2023' },
//       { label: 'COVID-19', value: '2023 (Booster)' },
//     ],
//   },
//   {
//     category: 'Family Medical History',
//     records: [
//       { label: 'Hypertension', value: 'Mother' },
//       { label: 'Type 2 Diabetes', value: 'Father' },
//       { label: 'Breast Cancer', value: 'Grandmother (Maternal)' },
//     ],
//   },
// ];

// const MedicalRecords = () => {
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

//   return (
//     <div style={pageStyle}>
//       <h1 style={headerStyle}>Medical Records & Test Results</h1>
//       <p style={{ textAlign: 'center' }}>View your medical history and lab results.</p>

//       {medicalRecords.map((recordCategory, index) => (
//         <div key={index} style={cardStyle}>
//           <h2>{recordCategory.category}</h2>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th style={thStyle}>Field</th>
//                 <th style={thStyle}>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recordCategory.records.map((record, i) => (
//                 <tr key={i}>
//                   <td style={tdStyle}>{record.label}</td>
//                   <td style={tdStyle}>{record.value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}

//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <p>© 2024 Germany Health Care. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default MedicalRecords;
