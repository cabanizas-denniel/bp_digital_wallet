import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#bdefff] p-6 relative overflow-hidden font-sans">

      {/* blobs */}
      <div className="absolute inset-0 pointer-events-none blur-[4px]">
        <span className="absolute w-[260px] h-[260px] rounded-full opacity-90 top-[8%] left-[8%]
          bg-[radial-gradient(circle_at_30%_30%,#6afc7b,#3a8b00)]" />
        <span className="absolute w-[220px] h-[220px] rounded-full opacity-90 top-[12%] right-[6%]
          bg-[radial-gradient(circle_at_30%_30%,#ff4d94,#7b0040)]" />
        <span className="absolute w-[260px] h-[260px] rounded-full opacity-90 top-[40%] right-[18%]
          bg-[radial-gradient(circle_at_20%_40%,#7b9dff,#192b7a)]" />
        <span className="absolute w-[220px] h-[220px] rounded-full opacity-90 bottom-[4%] right-[5%]
          bg-[radial-gradient(circle_at_40%_20%,#f9c97a,#b86a1a)]" />
        <span className="absolute w-[220px] h-[220px] rounded-full opacity-90 bottom-[10%] left-[10%]
          bg-[radial-gradient(circle_at_30%_60%,#ff7a7a,#7a1111)]" />
      </div>

      {/* card */}
      <div className="relative w-full max-w-[920px] px-6 py-7 md:px-[72px] md:pt-[56px] md:pb-[40px]
        rounded-[24px] md:rounded-[40px]
        bg-white/30 border border-white/80
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]
        backdrop-blur-[22px]">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-[20px]">
            <div className="h-16 w-16 rounded-full border-2 border-orange-200 flex items-center justify-center
              bg-white/60 text-[#062447] text-2xl font-bold">
              {user?.full_name?.charAt(0)?.toUpperCase() || "?"}
            </div>
            <div>
              <h1 className="text-[clamp(28px,3vw,36px)] font-extrabold text-[#062447]">
                Welcome Back!
              </h1>
              <p className="text-[clamp(16px,3vw,20px)] text-[#8B8B83]">
                {user?.full_name || "User"}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-full bg-white text-[#111111] font-bold text-[13px] tracking-[0.06em]
            shadow-[0_8px_24px_rgba(15,23,42,0.2)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_12px_32px_rgba(15,23,42,0.3)] hover:bg-gray-50
            active:translate-y-0">
            LOGOUT
          </button>
        </div>

        <p className="text-[#5f6c80] text-sm">
          Logged in as <span className="font-semibold">{user?.email}</span>
        </p>

      </div>
    </div>
  );
};

export default HomePage;
