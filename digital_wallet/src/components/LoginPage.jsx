import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  {/*const handleSubmit = (e) => {
    e.preventDefault();
  }; */}

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
      <div className="relative w-full max-w-[920px] px-6 py-8 md:px-[72px] md:pt-[56px] md:pb-[40px]
        rounded-[24px] md:rounded-[40px]
        bg-white/30 border border-white/80
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]
        backdrop-blur-[22px]">

        <h1 className="text-[clamp(34px,3vw,40px)] font-extrabold text-[#062447] mb-8">
          Welcome Back
        </h1>

        <form className="flex flex-col gap-4 mb-[18px]" > {/*onSubmit={handleSubmit}*/}
          
          <input
            type="text"
            placeholder="Email/Number"
            className="w-full px-[18px] py-[12px] rounded-full text-sm
            bg-white/90 text-gray-900 outline-none
            shadow-[0_4px_16px_rgba(15,23,42,0.12)]
            placeholder:text-slate-400
            focus:shadow-[0_0_0_2px_rgba(56,189,248,0.6),0_12px_32px_rgba(15,23,42,0.25)]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-[18px] py-[12px] rounded-full text-sm
            bg-white/90 text-gray-900 outline-none
            shadow-[0_4px_16px_rgba(15,23,42,0.12)]
            placeholder:text-slate-400
            focus:shadow-[0_0_0_2px_rgba(56,189,248,0.6),0_12px_32px_rgba(15,23,42,0.25)]"
          />

          {/* forgot */}
          <div className="flex justify-end mt-[2px] mb-[10px]">
            <button type="button" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </button>
          </div>

          {/* login button */}
          <button onClick={() => navigate("/home")}
            type="button"
            className="w-[220px] max-w-full self-center py-3 rounded-full
            bg-white text-[#111111] font-extrabold text-[15px] tracking-[0.08em]
            shadow-[0_12px_36px_rgba(15,23,42,0.3)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(15,23,42,0.38)] hover:bg-gray-50
            active:translate-y-0 active:shadow-[0_10px_28px_rgba(15,23,42,0.3)]">
            LOGIN
          </button>
        </form>

        {/* divider */}
        <div className="flex items-center gap-[10px] my-[18px] text-[12px] text-[#5f6c80]">
          <span className="flex-1 h-[1px] bg-slate-400/70" />
          <span className="whitespace-nowrap">or continue with</span>
          <span className="flex-1 h-[1px] bg-slate-400/70" />
        </div>

        {/* social */}
        <div className="flex justify-center gap-[18px] md:gap-7 mb-6">
          <button
            type="button"
            className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center
            shadow-[0_10px_28px_rgba(15,23,42,0.25)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_14px_36px_rgba(15,23,42,0.34)]">
            <span className="text-[20px] font-bold text-[#ea4335]">G</span>
          </button>

          <button
            type="button"
            className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center
            shadow-[0_10px_28px_rgba(15,23,42,0.25)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_14px_36px_rgba(15,23,42,0.34)]">
            <span className="text-[20px] font-bold text-[#1877f2]">f</span>
          </button>
        </div>

        {/* footer */}
        <p className="text-center text-[12px] text-[#5f6c80]">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="link-button underline"
            onClick={() => navigate("/register")}>
            Sign up
          </button>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;