import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { House, User, LogOut, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true); // Control state for both desktop collapse and mobile drawer
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", path: "/home", icon: <House size={22} /> },
    { name: "Profile", path: "/profile", icon: <User size={22} /> },
  ];

  return (
    <>
      {/* MOBILE HAMBURGER BUTTON  */}
      {/* Only visible on small screens when sidebar is closed */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      {/*  MOBILE OVERLAY  */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR CONTAINER  */}
      <div
        className={`fixed top-0 left-0 h-screen bg-[#0a0a1a] text-white flex flex-col justify-between transition-all duration-300 z-40 border-r border-white/10
        ${open ? "w-64 translate-x-0" : "w-20 -translate-x-full lg:translate-x-0"}`}
      >
        {/* Top Section */}
        <div className="flex flex-col">
          {/* Header Area */}
          <div className="flex items-center justify-between px-4 mt-6 mb-6 h-10 flex flex-col">
            
            {/* Toggle Button: Swaps between 'Close' for mobile and 'Collapse' for desktop */}
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {open ? <X size={24} className="lg:hidden" /> : null}
              {/* Desktop Collapse Icon (shows when open) */}
              <Menu size={24} className={`hidden lg:block ${!open && "mx-auto"}`} />
            </button>
          </div>
          

          {/* Navigation */}
          <nav className="space-y-2 px-3 mt-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group
                ${location.pathname === item.path ? "bg-blue-600 text-white" : "hover:bg-gray-800 text-gray-400 hover:text-white"}`}
              >
                <div className="min-w-[24px] flex justify-center">{item.icon}</div>
                <span className={`ml-3 whitespace-nowrap transition-all duration-300 
                  ${open ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="px-3 mb-6">
          <button
            onClick={handleLogout}
            className="w-full p-3 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-all flex items-center group"
          >
            <div className="min-w-[24px] flex justify-center">
              <LogOut size={22} />
            </div>
            <span className={`ml-3 whitespace-nowrap transition-all duration-300 
              ${open ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
              LOGOUT
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Spacer (Optional) */}
      {/* This helps push your page content so it doesn't sit under the sidebar on desktop */}
      <div className={`transition-all duration-300 hidden lg:block ${open ? "ml-64" : "ml-20"}`} />
    </>
  );
};

export default Sidebar;