import { useState, useEffect } from 'react';

const Popup = ({ displayTime, displayPeriod, frequency, pageUrl }) => {
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
      <p>Scheduled Popup Message</p>
      <button onClick={() => setShowPopup(false)}>Close</button>
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
};

export default Popup;
