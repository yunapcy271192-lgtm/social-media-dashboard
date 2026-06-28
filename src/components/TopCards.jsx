import React from "react";

function topCards({ darkMode }) {
  const cardsData = [
    {
      id: 1,
      platform: "facebook",
      icon: "/images/facebookicon.svg",
      handle: "@nathanf",
      count: "1987",
      label: "FOLLOWERS",
      today: "+12 Today",
      up: true,
      border: "border-t-4 border-blue-500",
    },
    {
      id: 2,
      platform: "twitter",
      icon: "/images/twittericon.svg",
      handle: "@nathanf",
      count: "1044",
      label: "FOLLOWERS",
      today: "+99 Today",
      up: true,
      border: "border-t-4 border-blue-500",
    },
    {
      id: 3,
      platform: "instagram",
      icon: "/images/instagramicon.svg",
      handle: "@realnathanf",
      count: "11k",
      label: "FOLLOWERS",
      today: "+1099 Today",
      up: true,
      border: "border-t-4 border-pink-500",
    },
    {
      id: 4,
      platform: "youtube",
      icon: "/images/youtubeicon.svg",
      handle: "nathan F",
      count: "8239",
      label: "SUBSCRIBERS",
      today: "-144 Today",
      up: false,
      border: "border-t-4 border-red-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className={`bg-[#252a41] text-white rounded-md p-6 cursor-pointer transition-all ${card.border}`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={card.icon} alt={card.platform} className="w-5 h-5" />
            <span className="text-sm font-bold text-slate-500">
              {card.handle}
            </span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-1">
            {card.count}
          </h2>
          <p className="text-xs tracking-[4px] text-slate-400 font-bold mb-6">
            {card.label}
          </p>
          <span
            className={`text-xs font-bold ${card.up ? "text-emerald-500" : "text-red-500"}`}
          >
            {card.today}
          </span>
        </div>
      ))}
    </div>
  );
}

export default topCards;
