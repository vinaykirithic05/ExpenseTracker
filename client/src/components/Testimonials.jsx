import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center py-20 text-center">
      <div className="w-full max-w-3xl text-center px-6 mb-16">
        <h1 className="text-3xl md:text-4xl text-on-surface font-black tracking-tight ">
          Loved by Savvy Savers
        </h1>
        <p className="mt-5 text-primary/50 text-sm">
          Hear from those who transformed their financial future with BudgetFlow
        </p>
      </div>
      <div className="w-full max-w-7xl px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full p-8 rounded-2xl bg-surface-container-lowest/40 border border-white/5 hover:border-primary/20 hover:bg-surface-container-lowest/80 transition-all duration-300 flex flex-col justify-between text-left group hover:scale-[1.02] shadow-lg shadow-black/10"
          >
            <p className="text-sm text-on-surface-variant font-body-md leading-relaxed italic mb-8">
              {item.review}
            </p>
            <div className="flex items-center justify-center gap-5 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h1 className="text-sm font-bold text-on-surface font-display-lg tracking-tight">
                    {item.name}
                  </h1>
                  <p className="text-[10px] text-on-surface-variant/80 font-medium font-body-md mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 ">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
