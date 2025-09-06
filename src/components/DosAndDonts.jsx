import React, { useState } from 'react';

const Chip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 mr-2 mb-3 ${
      active ? 'bg-blue-600 text-white border-blue-600 shadow' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
    }`}
  >
    {label}
  </button>
);

const LanguageChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 mr-2 mb-3 ${
      active ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
    }`}
  >
    {label}
  </button>
);

const Bullet = ({ children }) => (
  <li className="flex">
    <span className="mt-2 mr-3 w-2 h-2 bg-gray-800 rounded-full"></span>
    <span className="text-gray-800 leading-7">{children}</span>
  </li>
);

const cycloneThumbnails = [
  'https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2020/06/cyclo.jpg',
  'https://media.telanganatoday.com/wp-content/uploads/2021/05/cyclone-yaas.jpg',
  'https://assets.telegraphindia.com/telegraph/45f7e88d-e4c0-4574-b5fc-e7e5b69c1662.jpg',
  'https://i.ytimg.com/vi/NJjTyAxDpt8/maxresdefault.jpg',
  'https://img.theweek.in/content/dam/week/news/2020/images/2022/2/10/Super-Cyclone-Tornado-forming-destruction-Severe-hurricane-storm-weather-clouds-shut.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eFMATC2JiRIxGd6KzFQZeSkPYZGf8gsQnw&s'
];

const getBackupCycloneImageUrl = (seed) => {
  // Backup: picsum (not cyclone-specific but guarantees an image)
  return `https://picsum.photos/seed/cyclone-${seed}/800/450`;
};

const DosAndDonts = () => {
  const events = ['Cyclones','Tsunamis','Avalanches','Cold Wave','Heat Waves','Lightning','Floods','Earthquakes'];
  const languages = ['English','हिन्दी','বাংলা','ગુજરાતી','ಕನ್ನಡ','മലയാളം','मराठी','ଓଡିଆ','ਪੰਜਾਬੀ','தமிழ்','తెలుగు','অসমীয়া'];
  const [activeEvent, setActiveEvent] = useState('Cyclones');
  const [activeLang, setActiveLang] = useState('English');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Dos and Don'ts</h1>

      {/* Search and Event Chips */}
      <div className="flex items-center mb-3">
        <span className="mr-3 font-semibold text-gray-700">Events:</span>
        <div className="flex-1">
          <div className="flex flex-wrap">
            {events.map(e => (
              <Chip key={e} label={e} active={activeEvent === e} onClick={() => setActiveEvent(e)} />
            ))}
          </div>
        </div>
      </div>

      {/* Language Chips */}
      <div className="mb-6">
        {languages.map(l => (
          <LanguageChip key={l} label={l} active={activeLang === l} onClick={() => setActiveLang(l)} />
        ))}
      </div>

      {/* Two-column guideline cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 h-full flex flex-col">
          <h2 className="text-center font-extrabold text-gray-900 tracking-wide border-b pb-3 mb-4">CYCLONE</h2>
          <h3 className="font-bold text-gray-900 mb-3">BEFORE CYCLONE</h3>
          <ul className="space-y-1">
            <Bullet>Ignore rumours, stay calm, don’t panic.</Bullet>
            <Bullet>Keep phones charged for emergency communication; use SMS.</Bullet>
            <Bullet>Listen to radio/TV; read newspapers for weather updates.</Bullet>
            <Bullet>Keep documents and valuables in water-proof containers.</Bullet>
            <Bullet>Stay in an empty room; keep movable items securely tied.</Bullet>
            <Bullet>Prepare an emergency kit with essentials for safety and survival.</Bullet>
            <Bullet>Secure your house, especially the roof; repair damages; remove sharp objects.</Bullet>
          </ul>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 h-full flex flex-col">
          <h2 className="text-center font-extrabold text-gray-900 tracking-wide border-b pb-3 mb-4">CYCLONE</h2>
          <ul className="space-y-1">
            <Bullet>Keep cattle/animals untied to ensure their safety.</Bullet>
            <Bullet>In case of storm surge/tide warning or flooding, know the nearest safe high ground/safe shelter and the safest access route to it.</Bullet>
            <Bullet>Store adequate ready‑to‑eat food and water to last at least a week.</Bullet>
            <Bullet>Conduct mock drills for your family and community.</Bullet>
            <Bullet>Trim branches near your house with local authority permission.</Bullet>
            <Bullet>Close doors and windows securely.</Bullet>
            <Bullet>Evacuate immediately to safe places when directed by officials.</Bullet>
          </ul>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Video Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative bg-gray-100">
                <img
                  src={cycloneThumbnails[(i - 1) % cycloneThumbnails.length]}
                  alt="Cyclone preparedness video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = getBackupCycloneImageUrl(i); }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-red-600 rounded-md flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 font-medium">#Cyclone | Preparedness Video {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DosAndDonts;
