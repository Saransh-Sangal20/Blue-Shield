import './EarthquakeBanner.css';
import React from 'react';

const EarthquakeBanner = () => {
  const hazards = [
    { type: "Cyclone", state: "Odisha", severity: "Severe", date: "2025-09-05 08:30 GMT", icon: "🌀" },
    { type: "Flood", state: "Assam", severity: "Extreme", date: "2025-09-04 05:00 GMT", icon: "🌊" },
    { type: "Storm", state: "Tamil Nadu", severity: "Moderate", date: "2025-09-03 14:45 GMT", icon: "🌬️" },
    { type: "Tsunami Alert", state: "Andaman & Nicobar Islands", severity: "Mild", date: "2025-09-02 12:15 GMT", icon: "🌊⚠️" },
    { type: "Flood", state: "Kerala", severity: "Moderate", date: "2025-09-01 09:00 GMT", icon: "🌧️" },
    { type: "Cyclone", state: "West Bengal", severity: "Severe", date: "2025-08-31 11:30 GMT", icon: "🌀" },
    { type: "Storm", state: "Goa", severity: "Moderate", date: "2025-08-30 16:00 GMT", icon: "🌬️" },
    { type: "Flood", state: "Bihar", severity: "Extreme", date: "2025-08-29 07:45 GMT", icon: "🌊" },
    { type: "Cyclone", state: "Andhra Pradesh", severity: "Severe", date: "2025-08-28 10:15 GMT", icon: "🌀" },
    { type: "Storm", state: "Maharashtra", severity: "Moderate", date: "2025-08-27 13:30 GMT", icon: "🌬️" }
  ];

  // Duplicate the hazards array to create a seamless loop
  const duplicatedHazards = [...hazards, ...hazards];

  return (
    <div className="bg-gray-800 border-t-2 border-alert-orange overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          <div className="flex items-center space-x-3 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-alert-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm uppercase">Recent Hazards</span>
            </div>
            
            <div className="marquee-container">
              <div className="marquee-content">
                {duplicatedHazards.map((hazard, index) => (
                  <div key={index} className="flex items-center space-x-2 whitespace-nowrap mx-8">
                    <span className="text-sm">{hazard.icon}</span>
                    <span className="text-sm">{hazard.type}</span>
                    <span className="text-sm">|</span>
                    <span className="text-sm">{hazard.state}</span>
                    <span className="text-sm">|</span>
                    <span className="text-sm font-semibold">{hazard.severity}</span>
                    <span className="text-sm">|</span>
                    <span className="text-sm">{hazard.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeBanner;