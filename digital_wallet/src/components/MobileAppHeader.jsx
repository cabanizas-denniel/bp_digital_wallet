import React, { useEffect, useState } from "react";

const MobileAppHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        setUser(null);
      }
    }
  }, []);

  return (
    <header
      className="sticky top-0 z-[35] flex w-full shrink-0 items-center justify-between border-b border-gray-200/60 bg-[#bdefff]/90 px-4 py-3 backdrop-blur-md lg:hidden"
      style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <div className="flex min-w-0 items-center gap-3">
        <img
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-2xl bg-white object-contain shadow-md ring-2 ring-white"
        />
        <div className="min-w-0">
          <p className="truncate font-bold text-[#062447]">{user?.full_name || "User"}</p>
          <p className="text-xs text-gray-500">Verified</p>
        </div>
      </div>
      <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-wallet-primary shadow-sm">
        HELP
      </span>
    </header>
  );
};

export default MobileAppHeader;
