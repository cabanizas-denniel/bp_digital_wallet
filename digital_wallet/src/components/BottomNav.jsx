import React from "react";
import { NavLink } from "react-router-dom";
import { House, Receipt, User } from "lucide-react";

const linkClass = ({ isActive }) =>
  `flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-semibold transition-colors ${
    isActive ? "text-wallet-primary" : "text-gray-500 hover:text-gray-800"
  }`;

const BottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200/90 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_24px_rgba(15,23,42,0.08)] backdrop-blur-md lg:hidden"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-none items-stretch justify-around px-2 pt-1">
        <NavLink to="/home" end className={linkClass}>
          <House className="h-6 w-6 stroke-[2]" />
          Home
        </NavLink>
        <NavLink to="/transactions" className={linkClass}>
          <Receipt className="h-6 w-6 stroke-[2]" />
          History
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          <User className="h-6 w-6 stroke-[2]" />
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
