import React, { useEffect, useState } from "react";

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);

  // Simulated fetch – replace with real API later
  useEffect(() => {
    const dummyPosts = [
      "⚠️ Cyclone alert issued in Andhra Pradesh. Stay indoors and avoid coastal areas.",
      "🌊 High tide warning for Maharashtra coast today evening. Fishermen advised not to venture.",
      "🚨 Severe storm predicted in Odisha in the next 24 hours. Evacuations in low-lying areas.",
      "📢 NDRF deployed in West Bengal ahead of expected heavy rains and flooding.",
      "🌀 IMD warns of possible cyclone development in Bay of Bengal. Monitoring closely.",
      "⚡ Heavy rainfall alert in Kerala with risk of landslides in hilly regions.",
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div className="mt-4 bg-white border rounded-xl shadow p-4 h-64 overflow-hidden flex flex-col">
      <style>
        {`
          @keyframes scroll-up {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-100%); }
          }
          .animate-scroll-up {
            animation: scroll-up 25s linear infinite;
          }
        `}
      </style>

      {/* Title */}
      <h2 className="text-lg font-bold text-blue-800 border-b pb-2 mb-2">
        Latest Hazard Updates
      </h2>

      {/* Scrolling feed */}
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-scroll-up space-y-4">
          {posts.concat(posts).map((post, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-gray-700 shadow-sm"
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
