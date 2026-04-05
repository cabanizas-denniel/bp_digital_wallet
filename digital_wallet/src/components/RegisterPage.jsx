import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ full_name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validatePassword = (pw) => {
    if (pw.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(pw)) return "Password must contain at least 1 uppercase letter.";
    if (!/[0-9]/.test(pw)) return "Password must contain at least 1 number.";
    if (!/[^A-Za-z0-9]/.test(pw)) return "Password must contain at least 1 symbol.";
    return null;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.full_name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    const pwError = validatePassword(form.password);
    if (pwError) {
      setError(pwError);
      return;
    }

    try {
      const res = await fetch("http://localhost/bp_digital_wallet/backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Could not connect to server.");
    }
  };

  if (success) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#bdefff] p-6 relative overflow-hidden font-sans">
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
        <div className="relative w-full max-w-[920px] px-6 py-12 md:px-[72px] md:py-[64px]
          rounded-[24px] md:rounded-[40px]
          bg-white/30 border border-white/80
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
          backdrop-blur-[22px] text-center">
          <h1 className="text-[clamp(34px,3vw,40px)] font-extrabold text-[#062447] mb-4">
            Registration Successful!
          </h1>
          <p className="text-[#5f6c80] text-[16px] mb-8">
            Your account has been created. You can now log in.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-3 rounded-full bg-white text-[#111111] font-extrabold text-[15px] tracking-[0.08em]
            shadow-[0_12px_36px_rgba(15,23,42,0.3)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(15,23,42,0.38)] hover:bg-gray-50
            active:translate-y-0 active:shadow-[0_10px_28px_rgba(15,23,42,0.3)]">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

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
          Create Account
        </h1>

        <form className="flex flex-col gap-4 mb-[18px]" onSubmit={handleSubmit}>

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full px-[18px] py-[12px] rounded-full text-sm
            bg-white/90 text-gray-900 outline-none
            shadow-[0_4px_16px_rgba(15,23,42,0.12)]
            placeholder:text-slate-400
            focus:shadow-[0_0_0_2px_rgba(56,189,248,0.6),0_12px_32px_rgba(15,23,42,0.25)]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-[18px] py-[12px] rounded-full text-sm
            bg-white/90 text-gray-900 outline-none
            shadow-[0_4px_16px_rgba(15,23,42,0.12)]
            placeholder:text-slate-400
            focus:shadow-[0_0_0_2px_rgba(56,189,248,0.6),0_12px_32px_rgba(15,23,42,0.25)]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-[18px] py-[12px] rounded-full text-sm
            bg-white/90 text-gray-900 outline-none
            shadow-[0_4px_16px_rgba(15,23,42,0.12)]
            placeholder:text-slate-400
            focus:shadow-[0_0_0_2px_rgba(56,189,248,0.6),0_12px_32px_rgba(15,23,42,0.25)]"
          />

          {error && (
            <p className="text-red-600 text-sm text-center font-semibold bg-red-50/80 rounded-full py-2 px-4">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-[220px] max-w-full self-center py-3 rounded-full
            bg-white text-[#111111] font-extrabold text-[15px] tracking-[0.08em]
            shadow-[0_12px_36px_rgba(15,23,42,0.3)]
            transition-all duration-150 ease-out
            hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(15,23,42,0.38)] hover:bg-gray-50
            active:translate-y-0 active:shadow-[0_10px_28px_rgba(15,23,42,0.3)]">
            REGISTER
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
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-blue-600 underline ml-1 font-bold">
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default Register;
