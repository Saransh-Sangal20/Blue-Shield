import React from 'react';

const AlertTypeButtons = ({ activeAlert, setActiveAlert }) => {
  const alertTypes = [
    {
      id: 'current-location',
      title: 'CURRENT LOCATION ALERT',
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'all-india',
      title: 'ALL INDIA HAZARD ALERT',
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'state-wise',
      title: 'STATE WISE HAZARD ALERT',
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 'forecast',
      title: 'WEATHER FORECAST',
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    }
  ];

  return (
    <div className="border-2 border-gray-300 rounded-xl shadow-md p-2 h-50">
      <div className="flex flex-col space-y-1">
        {alertTypes.map((alertType) => (
          <button
            key={alertType.id}
            onClick={() => setActiveAlert(alertType.id)}
            className={`flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-200 w-64
              ${activeAlert === alertType.id
                ? 'border-yellow-500 bg-yellow-500 text-black scale-95'
                : 'border-blue-200 bg-blue-600 text-white hover:border-blue-700 hover:bg-blue-700 hover:shadow-md'}
            `}
          >
            <div className={`mb-2 ${activeAlert === alertType.id ? 'text-blue-600' : 'text-gray-300'}`}>
              {alertType.icon}
            </div>
            <span className="text-sm font-medium text-center leading-tight">
              {alertType.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlertTypeButtons;
