import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">OHRP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">OCEAN HAZARD REPORTING PLATFORM</div>
                  <div className="text-gray-600">GOVERNMENT OF INDIA</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">G20</span>
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                  <span className="text-orange-600 text-xs font-bold">75</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs">🇮🇳</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 gap-3">
                <select className="text-sm border-none bg-transparent text-gray-600 focus:outline-none">
                  <option>A</option>
                  <option>A+</option>
                  <option>A++</option>
                </select>
                
                
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </button>
                
                <a href="#main" className="text-sm text-gray-600 hover:text-gray-900">Skip to main content</a>
                
                <select className="text-sm border-none bg-transparent text-gray-600 focus:outline-none">
                  <option>English</option>
                  <option>हिन्दी</option>
                </select>
              </div>
              <div>
                <button className="px-3 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200">
                  Sign Up / Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-ndma-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-white">
                <div className="text-3xl font-bold">BLUE-SHIELD</div>
                <div className="text-sm uppercase tracking-wide">NATIONAL OCEAN HAZARD REPORTING PLATFORM</div>
              </div>
            </div>
            
            <nav className="flex items-center space-x-1">
              <Link 
                to="/" 
                className={`flex items-center space-x-1 px-4 py-2 rounded ${
                  location.pathname === '/' 
                    ? 'text-white bg-blue-500' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-sm uppercase font-medium">HOME</span>
              </Link>
              
              <Link 
                to="/dashboard" 
                className={`flex items-center space-x-1 px-4 py-2 rounded ${
                  location.pathname === '/dashboard' 
                    ? 'text-white bg-blue-500' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="text-sm uppercase font-medium">DASHBOARD</span>
              </Link>

              <Link 
                to="/about" 
                className={`flex items-center space-x-1 px-4 py-2 rounded ${
                  location.pathname === '/about' 
                    ? 'text-white bg-blue-500' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                </svg>
                <span className="text-sm uppercase font-medium">ABOUT</span>
              </Link>
              
              
              
              <Link 
                to="/dos" 
                className={`flex items-center space-x-1 px-4 py-2 rounded ${
                  location.pathname.startsWith('/dos')
                    ? 'text-white bg-blue-500' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm uppercase font-medium">SAFETY GUIDE</span>
              </Link>
              

              <Link 
                to="/contact" 
                className={`flex items-center space-x-1 px-4 py-2 rounded ${
                  location.pathname === '/contact' 
                    ? 'text-white bg-blue-500' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm uppercase font-medium">HELP DESK</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
