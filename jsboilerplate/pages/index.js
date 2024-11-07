import Popup from '../components/Popup';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js Popup Example</h1>
      <Popup
        displayTime={5} // Time in seconds to display the popup
        displayPeriod={10} // Duration in seconds to show the popup
        frequency={60} // Frequency in seconds to display the popup again
        pageUrl="/*" // URL path where the popup should appear
      />
    </div>
  );
}

