import React, { useState } from "react";
import { BotMessageSquare, EyeOff, Lock, Mail } from "lucide-react";
import { G, apple } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) =>{
    e.preventDefault();
    if(!email || !password){
      toast.error("Please Enter the Crendentials")
      return;
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }
  toast.success("Welcome Back Login Successful !")
  setTimeout(()=>{
    navigate('/')
  },1200)
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-on-primary">
          BF
        </div>
        <h1 className="font-headline-lg text-lg font-black text-primary tracking-tighter">
          BudjetFlow
        </h1>
      </div>
      <div className="inline-flex w-fit text-primary  items-center bg-primary/10 px-3.5 py-1 gap-2 border border-primary/20 rounded-full text-[10px] font-label-sm uppercase tracking-widest font-bold ">
        <BotMessageSquare className="w-4 h-4" /> join 10k+ wealth builders
      </div>
      <div className="flex flex-col items-center gap-4 text-center mt-5">
        <div>
          <h4 className="text-4xl md:text-5xl font-bold text-on-surface">
            Master your Financial{" "}
          </h4>
          <span className="text-4xl md:text-5xl italic text-primary font-bold">
            momentum.
          </span>
        </div>
        <div>
          <p className="text-primary/75">
            Connect all your accounts and watch your net worth grow
          </p>
          <p className="text-primary/75">
            with our high-fidelity tracking instrument.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[480px] bg-surface-container rounded-3xl border border-white/5 p-8 mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col space-y-6">
        <div className="text-left">
          <h3 className="text-xl font-bold text-on-surface font-display-lg tracking-tight">
            Log in to Account
          </h3>
          <p className="text-xs text-on-surface-variant font-body-md mt-1">
            Welcome back ! Please enter your details below.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center w-full max-w-[210px] rounded-xl bg-surface-container-high px-1 py-1.5 gap-2 border border-white text-[11px] transition-all duration-300 cursor-pointer hover:scale-105">
            <img className="w-5 h-5 rounded-2xl" src={G} alt="" />
            <p>Continue with Google</p>
          </button>
          <button className="flex items-center justify-center w-full max-w-[210px] rounded-xl bg-surface-container-high px-1 py-1.5 gap-2 border border-white text-[11px] transition-all duration-300 cursor-pointer hover:scale-105">
            <img className="w-5 h-5 rounded-2xl" src={apple} alt="" />
            <p>Continue with Apple</p>
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/80">
            or Log in with Email
          </span>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>
        {/* Form */}
        <form className="flex flex-col space-y-4 text-left">
          <div
            className="flex flex-col space-y-2
            "
          >
            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant font-label-sm">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-4 h-4 text-on-surface-variant/60" />
              <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full py-3.5 pl-12 pr-4 bg-surface-container-lowest border border-white/5 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/30 focus:border-primary/40 focus:outline-hidden transition-all duration-300 "
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant font-label-sm">
                Password
              </label>
              <span className="text-xs text-primary hover:underline cursor-pointer font-bold">
                Forgot Password ?
              </span>
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute  left-4 w-4 h-4 text-on-surface-variant/60 " />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="........"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full py-3.5 pl-12 pr-12 bg-surface-container-lowest border border-white/5 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/30 focus:border-primary/40 focus:outline-hidden transition-all duration-300"
              />
              <button
                type="button"
                className="absolute right-4 text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold uppercase text-xs md:text-sm tracking-wider shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.01] active:scale-95 mt-4 cursor-pointer"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
        <p className="text-xs text-shadow-on-surface-variant/80 font-body-md pt-2 text-center">
          Don't have an Account yet ?
          <span
            onClick={() => navigate("/signup")}
            className="text-primary hover:underline font-bold cursor-pointer ml-1"
          >
            Get Started
          </span>
        </p>
     
      </div>
         <Footer />
    </div>
  );
};

export default Login;
