import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { House, User, LogOut, Receipt } from "lucide-react";

const CLOSE_DELAY_MS = 0;

/** Desktop: collapsed rail by default; hover expands; no toggle button. */
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleEnter = () => {
    cancelClose();
    setOpen(true);
  };

  const handleLeave = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => () => cancelClose(), []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", path: "/home", icon: <House size={22} /> },
    { name: "History", path: "/transactions", icon: <Receipt size={22} /> },
    { name: "Profile", path: "/profile", icon: <User size={22} /> },
  ];

  const widthEase =
    "transition-[width] duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 hidden h-screen shrink-0 flex-col justify-between overflow-hidden border-r border-white/10 bg-[#0a0a1a] text-white lg:flex ${widthEase} ${
          open ? "w-64" : "w-20"
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="flex flex-col pt-6">
          <Link
            to="/home"
            className={`mx-3 mb-5 flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/5 ${
              open ? "" : "justify-center px-0"
            }`}
            title="Digital Wallet"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-lg bg-white/10 object-contain ring-1 ring-white/15"
            />
            <span
              className={`truncate text-sm font-bold tracking-tight text-white/95 transition-[opacity] duration-[280ms] ease-out motion-reduce:transition-none ${
                open ? "opacity-100 delay-75" : "w-0 overflow-hidden opacity-0 delay-0"
              }`}
            >
              Digital Wallet
            </span>
          </Link>

          <nav className="space-y-2 px-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center rounded-xl p-3 transition-colors duration-200 group ${
                  location.pathname === item.path
                    ? "bg-wallet-primary text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="flex min-w-[24px] justify-center">{item.icon}</div>
                <span
                  className={`ml-3 whitespace-nowrap transition-[opacity,max-width] duration-[280ms] ease-out motion-reduce:transition-none ${
                    open
                      ? "max-w-[12rem] opacity-100 delay-75"
                      : "max-w-0 overflow-hidden opacity-0 delay-0"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-6 px-3">
          <button
            type="button"
            onClick={handleLogout}
            className="group flex w-full items-center rounded-xl p-3 text-gray-400 transition-colors duration-200 hover:bg-gray-800 hover:text-white"
          >
            <div className="flex min-w-[24px] justify-center">
              <LogOut size={22} />
            </div>
            <span
              className={`ml-3 whitespace-nowrap transition-[opacity,max-width] duration-[280ms] ease-out motion-reduce:transition-none ${
                open
                  ? "max-w-[12rem] opacity-100 delay-75"
                  : "max-w-0 overflow-hidden opacity-0 delay-0"
              }`}
            >
              LOGOUT
            </span>
          </button>
        </div>
      </aside>

      <div
        className={`hidden shrink-0 lg:block ${widthEase} ${open ? "w-64" : "w-20"}`}
      />
    </>
  );
};

export default Sidebar;
