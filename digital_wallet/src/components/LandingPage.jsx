import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

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
      <div className="relative w-full max-w-[920px] px-6 py-12 md:px-[72px] md:py-[64px]
        rounded-[24px] md:rounded-[40px]
        bg-white/30 border border-white/80
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]
        backdrop-blur-[22px] text-center">

        <h1 className="text-[clamp(36px,4vw,48px)] font-extrabold text-[#062447] mb-4">
          Digital Wallet
        </h1>
        <p className="text-[#5f6c80] text-[16px] mb-10 max-w-[480px] mx-auto">
          Your secure and simple way to manage digital payments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-3 rounded-full bg-white text-[#111111] font-extrabold text-[15px] tracking-[0.08em]
            shadow-[0_12px_36px_rgba(15,23,42,0.3)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(15,23,42,0.38)] hover:bg-gray-50
            active:translate-y-0 active:shadow-[0_10px_28px_rgba(15,23,42,0.3)]">
            LOGIN
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-10 py-3 rounded-full bg-[#062447] text-white font-extrabold text-[15px] tracking-[0.08em]
            shadow-[0_12px_36px_rgba(15,23,42,0.3)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(6,36,71,0.5)]
            active:translate-y-0 active:shadow-[0_10px_28px_rgba(15,23,42,0.3)]">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
