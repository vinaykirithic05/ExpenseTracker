import { CircleCheckBig } from "lucide-react";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const monthlyData = [
    { name: "JAN", value: 40 },
    { name: "FEB", value: 58 },
    { name: "MAR", value: 45 },
    { name: "APR", value: 85 },
    { name: "MAY", value: 52 },
    { name: "JUN", value: 68 },
    { name: "JUL", value: 95 },
  ];

  const yearlyData = [
    { name: "2021", value: 35 },
    { name: "2022", value: 60 },
    { name: "2023", value: 92 },
    { name: "2024", value: 50 },
    { name: "2025", value: 98 },
  ];

  const currentData = activeTab === "monthly" ? monthlyData : yearlyData;

  return (
    <div className="w-full bg-background py-20 flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left column */}
        <div className="flex flex-col text-left space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight font-display-lg leading-[1.15]">
            Interactive Visual Analytics
          </h2>
          <p className="text-sm text-primary/60 font-body-md leading-relaxed max-w-xl">
            Stop guessing where your money goes. Our high-fidelity visualization
            suite provides a 360-degree view of your financial health.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <CircleCheckBig className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface font-display-lg tracking-tight">
                  Dynamic Pie Charts
                </h4>
                <p className="text-xs md:text-sm text-on-surface-variant font-body-md mt-1 leading-relaxed">
                  Instant breakdown of category spending with drill-down capability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <CircleCheckBig className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface font-display-lg tracking-tight">
                  Glow Path Line Charts
                </h4>
                <p className="text-xs md:text-sm text-on-surface-variant font-body-md mt-1 leading-relaxed">
                  Track net worth and cash flow trends over months or years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] bg-surface-container rounded-3xl border border-white/5 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-primary/30">
            
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-sm font-bold text-on-surface font-display-lg tracking-tight">
                Wealth Trajectory
              </h2>
              
              <div className="flex items-center gap-1 bg-surface-container-lowest/80 p-1 rounded-full border border-white/5">
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold font-label-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === "monthly"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab("yearly")}
                  className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold font-label-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === "yearly"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Graph */}
            <div className="w-full h-60 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData} barSize={34}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#86948a",
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: "Geist, monospace",
                    }}
                    dy={12}
                  />
                  <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                    {currentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.name === "APR"
                            ? "url(#mediumGreenGradient)"
                            : entry.name === "JUL" || entry.name === "2023" || entry.name === "2025"
                            ? "url(#vibrantGreenGradient)"
                            : "url(#mutedGrayGradient)"
                        }
                      />
                    ))}
                  </Bar>

                  {/* Premium Ambient Colors Definition */}
                  <defs>
                    <linearGradient
                      id="mutedGrayGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#242424" />
                      <stop offset="100%" stopColor="#181818" />
                    </linearGradient>

                    <linearGradient
                      id="mediumGreenGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3c9d74" />
                      <stop offset="100%" stopColor="#1e4e3a" />
                    </linearGradient>

                    <linearGradient
                      id="vibrantGreenGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#4edea3" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Showcase;
