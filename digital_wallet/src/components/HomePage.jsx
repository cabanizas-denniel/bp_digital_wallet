import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import BlurBackground from "./BlurBackground";
import { Plus, Send } from "lucide-react";
const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  

  return (
    <div className="flex h-full p-6 ">

      {/* blobs */}
      <BlurBackground />
<Sidebar/>
      {/* card */}
      <div className="relative w-full h-full px-6 py-7 md:px-[72px] md:pt-[56px] md:pb-[40px]
        rounded-[24px] md:rounded-[40px]
        bg-white/30 border border-white/80
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]
        backdrop-blur-[22px]">

        <div className="flex items-center justify-between mb-6 bg-[#1a1a40] h-[300px] p-8 md:p-12 rounded-[32px]">
          <div className="flex items-center gap-[20px] ">
            <div className="h-16 w-16 md:h-32 md:w-32 rounded-full border-2 border-orange-200 flex items-center justify-center
              bg-white/60 text-[#062447] text-2xl font-bold">
              {user?.full_name?.charAt(0)?.toUpperCase() || "?"}
            </div>
            <div>
              <h1 className="text-[clamp(28px,3vw,36px)] font-extrabold text-white ">
                Welcome Back!
              </h1>
              <p className="text-[clamp(16px,3vw,20px)] text-[#8B8B83]">
                {user?.full_name || "User"}
              </p>
               <p className="text-[#5f6c80] text-sm">
          Logged in as <span className="font-semibold">{user?.email}</span>
        </p>
            </div>
          </div> 
                  
        </div>
        <div className="flex gap-6 items-stretch md:pb-[10px]">
            {/* Balance Card */}
            <div className="bg-white rounded-[32px] p-8 flex-1 shadow-2xl">
              <p className="text-gray-500 font-medium md:pb-[10px]">Total Balance</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl font-bold text-gray-900">PHP</span>
                <span className="text-5xl font-black text-gray-900 tracking-tight">385,000</span>
              </div>
              <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest md:pt-[10px]">ID: 101902121112</p>
              <div className="w-full h-2 bg-[#1a1a40] rounded-full mt-6 opacity-90"></div>
            </div>

            {/* Plus Button */}
            <button className="bg-white w-24 rounded-[32px] flex items-center justify-center text-[#1a1a40] hover:bg-gray-50 transition-colors shadow-xl">
              <Plus size={40} strokeWidth={3} />
            </button>

            {/* Send Card */}
            <button className="bg-white w-40 rounded-[32px] flex flex-col items-center justify-center gap-2 text-[#1a1a40] hover:bg-gray-50 transition-colors shadow-xl group">
              <div className="p-3 border-2 border-gray-100 rounded-2xl group-hover:border-indigo-200">
                <Send size={28} />
              </div>
              <span className="font-bold text-xl uppercase tracking-tighter">Send</span>
            </button>
          </div>
          <div className="p-8 text-[clamp(28px,3vw,36px)] font-extrabold text-[#1a1a40]">Transactions</div>


          <div className="flex items-center justify-between mb-6 bg-[#1a1a40] h-[300px] p-8 md:p-12 rounded-[32px]">
          <div className="flex items-center gap-[20px] ">
            
           
          </div> 
                  
        </div>
      </div>
    </div>
  );
};

export default HomePage;
