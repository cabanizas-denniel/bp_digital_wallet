import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import BlurBackground from "./BlurBackground";
import { Pencil } from "lucide-react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col md:flex-row overflow-hidden">
      <BlurBackground />
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10 z-10 backdrop-blur-lg flex items-center justify-center">
        <div className="bg-white w-full max-w-5xl rounded-[32px] p-8 sm:p-10 md:p-14 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#09092e] mb-10">
            Edit Account
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE - PROFILE IMAGE */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#ead4d4] bg-gray-200 flex items-center justify-center text-5xl font-bold text-[#062447] overflow-hidden">
                  {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <button className="absolute bottom-3 right-3 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:scale-105 transition">
                  <Pencil size={26} className="text-black" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex flex-col gap-6">
              <input
                type="text"
                value={user?.email || ""}
                readOnly
                placeholder="Email/Number"
                className="w-full px-6 py-4 rounded-2xl bg-white shadow-md outline-none text-sm text-gray-700"
              />

              <input
                type="text"
                defaultValue={user?.full_name || ""}
                placeholder="Name"
                className="w-full px-6 py-4 rounded-2xl bg-white shadow-md outline-none text-sm text-gray-700"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full px-6 py-4 rounded-2xl bg-white shadow-md outline-none text-sm text-gray-700"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-6 py-4 rounded-2xl bg-white shadow-md outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-between gap-5 mt-16">
            <button className="w-full sm:w-64 py-4 rounded-2xl bg-white shadow-md font-bold text-black hover:scale-[1.02] transition">
              Save Changes
            </button>

            <button className="w-full sm:w-64 py-4 rounded-2xl bg-white shadow-md font-bold text-black hover:scale-[1.02] transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;