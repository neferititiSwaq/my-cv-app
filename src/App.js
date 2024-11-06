import React, { useState } from 'react';
import CV from './components/CV';
import PDFDocument from './PDFDocument'; 
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}> {/* Apply dark or light class */}
      <button onClick={toggleDarkMode} style={{ marginBottom: '20px' }}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      
      <CV />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <PDFDownloadLink 
          document={<PDFDocument />} 
          fileName="my_cv.pdf"
          style={{
            textDecoration: 'none',
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download CV')}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
