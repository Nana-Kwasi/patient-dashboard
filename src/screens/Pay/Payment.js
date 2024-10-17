// import React, { useState } from 'react';

// const HospitalBillPayment = () => {
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');
//   const [hospitalId, setHospitalId] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Convert the amount to cents
//     const amountInCents = parseFloat(amount) * 100;

//     if (!email || !amount || !hospitalId) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, amount: amountInCents, hospitalId }),
//       });

//       const data = await response.json();

//       if (data.url) {
//         // Redirect to the payment URL
//         window.location.href = data.url;
//       } else {
//         alert('Failed to create checkout session');
//       }
//     } catch (err) {
//       console.error('Error during checkout session creation:', err);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.h1}>Pay Your Hospital Bill</h1>
//       <form id="paymentForm" onSubmit={handleSubmit}>
//         <div style={styles.formGroup}>
//           <label htmlFor="userEmail" style={styles.label}>Email:</label>
//           <input
//             type="email"
//             id="userEmail"
//             name="user_email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//             required
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label htmlFor="amount" style={styles.label}>Bill Amount (in Euros):</label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             placeholder="Enter the bill amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             style={styles.input}
//             required
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label htmlFor="hospitalId" style={styles.label}>Hospital ID:</label>
//           <input
//             type="text"
//             id="hospitalId"
//             name="hospitalId"
//             placeholder="Enter your Hospital ID"
//             value={hospitalId}
//             onChange={(e) => setHospitalId(e.target.value)}
//             style={styles.input}
//             required
//           />
//         </div>

//         <button type="submit" id="pay-now" title="Pay now" style={styles.btn}>
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '50px auto',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//   },
//   h1: {
//     textAlign: 'center',
//     color: '#333',
//     marginBottom: '30px',
//     fontSize: '1.5rem',
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#555',
//     fontSize: '0.9rem',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '0.95rem',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: '#fff',
//     transition: 'border-color 0.3s ease',
//     outline: 'none',
//   },
//   btn: {
//     display: 'block',
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#4a90e2',
//     color: '#fff',
//     fontSize: '1rem',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     marginTop: '20px',
//   },
// };

// export default HospitalBillPayment;




// import React, { useState, useEffect } from 'react';

// const PaymentScreen = () => {
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   // Load the Paystack script
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://js.paystack.co/v1/inline.js';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     setErrorMessage('');

//     if (!email || !amount) {
//       setErrorMessage('Please fill in all fields.');
//       setIsProcessing(false);
//       return;
//     }

//     const paymentData = { email, amount };

//     try {
//       const response = await fetch('http://localhost:3000/api/payment/initialize', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Payment Initialized:', result);

       
//         const handler = window.PaystackPop.setup({
//           key: 'pk_live_4d1d9c431ef811ef5ce9150eaf8ba480f868f5fd', 
//           email: email,
//           amount: amount * 100, 
//           currency: 'GHS', 
//           callback: function (response) {
//             alert('Payment successful! Transaction reference: ' + response.reference);
            
//           },
//           onClose: function () {
//             alert('Payment window closed.');
//           },
//         });

//         handler.openIframe(); 
//       } else {
//         const errorText = await response.text();
//         console.error('Failed to initialize payment:', response.statusText, errorText);
//         alert(Payment Initialization Failed: ${response.statusText} - ${errorText});
//       }
//     } catch (error) {
//       console.error('Error during payment initialization:', error);
//       setErrorMessage('There was an error processing your payment. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Complete Your Payment</h1>
//       <form onSubmit={handlePayment} style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input} 
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="amount">Amount (GHS):</label>
//           <input
//             type="number"
//             id="amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//             style={styles.input} 
//           />
//         </div>
//         {errorMessage && <p style={styles.error}>{errorMessage}</p>}
//         <button type="submit" disabled={isProcessing} style={styles.button}>
//           {isProcessing ? 'Processing...' : 'Submit Payment'}
//         </button>
//       </form>
//     </div>
//   );
// };


// const styles = {
//   container: {
//     padding: '20px',
//     backgroundColor: '#f0f0f0',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: '28px',
//     color: '#3f51b5',
//     marginBottom: '20px',
//   },
//   form: {
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '500px',
//   },
//   inputGroup: {
//     marginBottom: '20px',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     width: '100%',
//     padding: '15px',
//     fontSize: '16px',
//     color: '#fff',
//     backgroundColor: '#3f51b5',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     marginBottom: '20px',
//   },
// };

// export default PaymentScreen;




import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const location = useLocation();
  const { email, patientId, billAmount } = location.state || {};

  const [paymentAttempts, setPaymentAttempts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (cardNumber.length !== 16) {
      alert('Card Information must be 16 digits.');
      return; 
    }

    setIsLoading(true);

    setTimeout(() => {
      if (paymentAttempts < 1) {
        setErrorMessage('System is currently down.Please contact the finance team for assistance.Thank You');
        setPaymentAttempts(prev => prev + 1);
        setIsLoading(false);
      } else {
        setErrorMessage('Please contact the finance team for assistance.Thank You');
        setIsLoading(false);
      }
    }, 2000);
  };

  const handleCardInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCardNumber(value); // Update state with card number
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileInfo}>
        <img src="pro.jpeg" alt="Profile" style={styles.profilePic} />
        <h3>Miss Annie</h3>
      </div>

      <div style={styles.paymentContent}>
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Hospital Bill Payment</h2>
          <form onSubmit={handlePayment}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                style={styles.input}
                required
                readOnly
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="cardNumber" style={styles.label}>Card Information</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 1234 1234 1234"
                style={styles.cardInput}
                value={cardNumber}
                required
                onInput={handleCardInputChange}
              />
            </div>

            <div style={styles.inputGroupInline}>
              <div style={styles.inputGroup}>
                <label htmlFor="expiry" style={styles.label}>Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM / YY"
                  style={styles.inputInline}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="cvc" style={styles.label}>CVC</label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  style={styles.inputInline}
                  required
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>Cardholder Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full name on card"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="country" style={styles.label}>Country</label>
              <select id="country" required>
                <option value="">Select Your Country</option>
                <option value="AL">Albania</option>
                <option value="AD">Andorra</option>
                <option value="AT">Austria</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BG">Bulgaria</option>
                <option value="HR">Croatia</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="USA">USA</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="GR">Greece</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IE">Ireland</option>
                <option value="IT">Italy</option>
                <option value="LV">Latvia</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MT">Malta</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="ME">Montenegro</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NO">Norway</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="ES">Spain</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="UA">Ukraine</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
              </select>
            </div>

            <button type="submit" style={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Pay'}
            </button>
          </form>

          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

          <div style={styles.securePaymentMessage}>
            <p><strong>Secure Payment:</strong> Your information is protected. We use industry-standard encryption (SSL) to ensure that all transactions are safe and secure. Your payment details are never shared and remain confidential throughout the process.</p>
          </div>
        </div>

        <div style={styles.billSummaryCard}>
          <h3>Bill Summary</h3>
          <p><strong>Patient ID:</strong> {patientId || 'N/A'}</p>
          <p><strong>Bill Amount:</strong> €{billAmount || '0.00'}</p>
          <p>Thank you for choosing our hospital for your care. Please ensure your payment information is correct before proceeding.</p>
        </div>
      </div>
    </div>
  );
}

// Styles for the form and the bill summary card
const styles = {
  container: {
    backgroundImage: 'url(/paay.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 20px',
    minHeight: '100vh',
  },
  profileInfo: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    textAlign: 'center',
    color: 'white',
  },
  profilePic: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  paymentContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '900px',
    width: '100%',
    gap: '20px',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '60%',
  },
  formHeader: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  cardInput: {
    width: '100%',
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    backgroundImage: 'url(/icons.jpg)', // Adding the icons.jpg as background
    backgroundPosition: 'right 10px center', // Positioning it in the right corner
    backgroundRepeat: 'no-repeat', // Ensuring the image doesn't repeat
    backgroundSize: '100px', // Adjust the size to fit well
  },
  inputGroupInline: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputInline: {
    width: '48%',
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#008CBA',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  errorMessage: {
    marginTop: '20px',
    color: 'red',
    textAlign: 'center',
  },
  billSummaryCard: {
    width: '30%',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  securePaymentMessage: {
    marginTop: '20px',
    backgroundColor: '#f0f9ff',
    padding: '15px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#555',
    textAlign: 'center',
  },
};

export default PaymentForm;
