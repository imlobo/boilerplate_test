import { useState, useEffect } from 'react';

const Popup = ({ displayTime, displayPeriod, frequency, pageUrl, linkUrl, linkText, customText }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const now = new Date().getTime();
    const lastShown = localStorage.getItem('lastPopupTime');
    const lastShownTime = lastShown ? parseInt(lastShown, 10) : 0;

    if (now - lastShownTime >= frequency * 1000) {
      setShowPopup(true);
      localStorage.setItem('lastPopupTime', now);
      setTimeout(() => setShowPopup(false), displayPeriod * 1000);
    }
  }, [frequency, displayPeriod]);

  if (typeof window !== 'undefined' && window.location.pathname !== pageUrl) {
    return null;
  }

  return showPopup ? (
    <div style={popupStyles}>
      <p>{customText}</p>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={linkStyles}>
        {linkText}
      </a>
      <button onClick={() => setShowPopup(false)} style={buttonStyles}>Close</button>
    </div>
  ) : null;
};

const popupStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '20px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
};

const linkStyles = {
  display: 'block',
  marginTop: '10px',
  color: '#0070f3',
  textDecoration: 'none',
};

const buttonStyles = {
  marginTop: '10px',
  padding: '5px 10px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '3px',
};

export default Popup;
