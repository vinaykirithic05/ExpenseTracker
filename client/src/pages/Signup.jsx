import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { G, apple } from "../assets/assets.js";
import Footer from "../components/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      toast.error("Pleasse fill all the Credentials");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (!agree) {
      toast.error("You must agree to the Terms of Obsidian Service");
      return;
    }
    toast.success("Portfolio created Successfully ! Redirecting to Login ...");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };
  return (
    <div className="w-full max-w-7xl py-20 flex flex-col items-center space-y-3 mb-10">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-5"
      >
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-on-primary">
          BF
        </div>
        <h1 className="font-headline-lg text-lg font-black text-primary tracking-tighter">
          BudjetFlow
        </h1>
      </div>
      <h2 className="text-3xl font-black text-on-surface font-display-lg tracking-tight">
        Create your Account
      </h2>
      <p className=" text-xs text-on-surface-variant font-body-md leading-relaxed max-w-xs mx-auto text-center">
        Join the elite network managing wealth with obsidian precision
      </p>
      {/* Form Obisidian Card */}
      <div className="w-full max-w-[480px] bg-surface-container rounded-3xl border border-primary/20 p-8 shadow-[0_20px_50px_rgba(16,185,129,0.05)] hover:border-primary/40 transition-all duration-300 flex flex-col space-y-6">
        <form
          className="flex flex-col space-y-6 text-left"
          onSubmit={handleSignup}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant font-label-sm">
                First Name
              </label>
              <input
                type="text"
                placeholder="Alex"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full py-3.5 px-4 bg-surface-container-lowest border border-white/5 rounded-xl text-sm text-shadow-on-surface-variant/30 focus:outline-hidden transition-all duration-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant font-label-sm">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full py-3.5 px-4 bg-surface-container-lowest border border-white/5 rounded-xl text-sm text-shadow-on-surface-variant/30 focus:outline-hidden transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant font-label-sm">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 absolute left-4 text-on-surface-variant/60" />
              <input
                type="email"
                placeholder="alex@company.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3.5 pl-12 pr-4 bg-surface-container-lowest border border-white/5 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-hidden transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant font-label-sm">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 absolute left-4 text-on-surface-variant/60" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="......."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3.5 pl-12 pr-4 bg-surface-container-lowest border border-white/5 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-hidden transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            <span className="text-[9px] font-bold text-on-surface-variant/50 leading-relaxed font-body-md">
              Must be at least 12 characters with obsidian strength
            </span>
          </div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1 w-4 h-4 rounded border border-awhite/10 bg-surface-container-lowest checked:bg-primary text-background focus:ring-0 cursor-pointer"
            />
            <label
              htmlFor="agree"
              className="text-xs text-on-surface-variant font-medium leading-relaxed cursor-pointer select-none"
            >
              I agree to the{" "}
              <span className="text-primary hover:underline cursor-pointer font-bold">
                Terms of Obsidian Service
              </span>
            </label>
          </div>
          <button type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold uppercase text-xs md:text-sm tracking-wider shadow-lg shadow-primary/20 hover:shadow-primary/40 active scale-95 transition-all duration-300 cursor-pointer"
          >Create My Portfolio</button>
        </form>
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-[9px] font-black uppercase -tracking-widest text-on-surface-variant/70">or Continue with</span>
           <div className="h-px flex-1 bg-white/5"></div>
        </div>
                <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center w-full max-w-[210px] rounded-xl bg-surface-container-high px-1 py-1.5 gap-2 border border-white text-[11px] transition-all duration-300 cursor-pointer hover:scale-105">
            <img className="w-5 h-5 rounded-2xl" src={G} alt="" />
            <p className="font-label-sm uppercase">Continue with Google</p>
          </button>
          <button className="flex items-center justify-center w-full max-w-[210px] rounded-xl bg-surface-container-high px-1 py-1.5 gap-2 border border-white text-[11px] transition-all duration-300 cursor-pointer hover:scale-105">
            <img className="w-5 h-5 rounded-2xl" src={apple} alt="" />
            <p className="font-label-sm uppercase">Continue with Apple</p>
          </button>
        </div>
      </div>
      <p className="text-xs text-shadow-on-surface-variant/80 font-body-md">Already have an account ? <span onClick={()=>navigate('/login')} className="text-primary hover:underline font-bold cursor-pointer ml-1">Sign in</span> </p>
      <Footer />
    </div>
  );
};

export default Signup;
