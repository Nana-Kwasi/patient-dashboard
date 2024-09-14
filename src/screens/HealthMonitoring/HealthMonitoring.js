// src/screens/HealthMonitoring.js
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Area,
} from 'recharts';

// Sample data
const vitalSignsData = [
  { name: 'Blood Pressure', value: 120 },
  { name: 'Heart Rate', value: 72 },
  { name: 'Respiratory Rate', value: 16 },
  { name: 'Body Temperature', value: 36.8 },
];

const labTestResultsData = [
  { name: 'CBC', value: 1 },
  { name: 'Liver Function', value: 1 },
  { name: 'Blood Sugar', value: 98 },
  { name: 'Cholesterol', value: 200 },
];

const allergiesData = [
  { name: 'Penicillin', value: 1 },
  { name: 'Pollen', value: 0.5 },
];

const medicationData = [
  { name: 'Amlodipine', value: 5 },
  { name: 'Ibuprofen', value: 200 },
];

const prescriptionData = [
  { category: 'Pre-Surgery Medications', count: 3 },
  { category: 'Blood Thinners', count: 2 },
  { category: 'Pain Management', count: 2 },
  { category: 'Antibiotics (Post-Surgery)', count: 2 },
  { category: 'Anti-Inflammatory Medications', count: 2 },
];

const HealthMonitoring = () => {
  const pageStyle = {
    padding: '20px',
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#333',
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
          <p>Call us: +49 123 456 7890</p>
        </div>
      </div>

      {/* Health Monitoring Charts */}
      <h1 style={headerStyle}>Health Monitoring </h1>
      <p style={{ textAlign: 'center' }}></p>

      {/* Vital Signs Chart */}
      <h2 style={{ textAlign: 'center' }}>Vital Signs</h2>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart data={vitalSignsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3f51b5" />
        </BarChart>
      </ResponsiveContainer>

      {/* Lab Test Results Chart */}
      <h2 style={{ textAlign: 'center' }}>Lab Test Results</h2>
      <ResponsiveContainer width="90%" height={400}>
        <ComposedChart data={labTestResultsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" barSize={20} fill="#8884d8" />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Allergies Pie Chart */}
      <h2 style={{ textAlign: 'center' }}>Allergies</h2>
      <ResponsiveContainer width="90%" height={400}>
        <PieChart>
          <Pie
            data={allergiesData}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {allergiesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#00C49F' : '#FF8042'} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Medication Line Chart */}
      <h2 style={{ textAlign: 'center' }}>Medications</h2>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={medicationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Prescription Refill Bar Chart */}
      <h2 style={{ textAlign: 'center' }}>Prescription Refill Status</h2>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart data={prescriptionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      {/* Footer */}
      <div style={footerStyle}>
        <p>© 2024 Germany Health Care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HealthMonitoring;
