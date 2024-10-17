// import React from 'react';
// import { Link } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

// const dataBills = [
//   { name: 'Aug', total: 1140, outstanding: 500 }, 
//   { name: 'Sep', total: 960, outstanding: 407 },    
// ];

// const totalBill = dataBills.reduce((sum, entry) => sum + entry.total, 0);
// const outstandingBill = dataBills.reduce((sum, entry) => sum + entry.outstanding, 0);

// const dataTreatments = [
//   { name: 'Vital Signs Monitoring', response: 85 },
//   { name: 'Neurological Examination', response: 40 },
//   { name: 'Imaging', response: 62 },
//   { name: 'Life Support', response: 35 },
// ];

// const dataDaysSpent = [
//   { name: 'Week 1', days: 5 },
//   { name: 'Week 2', days: 7 },
//   { name: 'Week 3', days: 4 },
//   { name: 'Week 4', days: 6 },
// ];

// const PatientDashboard = () => {
//   const containerStyle = {
//     backgroundImage: 'url(/db2.jpg)',  // Adjusted to reflect the attached image
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     minHeight: '100vh',
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '20px',
//   };

//   const topBarStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     color: 'white',
//   };

//   const logoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   };

//   const logoImageStyle = {
//     width: '50px',
//     height: '50px',
//   };

//   const hospitalNameStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//   };

//   const profileContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px', // To adjust the gap between profile image and name
//   };

//   const profileImageStyle = {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     objectFit: 'cover',
//   };

//   const profileNameStyle = {
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };

//   const navLinksStyle = {
//     display: 'flex',
//     gap: '20px',
//     alignItems: 'center',
//   };

//   const navLinkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//     padding: '10px 20px',
//     fontSize: '15px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   };

//   const cardsContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px',
//     marginTop: '50px',
//     marginBottom: '50px',
//   };

//   const cardStyle = {
//     backgroundColor: 'green',  // Light background
//     padding: '20px',
//     borderRadius: '10px',
//     color: '#333',
//     flex: 1,
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     fontSize: '16px',
//     textAlign: 'left',
//   };

//   const cardVitalStyle = {
//     backgroundColor: '#E3F2FD',  // Light blue background for vitals
//     padding: '20px',
//     borderRadius: '10px',
//     color: '#333',
//     flex: 1,
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     fontSize: '16px',
//     textAlign: 'left',
//   };

//   const cardHeaderStyle = {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//     color: 'white',
    
//   };
//   const cardHeaderStyle1 = {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//     color: 'black',
    
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Top Bar with Logo, Hospital Name, and Profile Section */}
//       <div style={topBarStyle}>
//         <div style={logoStyle}>
//           <img src="/logo.png" alt="Hospital Logo" style={logoImageStyle} />
//           <span style={hospitalNameStyle}>Annie's Dashboard</span>
//         </div>

//         <div style={navLinksStyle}>
//           <Link to="/medical-records" style={navLinkStyle}>Medical Records</Link>
//           <Link to="/billing" style={navLinkStyle}>Billing Info</Link>
//           <Link to="/prescriptions" style={navLinkStyle}>Prescription Refills</Link>
//           <Link to="/health-monitoring" style={navLinkStyle}>Health Monitoring</Link>
//         </div>

//         <div style={profileContainerStyle}>
//           <img src="/pro.jpeg" alt="Profile" style={profileImageStyle} />
//           <span style={profileNameStyle}>Annie Love</span>
//         </div>
//       </div>

//       {/* Cards for Current Status and Current Vitals */}
//       <div style={cardsContainerStyle}>
//         {/* Card for Current Status */}
//         <div style={cardStyle}>
//           <h3 style={cardHeaderStyle}>Current Status</h3>
//           <ul style={{ color: 'white',  }}>
//             <li>Patient is alert, oriented to time, place, and person, and fully breathing independently.</li>
//             <li>Neurological function shows significant improvement with no signs of seizures or brain swelling.</li>
//             <li>Patient is ambulatory with assistance and continues to work with physical and occupational therapists.</li>
//             <li>Current medications include oral pain management (Acetaminophen 500 mg, as needed) and continued physical therapy for motor recovery.</li>
//             <li>Awaiting surgery for left femur fracture.</li>
//           </ul>
//         </div>

//         {/* Card for Current Vitals */}
//         <div style={cardVitalStyle}>
//           <h3 style={cardHeaderStyle1}>Current Vitals</h3>
//           <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
//           <p><strong>Heart Rate:</strong> 72 bpm</p>
//           <p><strong>Respiratory Rate:</strong> 16 breaths/min</p>
//           <p><strong>Body Temperature:</strong> 36.8°C</p>
//         </div>
//       </div>

//       {/* Graphs Section */}
//       <div style={{ textAlign: 'center' }}>
//       <div style={{ marginTop: '80px' , }}>
//           <h3 style={{ color: 'white' }}>Response to Treatment</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={dataTreatments}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" stroke="white" />
//               <YAxis stroke="white" />
//               <Tooltip />
//               <Bar dataKey="response" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         {/* Graph for Total and Outstanding Bills */}
//         <div style={{ marginTop: '80px' , }}>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={dataBills}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" stroke="white" />
//               <YAxis stroke="white" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="total" fill="#8884d8" />
//               <Bar dataKey="outstanding" fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>
//           <div style={{ color: 'white', marginTop: '10px', fontSize: "20px" }}>
//             <p>Total Bill: €{totalBill}</p>
//             <p>Outstanding Balance: €{outstandingBill}</p>
//           </div>
//         </div>

//         {/* Graph for Treatments and Response
//         <div style={{ marginTop: '50px' }}>
//           <h3 style={{ color: 'white' }}>Response to Treatment</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={dataTreatments}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" stroke="white" />
//               <YAxis stroke="white" />
//               <Tooltip />
//               <Bar dataKey="response" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div> */}

//         {/* Graph for Days Spent in Hospital */}
//         <div style={{ marginTop: '50px' }}>
//           <h3 style={{ color: 'white' }}>Days Spent in Hospital</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={dataDaysSpent}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" stroke="white" />
//               <YAxis stroke="white" />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="days" stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

const dataBills = [
  { name: 'Aug', total: 0, outstanding: 0 }, 
  { name: 'Sep', total: 0, outstanding: 0 },  
  { name: 'Oct', total: 0, outstanding: 0 },    
  
];

const totalBill = dataBills.reduce((sum, entry) => sum + entry.total, 0);
const outstandingBill = dataBills.reduce((sum, entry) => sum + entry.outstanding, 0);

const dataTreatments = [
  { name: 'Post-Surgery Vital Signs Monitoring', response: 100 },
  { name: 'Post-Surgery Neurological Examination', response: 90 },
  { name: 'Follow-up Imaging Tests', response: 95 },
  { name: 'Post-Surgery Life Support', response: 50 },
];


const dataDaysSpent = [
  { name: 'Week 1', days: 5 },
  { name: 'Week 2', days: 7 },
  { name: 'Week 3', days: 4 },
  { name: 'Week 5', days: 6 },
  { name: 'Week 6', days: 6 },
  { name: 'Week 7', days: 6 },
  { name: 'Week 8', days: 6 },

];

const PatientDashboard = () => {
  useEffect(() => {
    const alertContent = `
      <div style="
        background-color: #f0f8ff;
        padding: 15px;
        border-radius: 8px;
        color: #333;
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
        max-width: 90%;
        margin: 0 auto;
      ">
        <h2 style="color: #0056b3; font-size: 18px; text-align: center;">Post-Surgery Update for Miss Annie</h2>
        <p>I'm pleased to inform you that Miss Annie’s ORIF (Open Reduction and Internal Fixation) surgery was a success.</p>
        
        <p><strong>Next Steps in Post-Surgery Care:</strong></p>
        <ul style="padding-left: 18px; list-style-type: disc;">
          <li><strong>Physical Therapy:</strong> Ongoing rehabilitation sessions (may incur additional costs).</li>
          <li><strong>Imaging Tests:</strong> Follow-up X-rays or scans to monitor bone healing (charges may apply).</li>
          <li><strong>Blood Clot Prevention:</strong> Medications and compression devices (may require separate payment).</li>
          <li><strong>Mobility Aids:</strong> Crutches, walker, or other aids (purchase or rental may be necessary).</li>
          <li><strong>Follow-up Appointments:</strong> Specialist consultations after surgery (potential extra fees).</li>
          <li><strong>Wound Care Supplies:</strong> Special dressings and antiseptics for regular care (may incur costs).</li>
        </ul>
        <p style="text-align: right; font-style: italic; color: #0056b3;">Assigned Doctor<br/>Dr. Ackstaller</p>
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
    styledAlert.style.border = '1px solid #0056b3';
    styledAlert.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    styledAlert.style.padding = '15px';
    styledAlert.style.borderRadius = '8px';
    styledAlert.style.width = '90%'; // Make it responsive for mobile
    styledAlert.style.maxWidth = '400px'; // Limit the maximum width on larger screens
    styledAlert.style.zIndex = '1000';
    styledAlert.style.overflowY = 'hidden'; // Ensure it fits within content size

    // Create OK button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.style.marginBottom = '15px'; // Place it above the content
    closeButton.style.backgroundColor = '#0056b3';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.width = '100%'; // Full width for better accessibility

    closeButton.onclick = () => {
      styledAlert.remove();
    };

    // Insert button before content
    styledAlert.insertBefore(closeButton, styledAlert.firstChild);
    document.body.appendChild(styledAlert);
  }, []);
  const containerStyle = {
    backgroundImage: 'url(/db2.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };

  const topBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    flexWrap: 'wrap', 
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
  gap: '10px',
  flexDirection: 'column',
  textAlign: 'center',     
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
    whiteSpace: 'nowrap',     
    overflow: 'hidden',       
    textOverflow: 'ellipsis', 
    marginTop: '5px',         
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    flex: '1', 
  };
  

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textAlign: 'center', 
  };
  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '50px',
    marginBottom: '50px',
  };

  const cardStyle = {
    backgroundColor: 'green',  
    padding: '20px',
    borderRadius: '10px',
    color: '#333',
    flex: '1 1 45%', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    textAlign: 'left',
  };

  const cardVitalStyle = {
    backgroundColor: 'lightblue',  
    padding: '20px',
    borderRadius: '10px',
    color: '#333',
    flex: '1 1 45%', 
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

  const responsiveChartContainer = {
    width: '100%',
    height: '100%',
    maxWidth: '1200px',  
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <div style={topBarStyle}>
        <div style={logoStyle}>
          <img src="/logo.png" alt="Hospital Logo" style={logoImageStyle} />
          <span style={hospitalNameStyle}>Annie's Dashboard</span>
        </div>

        <div style={navLinksStyle}>
          <Link to="/medical-records" style={navLinkStyle}>Medical Records</Link>
          <Link to="/billing" style={navLinkStyle}>Billing and Payment</Link>
          <Link to="/prescriptions" style={navLinkStyle}>Prescription Refills</Link>
          <Link to="/health-monitoring" style={navLinkStyle}>Health Monitoring</Link>
          {/* <Link to="/pay" style={navLinkStyle}>Pay</Link>  Added Pay link */}
        </div>

        <div style={profileContainerStyle}>
          <img src="/pro.jpeg" alt="Profile" style={profileImageStyle} />
          <span style={profileNameStyle}>Annie Love</span>
        </div>
      </div>

      <div style={cardsContainerStyle}>
        <div style={cardStyle}>
          <h3 style={cardHeaderStyle}>Current Status</h3>
          <ul style={{ color: 'white' }}>
          <li><strong>Surgery Update:</strong></li>
<li>Miss Annie’s ORIF (Open Reduction and Internal Fixation) surgery has been successfully completed.</li>
<li>She is now stable and in recovery under close supervision.</li>
<li>Post-surgery care, including physical therapy and follow-up imaging, will be arranged.</li>
<li>The medical team will continue to monitor her progress.</li>
<li>Further updates will be provided as needed during her recovery.</li>

          <li>Physical Therapy: Ongoing rehabilitation sessions (may incur additional costs).</li>
<li>Imaging Tests: Follow-up X-rays or scans to monitor bone healing (charges may apply).</li>
<li>Blood Clot Prevention: Medications and compression devices (may require separate payment).</li>
<li>Mobility Aids: Crutches, walker, or other aids (purchase or rental may be necessary).</li>
<li>Follow-up Appointments: Specialist consultations after surgery (potential extra fees).</li>
<li>Wound Care Supplies: Special dressings and antiseptics for regular care (may incur costs).</li>


          </ul>
        </div>

        <div style={cardVitalStyle}>
          <h3 style={cardHeaderStyle1}>Current Vitals</h3>
          <p><strong>Blood Pressure:</strong> 120/80 mmHg (Stable)</p>
<p><strong>Heart Rate:</strong> 80 bpm (Normal)</p>
<p><strong>Respiratory Rate:</strong> 20 breaths/min (Normal)</p>
<p><strong>Body Temperature:</strong> 37.0°C (Normal)</p>

        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ marginTop: '80px' }}>
          <h3 style={{ color: 'white' }}>Response to Treatment</h3>
          <div style={responsiveChartContainer}>
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
        </div>

        <div style={{ marginTop: '80px' }}>
          <div style={responsiveChartContainer}>
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
          </div>
          <div style={{ color: 'white', marginTop: '10px', fontSize: "20px" }}>
            <p>Total: <strong>€{totalBill}</strong></p>
            <p>Outstanding: <strong>€ {outstandingBill}</strong></p>
          </div>
        </div>

        <div style={{ marginTop: '80px' }}>
          <h3 style={{ color: 'white' }}>Days Spent In The Hospital</h3>
          <div style={responsiveChartContainer}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataDaysSpent}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="days" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
