import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Forms = () => {
  const [email, setEmail] = useState('');
  const [patientId] = useState('P2024GER-7934XQZ8'); // Set initial value and make it non-editable
  const [billAmount] = useState('2693.99'); // Set initial value for bill amount and make it non-editable
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { email, patientId, billAmount } });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.header}>Enter Billing Details</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Bill Amount (€):</label>
            <input 
              type="number" 
              value={billAmount} 
              readOnly // Make this field read-only
              style={{ ...styles.input, ...styles.fadedInput }} // Apply faded style
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Patient ID:</label>
            <input 
              type="text" 
              value={patientId} 
              readOnly // Make this field read-only
              style={{ ...styles.input, ...styles.fadedInput }} // Apply faded style
            />
          </div>

          <button type="submit" style={styles.button}>Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
  },
  formWrapper: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '30px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  fadedInput: {
    backgroundColor: '#f7f7f7', // Faded background color
    color: '#aaa', // Faded text color
  },
  button: {
    padding: '12px 0',
    width: '100%',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Forms;
