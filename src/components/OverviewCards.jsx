import React from "react";

function OverviewCards({ darkMode }) {
  const overviewData = [
    {
      id: 1,
      title: "Page Views",
      platform: "facebook",
      icon: "/images/facebookicon.svg",
      count: "87",
      percentage: "3%",
      up: true,
    },
    {
      id: 2,
      title: "Likes",
      platform: "facebook",
      icon: "/images/facebookicon.svg",
      count: "52",
      percentage: "2%",
      up: false,
    },
    {
      id: 3,
      title: "Likes",
      platform: "instagram",
      icon: "/images/instagramicon.svg",
      count: "5462",
      percentage: "2257%",
      up: true,
    },
    {
      id: 4,
      title: "Profile Views",
      platform: "instagram",
      icon: "/images/instagramicon.svg",
      count: "52k",
      percentage: "1375%",
      up: true,
    },
    {
      id: 5,
      title: "Retweets",
      platform: "twitter",
      icon: "/images/twittericon.svg",
      count: "117",
      percentage: "303%",
      up: true,
    },
    {
      id: 6,
      title: "Likes",
      platform: "twitter",
      icon: "/images/twittericon.svg",
      count: "507",
      percentage: "553%",
      up: true,
    },
    {
      id: 7,
      title: "Likes",
      platform: "youtube",
      icon: "/images/youtubeicon.svg",
      count: "107",
      percentage: "19%",
      up: false,
    },
    {
      id: 8,
      title: "Total Views",
      platform: "youtube",
      icon: "/images/youtubeicon.svg",
      count: "1407",
      percentage: "12%",
      up: false,
    },
  ];

  return (
    <div className="mt-12">
      <h2
        className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}
      >
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.map((item) => (
          <div
            key={item.id}
            className="bg-[#252a41] text-white rounded-md p-6 cursor-pointer transition-all"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-slate-400">
                {item.title}
              </span>
              <img src={item.icon} alt={item.platform} className="w-5 h-5" />
            </div>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold">{item.count}</span>
              <span
                className={`text-xs font-bold ${item.up ? "text-emerald-500" : "text-red-500"}`}
              >
                {item.up ? "▲" : "▼"} {item.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewCards;
