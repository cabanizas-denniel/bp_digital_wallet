import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  {/*const handleSubmit = (e) => {
    e.preventDefault();
  }; */}

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#bdefff] p-6 relative overflow-hidden font-sans">

      {/* blobs */}
      {/*<div className="absolute inset-0 pointer-events-none blur-[4px]">
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
      </div>*/}

      {/* card */}
      <div className="relative w-full max-w-[920px] px-6 py-7 md:px-[72px] md:pt-[56px] md:pb-[40px]
        rounded-[24px] md:rounded-[40px]
        bg-white/30 border border-white/80
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]
        backdrop-blur-[22px]">
            <div className="flex items-center gap-[20px]">
            <div className="h-16 w-16 rounded-full border-2 border-orange-200"></div>
            <div className="relative">
        <h1 className="text-[clamp(34px,3vw,40px)] font-extrabold text-[#062447] ">
          Welcome Back!
        </h1>
        <p className="text-[clamp(16px,3vw,20px)] font-regular text-[#8B8B83] ">
          Ritchell Malang
        </p>
</div>
        </div>
        

      </div>
    </div>
  );
};

export default HomePage;