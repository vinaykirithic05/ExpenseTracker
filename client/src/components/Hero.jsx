// Hero.jsx
import React from "react";
import {
  BotMessageSquare,
  ArrowRight,
  CirclePlay,
  TrendingUp,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Hero = () => {
  const links = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
  ];
  const data = [
    { month: "Jan", expenses: 4400 },
    { month: "Feb", expenses: 3400 },
    { month: "Mar", expenses: 6560 },
    { month: "Apr", expenses: 7100 },
    { month: "May", expenses: 2900 },
    { month: "Jun", expenses: 1400 },
  ];
  return (
    <div className="w-full min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 px-6 md:px-16">
      {/* Left Column */}
      <div className="flex flex-col flex-start space-y-8">
        {/* Floating Top Badge */}
        <div className="inline-flex w-fit items-center gap-2 px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-label-sm uppercase tracking-widest font-bold">
          <BotMessageSquare className="w-4 h-4" /> AI - Powered Insights Now
          Live
        </div>
        {/* Large Main Heading */}
        <h1 className="text-4xl font-display-lg sm:text-6xl font-black text-on-surface leading-[1.1] tracking-tight">
          Track Every{" "}
          <span className="bg-linear-to-r from-primary via-[#a5f3fc] to-secondary bg-clip-text text-transparent">
            Rupee
          </span>
          . Save Smarter.
        </h1>
        <p className="text-on-surface font-body-md text-sm max-w-lg leading-relaxed">
          The modern operating system for your personal finanaces.Automate your
          expenses, visualize wealth growth, and reach your goals 3x faster with
          BudgetFlow.
        </p>
        {/* Action Button */}
        <div className="flex items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button className="flex justify-center items-center gap-2 px-6 py-3.5 bg-primary text-on-primary hover:bg-primary-container rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer">
            Start Saving Now <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex justify-center items-center gap-2 px-6 py-3.5 bg-surface-container-high border border-white/10 hover:bg-white/5 rounded-xl font-bold text-on-surface transition-all duration-300 cursor-pointer">
            <CirclePlay /> Watch Demo
          </button>
        </div>
        {/* Avatars */}
        <div className="flex gap-4  items-center pt-4 border-t border-white/5 w-full">
          <div className="flex -space-x-3">
            {links.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-xs text-on-surface-variant font-medium">
            Joinded by 10,000+ Individuals
          </p>
        </div>
      </div>
      {/* Right Column */}
      <div className="relative w-full flex items-center justify-center lg:justify-end">
        {/* Glow Sphere around */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[350px] h-[350px] bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none animate-pulse"></div>
        {/* The Interactive Glass card */}
        <div className="glass-card  rounded-2xl w-full max-w-[460px] relative p-6  shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-t border-white/15 scale-95  hover:scale-100 hover:rotate-1 transition-all duration-500 group">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                Balance Trend
              </p>
              <h4 className="text-xl font-bold font-mono-data mt-1 text-on-surface">
                ₹{data.reduce((total,item)=> total + item.expenses,0).toLocaleString("en-IN")}
              </h4>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold">
              <TrendingUp className="w-3 h-3" /> + 18.5%
            </div>
          </div>
          {/* Graph Mockup */}
          <div className="h-40 w-full relative mb-4">
            <h2 className="text-[10px] uppercase font-mono-data tracking-widest font-bold text-on-surface-variant" >Monthly Expenses</h2>
            <ResponsiveContainer className="mt-5">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                        type='monotone'
                        dataKey='expenses'
                        stroke="#10b981"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
