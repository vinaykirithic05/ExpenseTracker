import React from "react";
import {
  Wallet,
  CalendarClock,
  LineChart,
  Flag,
  FileText,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const tools = [
    {
      icon: <Wallet className = 'w-5 h-5 text-primary' />,
      title: "Expense Tracking",
      desc: "Real-time recording of every transcation with automated categorization",
    },
    {
      icon: <CalendarClock className = 'w-5 h-5 text-primary' />,
      title: "Budget Planning",
      desc: "Create custim envelopes and multi-category budgets that adapts to your life",
    },
    {
      icon: <LineChart className = 'w-5 h-5 text-primary' />,
      title: "Smart Analytics",
      desc: "Deep dive into your spending habits with interactive charts and trend lines",
    },
    {
      icon: <Flag className = 'w-5 h-5 text-primary' />,
      title: "Savings Goals",
      desc: "Set milestones and visualize your journey towards big purchases",
    },
    {
      icon: <FileText className = 'w-5 h-5 text-primary' />,
      title: "Financial Reports",
      desc: "Monthly and annual statements generated automatically for your review",
    },
    {
      icon: <Sparkles className = 'w-5 h-5 text-primary' />,
      title: "AI Spending Insights",
      desc: "Predictive modeling that alerts you to unusual spendig patterns",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 text-center">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl text-on-surface font-black tracking-tight">
          Precision Financial Tools
        </h1>
        <p className="mt-3 text-[10px] md:text-xs text-primary ">
          Master your money with our suite of advanced features designed for
          clarity and growth
        </p>
      </div>
      <div className=" w-full max-w-7xl px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 ">
        {tools.map((tool, index) => (
          <div className="w-full min-h-[200px] p-8 rounded-2xl bg-surface-container-lowest/40 border border-white/5 hover:border-primary/40 hover:bg-surface-container-lowest/80 transition-all duration-300 flex flex-col items-start text-left group hover:scale-[1.02]">
            <div className="p-3 bg-primary/10 rounded-xl mb-6 flex items-center justify-center group hover:bg-primary/20 transition-colors" >
                {tool.icon}
            </div>
            <h3 className="text-lg font-bold text-on-surface font-display-lg tracking-tight mb-2">{tool.title}</h3>
            <p className="text-xs text-on-surface-variant font-body-md leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
