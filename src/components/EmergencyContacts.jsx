import React from "react";

const EmergencyContacts = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10 bg-[#2E4B93]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-10">
        Emergency Contact Information
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 mb-2">
            📞 National Emergency Helpline
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-blue-700 ml-7">
            112
          </p>
          <p className="text-gray-600 text-sm sm:text-md mt-2 ml-7">
            For all types of emergencies across India.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 mb-2">
            🚑 Disaster Management
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-blue-700 ml-7">
            108
          </p>
          <p className="text-gray-600 text-sm sm:text-md mt-2 ml-7">
            Immediate disaster response and medical help.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 mb-2">
            ⚓ Coast Guard Helpline
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-blue-700 ml-7">
            1554
          </p>
          <p className="text-gray-600 text-sm sm:text-md mt-2 ml-7">
            For ocean and coastal emergencies.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 mb-2">
            🔥 Fire & Rescue
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-blue-700 ml-7">
            101
          </p>
          <p className="text-gray-600 text-sm sm:text-md mt-2 ml-7">
            Report fire hazards and request rescue support.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 mb-2">
            🚨 Ambulance
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-blue-700 ml-7">
            102
          </p>
          <p className="text-gray-600 text-sm sm:text-md mt-2 ml-7">
            Emergency ambulance services.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 mb-2">
            👮 Police Helpline
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-blue-700 ml-7">
            100
          </p>
          <p className="text-gray-600 text-sm sm:text-md mt-2 ml-7">
            For law enforcement and immediate police assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
