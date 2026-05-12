import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";

const SITE_NAME = "Digital Wallet";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost/bp_digital_wallet/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/home");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Could not connect to server.");
    }
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm bg-white/95 text-gray-900 " +
    "shadow-[0_4px_20px_rgba(15,23,42,0.08)] border border-white/60 placeholder:text-slate-400 " +
    "outline-none transition-shadow duration-200 " +
    "focus:border-sky-300/80 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.25),0_8px_24px_rgba(15,23,42,0.12)]";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#bdefff] p-4 sm:p-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none blur-[3px]">
        <span className="absolute w-[280px] h-[280px] rounded-full opacity-95 top-[5%] left-[4%] bg-[radial-gradient(circle_at_30%_30%,#6afc7b,#3a8b00)]" />
        <span className="absolute w-[240px] h-[240px] rounded-full opacity-95 top-[8%] right-[5%] bg-[radial-gradient(circle_at_30%_30%,#ff4d94,#7b0040)]" />
        <span className="absolute w-[300px] h-[300px] rounded-full opacity-90 top-[38%] right-[12%] bg-[radial-gradient(circle_at_20%_40%,#7b9dff,#192b7a)]" />
        <span className="absolute w-[220px] h-[220px] rounded-full opacity-90 bottom-[6%] right-[6%] bg-[radial-gradient(circle_at_40%_20%,#f9c97a,#b86a1a)]" />
        <span className="absolute w-[260px] h-[260px] rounded-full opacity-90 bottom-[8%] left-[8%] bg-[radial-gradient(circle_at_30%_60%,#ff7a7a,#7a1111)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#062447]/80 hover:text-[#062447] mb-5 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div
          className="grid overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]
          border border-white/70 shadow-[0_28px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl
          bg-white/25 lg:grid-cols-12 lg:min-h-[560px]"
        >
          {/* Hero panel — desktop only */}
          <aside
            className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-8 sm:p-10 lg:p-12
            bg-gradient-to-br from-[#062447] via-[#0d3a66] to-[#1a1a40] text-white
            lg:min-h-[560px]"
          >
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_#fff_0%,_transparent_55%)]" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/logo192.png`}
                  alt=""
                  width={56}
                  height={56}
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                    {SITE_NAME}
                  </p>
                  <p className="text-lg font-bold text-white truncate">Welcome back</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                Access your wallet
              </h2>
              <p className="text-sm text-white/75 leading-relaxed max-w-[280px]">
                Log in with your registered email to view balances, send money, and review your
                activity.
              </p>
            </div>

            

            <p className="relative mt-8 text-[11px] text-white/45 lg:absolute lg:bottom-10 lg:left-10 lg:right-10 lg:mt-0 flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 opacity-70" />
              Use a strong password and never share your login details.
            </p>
          </aside>

          <div className="col-span-full lg:col-span-7 bg-white/55 p-8 sm:p-10 lg:p-12 flex flex-col justify-center lg:border-l lg:border-white/40">
            <div className="max-w-md mx-auto w-full">
              <div className="flex justify-center lg:hidden mb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/logo192.png`}
                  alt={SITE_NAME}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl object-contain shadow-md ring-2 ring-[#062447]/10"
                />
              </div>
              <h1 className="text-[clamp(28px,4vw,36px)] font-extrabold text-[#062447] tracking-tight mb-1 text-center lg:text-left">
                Log in
              </h1>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#062447]/70 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      id="login-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Your email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-xs font-bold uppercase tracking-wider text-[#062447]/70 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      placeholder="Your password"
                      value={form.password}
                      onChange={handleChange}
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end -mt-1">
                  <button
                    type="button"
                    className="text-sm font-semibold text-[#062447] hover:underline underline-offset-2"
                  >
                    Forgot password?
                  </button>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-200 bg-red-50/95 px-4 py-3 text-sm font-medium text-red-800 text-center"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#062447] text-white font-bold text-[14px] tracking-[0.06em]
                  shadow-[0_14px_40px_rgba(6,36,71,0.32)] transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(6,36,71,0.38)] active:translate-y-0"
                >
                  Log in
                </button>
              </form>

              <div className="flex items-center gap-3 my-8">
                <span className="h-px flex-1 bg-slate-300/80" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5f6c80]">
                  Or continue with
                </span>
                <span className="h-px flex-1 bg-slate-300/80" />
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)]"
                >
                  <span className="text-[18px] font-bold text-[#ea4335]">G</span>
                </button>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)]"
                >
                  <span className="text-[18px] font-bold text-[#1877f2]">f</span>
                </button>
              </div>

              <p className="text-center text-[13px] text-[#5f6c80] mt-8">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="font-bold text-[#062447] underline underline-offset-2 hover:text-sky-800"
                >
                  Create account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
