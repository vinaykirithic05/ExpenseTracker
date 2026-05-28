import React from "react";

const Stats = () => {
  const stat = [
    { top: "₹1.2M+", desc: "capital tracked", color: "text-primary" },
    { top: "10K+", desc: "active users", color: "text-secondary" },
    { top: "98%", desc: "satisfication rate", color: "text-secondary" },
    { top: "35%", desc: "avg. Saving Boost", color: "text-primary" },
  ];
  return (
    <div className="w-full h-[200px] mb-10  py-12 bg-surface-container-lowest flex jusitfy-between items-center border-y border-white/5">
      <div className="w-full max-w-7xl px-6 md:px-16 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center ">
        {stat.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <span
              className={`${item.color} text-3xl md:text-4xl font-black tracking-tighter font-mono-data`}
            >
              {item.top}
            </span>
            <span className="text-[10px] uppercase md:text-xs tracking-widest text-on-surface-variant font-label-sm mt-2">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
