import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  UserRound,
} from "lucide-react";

const SITE_NAME = "Digital Wallet";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ full_name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (pw) => {
    if (pw.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(pw)) return "Password must contain at least 1 uppercase letter.";
    if (!/[0-9]/.test(pw)) return "Password must contain at least 1 number.";
    if (!/[^A-Za-z0-9]/.test(pw)) return "Password must contain at least 1 symbol.";
    return null;
  };

  const pwChecks = useMemo(() => {
    const pw = form.password;
    return {
      length: pw.length >= 8,
      upper: /[A-Z]/.test(pw),
      number: /[0-9]/.test(pw),
      symbol: /[^A-Za-z0-9]/.test(pw),
    };
  }, [form.password]);

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

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm bg-white/95 text-gray-900 " +
    "shadow-[0_4px_20px_rgba(15,23,42,0.08)] border border-white/60 placeholder:text-slate-400 " +
    "outline-none transition-shadow duration-200 " +
    "focus:border-sky-300/80 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.25),0_8px_24px_rgba(15,23,42,0.12)]";

  if (success) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#bdefff] p-5 sm:p-6 relative overflow-hidden font-sans">
        <div className="absolute inset-0 pointer-events-none blur-[4px] opacity-90">
          <span className="absolute w-[280px] h-[280px] rounded-full top-[6%] left-[6%] bg-[radial-gradient(circle_at_30%_30%,#6afc7b,#3a8b00)]" />
          <span className="absolute w-[240px] h-[240px] rounded-full top-[10%] right-[8%] bg-[radial-gradient(circle_at_30%_30%,#ff4d94,#7b0040)]" />
          <span className="absolute w-[300px] h-[300px] rounded-full bottom-[5%] left-[15%] bg-[radial-gradient(circle_at_30%_60%,#ff7a7a,#7a1111)]" />
        </div>

        <div
          className="relative w-full max-w-lg px-8 py-12 sm:py-14 rounded-[28px] sm:rounded-[36px]
          bg-white/40 border border-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-[20px] text-center"
        >
          <div className="mx-auto mb-6">
            <img
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              alt={SITE_NAME}
              width={72}
              height={72}
              className="mx-auto h-[72px] w-[72px] rounded-2xl object-contain shadow-lg ring-4 ring-emerald-100/90 bg-white"
            />
          </div>
          <h1 className="text-[clamp(26px,4vw,34px)] font-extrabold text-[#062447] tracking-tight mb-3">
            You&apos;re all set
          </h1>
          <p className="text-[#5f6c80] text-[15px] leading-relaxed mb-10 max-w-sm mx-auto">
            Your wallet account was created successfully. Sign in to open your dashboard and start
            managing balances.
          </p>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full max-w-xs mx-auto px-8 py-3.5 rounded-2xl bg-[#062447] text-white font-bold text-[14px] tracking-[0.06em]
            shadow-[0_14px_40px_rgba(6,36,71,0.35)] transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(6,36,71,0.42)] active:translate-y-0"
          >
            Go to login
          </button>
          <p className="mt-8 text-[12px] text-[#5f6c80]">
            Wrong email?{" "}
            <button
              type="button"
              onClick={() => {
                setSuccess(false);
                setForm({ full_name: "", email: "", password: "" });
              }}
              className="font-semibold text-[#062447] underline underline-offset-2 hover:text-sky-700"
            >
              Register again
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#bdefff] p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Background blobs */}
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
                  <p className="text-lg font-bold text-white truncate">New account</p>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                Sign up and Get Access to your Wallet
           
           
              </h2>
              <p className="text-sm text-white/75 leading-relaxed max-w-[280px]">
                Secure sign-up, clear balances, and a dashboard built for your real-world financial needs.
           
              </p>
            </div>

            <div className="relative mt-8 flex items-start text-[11px] text-white/45 lg:absolute lg:bottom-10 lg:left-10 lg:right-10 lg:mt-0">
              <input
                type="checkbox"
                id="register-tos"
                name="register-tos"
                required
                className="mt-0.5 mr-2 accent-[#062447]"
                style={{ minWidth: 14, minHeight: 14 }}
              />
              <label htmlFor="register-tos" className="cursor-pointer">
                By registering, you acknowledge and agree to abide by the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service and Privacy Policy
                </a>
                {" "}associated with this application.
              </label>
            </div>
      
          </aside>

          {/* Form panel */}
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
                Create account
              </h1>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="full_name" className="block text-xs font-bold uppercase tracking-wider text-[#062447]/70 mb-2">
                    Full name
                  </label>
                  <div className="relative">
                    <UserRound className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      id="full_name"
                      type="text"
                      name="full_name"
                      autoComplete="name"
                      placeholder="e.g. Juan Dela Cruz"
                      value={form.full_name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#062447]/70 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      id="email"
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
                  <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-[#062447]/70 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      placeholder="Create a strong password"
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
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] sm:text-xs">
                    {[
                      { ok: pwChecks.length, label: "8+ characters" },
                      { ok: pwChecks.upper, label: "Uppercase letter" },
                      { ok: pwChecks.number, label: "One number" },
                      { ok: pwChecks.symbol, label: "One symbol" },
                    ].map((rule) => (
                      <div
                        key={rule.label}
                        className={`flex items-center gap-1.5 ${rule.ok ? "text-emerald-700" : "text-slate-500"}`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                            rule.ok ? "border-emerald-500 bg-emerald-50" : "border-slate-300 bg-white/80"
                          }`}
                        >
                          {rule.ok && <Check className="h-3 w-3 stroke-[3]" />}
                        </span>
                        {rule.label}
                      </div>
                    ))}
                  </div>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-200 bg-red-50/95 px-4 py-3 text-sm font-medium text-red-800 text-center"
                  >
                    {error}
                  </div>
                )}

                {/* Same terms as hero panel — shown only on mobile (hero is lg+) */}
                <div className="lg:hidden flex items-start gap-2 text-[12px] text-[#5f6c80] leading-snug">
                  <input
                    type="checkbox"
                    id="register-tos-mobile"
                    name="register-tos-mobile"
                    required
                    className="mt-1 shrink-0 accent-[#062447]"
                    style={{ minWidth: 16, minHeight: 16 }}
                  />
                  <label htmlFor="register-tos-mobile" className="cursor-pointer">
                    By registering, you acknowledge and agree to abide by the{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#062447] underline underline-offset-2 hover:text-sky-800"
                    >
                      Terms of Service and Privacy Policy
                    </a>{" "}
                    associated with this application.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full py-3.5 rounded-2xl bg-[#062447] text-white font-bold text-[14px] tracking-[0.06em]
                  shadow-[0_14px_40px_rgba(6,36,71,0.32)] transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(6,36,71,0.38)] active:translate-y-0"
                >
                  Create account
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
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-bold text-[#062447] underline underline-offset-2 hover:text-sky-800"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
