import React, { Component } from "react";

export default class HazardReportForm extends Component {
  render() {
    return (
      <section className="w-full">
        {/* Container */}
        <div className="max-w-9xl mx-auto bg-white rounded-xl p-10">
          {/* Title */}
          <h1 className="text-4xl font-bold text-[#2E4B93] mb-8 border-b-2 pb-4">
            Report an Ocean Hazard
          </h1>

          {/* Two-column layout (desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* LEFT COLUMN (Form Inputs) */}
            <div className="space-y-8">
              
              {/* Hazard Type */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-700">
                  Hazard Type
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Select hazard type</option>
                  <option value="tsunami"> Tsunami</option>
                  <option value="flood"> Flood</option>
                  <option value="storm"> Storm Surge</option>
                  <option value="oilspill">Oil Spill</option>
                </select>
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-700">
                  Detailed Description
                </label>
                <textarea
                  rows="6"
                  placeholder="Provide details about the hazard, including observations, scale, and immediate impact..."
                  className="w-full border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-lg font-semibold mb-3 text-gray-700">
                  Upload Photos/Videos (Optional)
                </label>
                <input  type="file" id="input_file" className="w-full border-2 border-solid border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition">
                </input>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Report
              </button>
            </div>

            {/* RIGHT COLUMN (Map Section) */}
            <div className="flex flex-col items-center justify-center pb-11 mb-8">
              <div className="w-full bg-[#5a91ce] rounded-lg flex flex-col justify-center items-center shadow-inner" style={{height: "220px"}}>
                <p className="text-white mb-4 text-2xl">
                  Click to select location on map
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
                  Open Map
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
