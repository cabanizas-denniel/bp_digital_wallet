import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import BlurBackground from "./BlurBackground";
import MobileAppHeader from "./MobileAppHeader";

/**
 * Authenticated shell: sky + blurred orbs (all breakpoints); sidebar desktop; sticky mobile header; bottom nav mobile.
 */
const WalletLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col font-sans lg:flex-row">
      {/* Base tint — same family as Login / Register */}
      <div className="fixed inset-0 z-0 bg-wallet-sky" aria-hidden />

      {/* Gradient orbs */}
      <BlurBackground className="fixed inset-0 z-[1] overflow-hidden" />

      <Sidebar />

      {/* Content column: header + scroll area — z above decorative layers */}
      <div className="relative z-10 flex min-h-screen w-full flex-1 flex-col">
        <MobileAppHeader />

        <main className="relative w-full flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-10">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletLayout;
