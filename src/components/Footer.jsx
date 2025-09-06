import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* About BlueShield */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About BlueShield</h3>
            <p className="text-sm text-gray-200">
              BlueShield is a next-gen ocean hazard alert platform combining real-time alerts, 
              community reporting, and social media intelligence to build safer coastal communities.  
            </p>
            {/* Social media links */}
            <div className="flex space-x-4 mt-4">
              <a href="/" className="hover:text-yellow-400 text-xl">🌐</a>
              <a href="/" className="hover:text-yellow-400 text-xl">🐦</a>
              <a href="/" className="hover:text-yellow-400 text-xl">📘</a>
              <a href="/" className="hover:text-yellow-400 text-xl">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-400">About</a></li>
              <li><a href="/" className="hover:text-yellow-400">FAQs</a></li>
              <li><a href="/" className="hover:text-yellow-400">Help Desk</a></li>
              <li><a href="/" className="hover:text-yellow-400">Privacy & Policy</a></li>
              <li><a href="/" className="hover:text-yellow-400">Feedback</a></li>
            </ul>
          </div>

          {/* Partner Agencies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partner Agencies</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white text-[#2E4B93] rounded-lg px-3 py-2 font-bold shadow">NDMA</div>
              <div className="bg-white text-[#2E4B93] rounded-lg px-3 py-2 font-bold shadow">IMD</div>
              <div className="bg-white text-[#2E4B93] rounded-lg px-3 py-2 font-bold shadow">CWC</div>
              <div className="bg-white text-[#2E4B93] rounded-lg px-3 py-2 font-bold shadow">INCOIS</div>
            </div>
          </div>
        </div>

        {/* Visitor Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-10">
          <div className="bg-white text-gray-900 rounded-lg p-3 shadow">
            <p className="text-lg font-bold">👤 246</p>
            <p className="text-xs">Today's Visitors</p>
          </div>
          <div className="bg-white text-gray-900 rounded-lg p-3 shadow">
            <p className="text-lg font-bold">283492</p>
            <p className="text-xs">Total Visitors</p>
          </div>
          <div className="bg-white text-gray-900 rounded-lg p-3 shadow">
            <p className="text-lg font-bold">17 Mar 2025</p>
            <p className="text-xs">Last Updated</p>
          </div>
          <div className="bg-white text-gray-900 rounded-lg p-3 shadow">
            <p className="text-lg font-bold">v2.4.2</p>
            <p className="text-xs">Version</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-4 text-center text-sm text-gray-200">
          <p>© 2025 BlueShield | Designed for Community Safety</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
