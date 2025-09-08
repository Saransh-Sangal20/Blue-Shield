import React from "react";

const HelpDesk = ({signup}) => {
  return (
    <>
    {!signup &&
    (<div className="px-4 sm:px-6 lg:px-12 py-6 bg-[#2E4B93] min-h-full">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-yellow-400 mb-8">
        Help Desk
      </h1>

      {/* Intro */}
      <p className="text-center text-white max-w-2xl mx-auto mb-6 text-base sm:text-lg lg:text-xl">
        Welcome to the Blue Shield Help Desk. We are here to assist you with
        ocean safety, emergencies, and general inquiries. Please find the
        contact options below.
      </p>

      {/* Grid Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* General Inquiries */}
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">📞 Call Us</h3>
          <p className="text-blue-700 text-lg font-semibold">1800-123-456</p>
          <p className="text-gray-600 text-md mt-2">
            Available 24/7 for ocean hazard inquiries and emergencies.
          </p>
        </div>

        {/* Email Support */}
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">📧 Email Us</h3>
          <p className="text-blue-700 text-lg font-semibold">
            support@blueshield.in
          </p>
          <p className="text-gray-600 text-md mt-2">
            Our support team replies within 24 hours.
          </p>
        </div>

        {/* Office Location */}
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">📍 Visit Us</h3>
          <p className="text-blue-700 text-lg font-semibold">
            Blue Shield HQ, Mumbai
          </p>
          <p className="text-gray-600 text-md mt-2">
            Open Mon–Sat, 9:00 AM – 6:00 PM
          </p>
        </div>

        {/* Live Chat */}
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">💬 Live Chat</h3>
          <p className="text-blue-700 text-lg font-semibold">
            Available on our website
          </p>
          <p className="text-gray-600 text-md mt-2">
            Get instant answers from our support agents.
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">❓ FAQs</h3>
          <p className="text-blue-700 text-lg font-semibold">
            Find quick answers
          </p>
          <p className="text-gray-600 text-md mt-2">
            Visit our FAQ page for common questions.
          </p>
        </div>

        {/* Emergency */}
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">🚨 Emergency</h3>
          <p className="text-blue-700 text-lg font-semibold">Dial 112</p>
          <p className="text-gray-600 text-md mt-2">
            National emergency helpline for immediate assistance.
          </p>
        </div>
      </div>
    </div>)}
    </>
  );
};

export default HelpDesk;