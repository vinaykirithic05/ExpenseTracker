import React from "react";
import { pricingPlans } from "../assets/assets";
import { Check, X } from "lucide-react";
const PricePlan = () => {
  return (
    <div className="w-full flex items-center justify-center bg-surface-container-lowest py-20 text-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-black text-on-surface">
            Flexible Plans for Every Journey
          </h1>
          <p className="pt-5 text-sm text-primary/50 font-body-md">
            Choose the plan that fits your financial ambitions
          </p>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-16 gap-6 md:gap-8 ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative mt-5 w-full p-8 md:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between text-left group hover:scale-[1.02] ${plan.popular ? "bg-surface border-2 border-primary glow-emerald shadow[0_20px_50px rgba(78,222,163,0.1)] " : "bg-surface border border-white/5 shadow-[0_15px_30px rgba(0,0,0,0.3)]"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 px-4 py-1 bg-primary text-on-primary text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg font-label-sm">
                  Most Popular
                </div>
              )}
              <div>
                <h3
                  className={`text-bse font-bold uppercase tracking-widest font-label-sm ${plan.popular ? "text-primary" : "text-on-surface-variant"}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline mt-6 mb-8 text-on-surface">
                  <span className="text-4xl md:text-5xl font-black font-mono-data tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-2 text-xs md:text-sm font-medium text-on-surface-variant font-body-md">
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-4 pt-6 border-t border-white/5 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-xs md:text-sm font-body-md"
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 text-primary shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-white/20 shrink-0" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-on-surface"
                            : "text-white/25 line-through"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-4 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${plan.popular ? "bg-primary text-on-primary hover:text-primary-container shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95" : "bg-surface-container-high border border-white/5 text-on-surface hover:bg-white/5 active:scale-95"}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
