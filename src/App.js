// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from '../src/screens/Welcome/WelcomeScreen';
import AppointmentManagement from './screens/Appointment/AppointmentManagement';
import BillingSystem from './screens/BillingSystem/BillingSystem';
import PatientDashboard from './screens/Dashboard/PatientDashboard';
import HealthMonitoring from './screens/HealthMonitoring/HealthMonitoring';
import LoginScreen from './screens/Login/Login';
import MedicalRecord from './screens/MedicalRecords/MedicalRecords';
import PrescriptionRefill from './screens/PrescriptionRefill/PrescriptionRefill';




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/dashboard" element={<PatientDashboard />} />
      <Route path="/appointments" element={<AppointmentManagement />} />
      <Route path="/medical-records" element={<MedicalRecord />} />
      <Route path="/prescriptions" element={<PrescriptionRefill />} />
      <Route path="/billing" element={<BillingSystem />} />
      <Route path="/health-monitoring" element={<HealthMonitoring />} />
    </Routes>
  </Router>
  );
}

export default App;
