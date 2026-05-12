import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Smartphone, Zap } from "lucide-react";
import BlurBackground from "./BlurBackground";

const SITE_NAME = "Digital Wallet";

const features = [
  {
    icon: ShieldCheck,
    title: "Security",
    text: "Straightforward flows and clear sign-in.",
    accent: "border-l-wallet-mid bg-slate-50",
    iconWrap: "bg-wallet-primary text-white",
  },
  {
    icon: Zap,
    title: "Speed",
    text: "Send, receive, and review without clutter.",
    accent: "border-l-wallet-mid bg-slate-50",
    iconWrap: "bg-wallet-mid text-white",
  },
  {
    icon: Smartphone,
    title: "Everywhere",
    text: "Comfortable layout on phone or desktop.",
    accent: "border-l-wallet-navy bg-white",
    iconWrap: "bg-wallet-mid text-white",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans text-slate-900">
      <div className="fixed inset-0 z-0 bg-wallet-sky" aria-hidden />
      <div className="fixed inset-0 z-[1] opacity-[0.55]" aria-hidden>
        <BlurBackground className="absolute inset-0 h-full w-full overflow-hidden" />
      </div>

      <div
        className="pointer-events-none fixed bottom-0 left-1/2 z-[2] h-[46vh] w-[min(180vw,80rem)] -translate-x-1/2 translate-y-[28%] rounded-[50%] bg-gradient-to-t from-wallet-navy/12 via-wallet-mid/10 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
        <article className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border-2 border-wallet-mid/25 bg-white shadow-wallet">
          <div className="px-8 pb-10 pt-10 sm:px-12 sm:pb-12 sm:pt-11 lg:px-16 lg:pb-14 lg:pt-12">
            <div className="mb-10 flex flex-col items-center text-center lg:mb-12">
              <div className="relative mb-6">
                <div
                  className="absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-wallet-mid/30 to-wallet-navy/25"
                  aria-hidden
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo192.png`}
                  alt=""
                  width={88}
                  height={88}
                  className="relative h-[5.5rem] w-[5.5rem] rounded-2xl bg-white object-contain shadow-md ring-2 ring-wallet-mid/20"
                />
              </div>

              <p className="mb-3 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-wallet-mid">
              {SITE_NAME}
              </p>

              <h1 className="max-w-4xl text-balance text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-wallet-primary sm:text-[2.25rem] lg:text-[2.65rem]">
                Simple. Fast. <span className="text-wallet-navy">All in one place.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-[17px] lg:text-lg">
                Check your balance, send money, and view your recent activity.
              </p>
            </div>
       

            <ul className="mb-10 grid gap-4 sm:grid-cols-3 lg:mb-12 lg:gap-5">
              {features.map(({ icon: Icon, title, text, accent, iconWrap }) => (
                <li
                  key={title}
                  className={`group cursor-default rounded-2xl border border-wallet-mid/15 py-5 pl-5 pr-4 text-left shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-1 hover:border-wallet-primary/35 hover:bg-wallet-sky/60 hover:shadow-[0_14px_36px_-10px_rgba(6,36,71,0.18)] hover:border-l-wallet-primary motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm sm:min-h-[8.5rem] ${accent} border-l-4`}
                >
                  <div
                    className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100 ${iconWrap}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-wallet-primary">
                    {title}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-slate-600">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-wallet-primary py-4 text-[15px] font-semibold text-white shadow-[0_12px_28px_-6px_rgba(6,36,71,0.5)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-[#052038] hover:shadow-[0_16px_34px_-8px_rgba(6,36,71,0.55)] active:translate-y-0 active:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wallet-mid"
              >
                Log in
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-wallet-mid bg-wallet-sky py-4 text-[15px] font-semibold text-wallet-primary transition-[transform,background-color,border-color] duration-200 hover:-translate-y-px hover:border-wallet-primary hover:bg-[#a8ddef] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wallet-primary"
              >
                Create account
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LandingPage;
