import React from "react";

const SafetyGuide = ({ signup }) => {
  return (
    <>
      {!signup && (
        <div className="px-4 sm:px-6 lg:px-12 py-7 bg-[#2E4B93] min-h-full">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-yellow-400 mb-10">
            Safety Guide
          </h1>

          {/* Intro */}
          <p className="text-center text-white max-w-3xl mx-auto mb-12 text-base sm:text-lg lg:text-xl">
            Staying safe around oceans and coastal regions is our top priority.
            Follow these essential safety guidelines to protect yourself and others 
            while enjoying the sea.
          </p>

          {/* Grid of Safety Tips */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tip 1 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                🦺 Wear Life Jackets
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Always wear certified life jackets when on boats, during water 
                sports, or in deep waters.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                🌊 Check Weather
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Monitor local weather forecasts before heading out. Avoid the sea 
                during storms or strong tides.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                🚫 No Swimming Zones
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Respect restricted areas marked by warning signs. These zones are 
                unsafe due to strong currents or marine life.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                🐠 Marine Awareness
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Avoid disturbing marine life. Keep safe distance from jellyfish, 
                sharks, and corals.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                🆘 Emergency Numbers
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Save important emergency helplines such as 112, 101, and Coast 
                Guard assistance before heading out.
              </p>
            </div>

            {/* Tip 6 */}
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                👨‍👩‍👧 Stay Together
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Never swim alone. Always stay with a group and inform someone of 
                your location.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SafetyGuide;
