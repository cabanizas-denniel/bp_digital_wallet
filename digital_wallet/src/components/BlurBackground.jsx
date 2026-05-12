import React from "react";

/** Decorative blurred gradient orbs — sits above base tint, below content. */
const BlurBackground = ({ className = "" }) => {
  return (
    <div
      className={`pointer-events-none blur-[4px] ${className}`}
      aria-hidden
    >
      <span
        className="absolute w-[260px] h-[260px] rounded-full opacity-90 top-[8%] left-[8%]
        bg-[radial-gradient(circle_at_30%_30%,#6afc7b,#3a8b00)]"
      />
      <span
        className="absolute w-[220px] h-[220px] rounded-full opacity-90 top-[12%] right-[6%]
        bg-[radial-gradient(circle_at_30%_30%,#ff4d94,#7b0040)]"
      />
      <span
        className="absolute w-[260px] h-[260px] rounded-full opacity-90 top-[40%] right-[18%]
        bg-[radial-gradient(circle_at_20%_40%,#7b9dff,#192b7a)]"
      />
      <span
        className="absolute w-[220px] h-[220px] rounded-full opacity-90 bottom-[4%] right-[5%]
        bg-[radial-gradient(circle_at_40%_20%,#f9c97a,#b86a1a)]"
      />
      <span
        className="absolute w-[220px] h-[220px] rounded-full opacity-90 bottom-[10%] left-[10%]
        bg-[radial-gradient(circle_at_30%_60%,#ff7a7a,#7a1111)]"
      />
    </div>
  );
};

export default BlurBackground;
