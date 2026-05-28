import React from "react";
import { Globe, Share2, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-white/5 py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-6 md:px-16 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-whitle/5">
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <h2 className="text-xl md:text-2xl font-black text-on-surface font-headline-lg tracking-tighter">
              BudgetFlow
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant font-body-md max-w-xs leading-relaxed">
              Empowering individuals to reach financial freedom through
              beautiful,data drive tools
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-primary/20 hover:text-primary text-on-surface-variant flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-primary/20 hover:text-primary text-on-surface-variant flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-primary/20 hover:text-primary text-on-surface-variant flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-8 text-left">
            {/* Product Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs md:text-sm font-bold text-on-surface font-display-lg uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs text-on-surface-variant font-body-md">
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            {/* Company Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs md:text-sm font-bold text-on-surface font-display-lg uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-on-surface-variant font-body-md">
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal Coloumn */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs md:text-sm font-bold text-on-surface font-display-lg uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-on-surface-variant font-body-md">
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* bottom Bar Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] md:text-xs text-on-surface-variant/80 font-body-md space-y-4 sm:space-y-0">
          <span>© 2024 BudgetFlow Inc. All rights reserved.</span>
          {/* Secondary Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-on-surface transition-colors">
              Status
            </a>
            <a href="#" className="hover:text-on-surface transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-on-surface transition-colors">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
