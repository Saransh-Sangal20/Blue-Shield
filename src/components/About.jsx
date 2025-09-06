import React from "react";

const InfoCircle = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-64 h-64 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
        {icon}
      </div>
      <div className="mt-4 text-xl font-semibold text-white">{title}</div>
      <div className="mt-1 text-white/90 max-w-xs">{description}</div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-[#2E4B93]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-6">
          About BlueShield
        </h1>
        <p className="text-white text-xl leading-relaxed text-center max-w-5xl mx-auto">
          BlueShield is an integrated platform designed to protect communities from Ocean-related Hazards such as Tsunamis, 
          Storm surges, Floods, and High waves.  
          Our mission is to provide Real-Time Alerts (RTA's), Reliable Information, and a space for citizens to report Hazards directly.  
          Unlike traditional systems, 
          BlueShield combines official early-warning services with crowdsourced reports and social media insights, ensuring faster awareness and stronger community resilience.  
          Together, we can save lives by making ocean safety a shared responsibility.

        </p>
      </section>

      {/* Infographic row */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start justify-items-center">
            <InfoCircle
              title="Hazard Alerts"
              description={null}
              icon={
                <img
                  src="https://media.istockphoto.com/id/1306854918/vector/natural-disasters-tsunami-natural-strong-disaster-with-rain-tsunami-water-waves-covering-the.jpg?s=612x612&w=0&k=20&c=NAo4ZKXQzJod2QPl5n7SH12binZv0GWvL9t2B9Ok2Ug="
                  alt="Multi-hazard"
                  className="relative w-72 h-72 rounded-full overflow-hidden bg-white"
                  loading="lazy"
                  decoding="async"
                />
              }
            />

<InfoCircle
              title="Geo-tagged Reports"
              description={null}
              icon={
                <img
                  src="https://sachet.ndma.gov.in/imm/alerticon/geotargeted.png"
                  alt="Multi-hazard"
                  className="relative w-72 h-72 rounded-full overflow-hidden bg-white"
                  loading="lazy"
                  decoding="async"
                />
              }
            />

<InfoCircle
              title="Multilingual Support"
              description={null}
              icon={
                <img
                  src="https://sachet.ndma.gov.in/imm/alerticon/multilingual-min.png"
                  alt="Multi-hazard"
                  className="relative w-72 h-72 rounded-full overflow-hidden bg-white"
                  loading="lazy"
                  decoding="async"
                />
              }
            />

<InfoCircle
              title="Multi-Channel Updates"
              description={null}
              icon={
                <img
                  src="https://sachet.ndma.gov.in/imm/alerticon/multi-min.png"
                  alt="Multi-hazard"
                  className="relative w-72 h-72 rounded-full overflow-hidden bg-white"
                  loading="lazy"
                  decoding="async"
                />
              }
            />
          </div>
        </div>
      </section>

      {/* BlueShield Features */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2E4B93] mb-10">
            BlueShield Smart Alert Network
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-[#2E4B93] flex items-center gap-2">
                📲 SMS Alerts
              </h3>
              <p className="mt-2 text-gray-700">
                Instant disaster alerts delivered via SMS to ensure coastal
                communities receive life-saving warnings directly on their phones.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-[#2E4B93] flex items-center gap-2">
                📱 Mobile Application
              </h3>
              <p className="mt-2 text-gray-700">
                Access real-time weather updates, interactive hazard maps, and
                multi-location alert subscriptions—all in one easy-to-use app.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-[#2E4B93] flex items-center gap-2">
                🔔 Browser Notifications
              </h3>
              <p className="mt-2 text-gray-700">
                Receive instant pop-up alerts on your desktop browser (Chrome,
                Firefox, Edge) for fast updates, even while browsing other sites.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-[#2E4B93] flex items-center gap-2">
                📰 RSS Feed & API
              </h3>
              <p className="mt-2 text-gray-700">
                BlueShield provides RSS feeds and APIs so agencies, apps, and media
                platforms can integrate and disseminate alerts further.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-[#2E4B93] flex items-center gap-2">
                📢 Community Reporting
              </h3>
              <p className="mt-2 text-gray-700">
                Citizens can report hazards they witness. Reports are geo-tagged and
                verified to strengthen local response and save lives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-[#2E4B93] flex items-center gap-2">
                📊 Social Media Analytics
              </h3>
              <p className="mt-2 text-gray-700">
                BlueShield scans social media for early signals of ocean hazards using
                AI-powered sentiment and keyword analysis for quick verification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
