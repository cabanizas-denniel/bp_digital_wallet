import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

/**
 * Profile UI — backend:
 * GET /api/users/profile
 * PUT /api/users/profile
 */
const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="w-full px-4 py-6 lg:px-10 lg:py-8">
      <div className="mb-8 hidden lg:block">
        <h1 className="text-3xl font-extrabold text-[#062447]">Profile</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account details</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col items-center border-b border-gray-100 px-6 py-8">
          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-wallet-primary/20 bg-wallet-sky text-4xl font-bold text-[#062447]">
              {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <button
              type="button"
              className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition hover:scale-105"
            >
              <Pencil size={20} className="text-gray-700" />
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-[#062447]">{user?.full_name || "User"}</p>
          <p className="text-sm text-gray-500">{user?.email || "—"}</p>
        </div>

        <div className="border-t border-gray-100 p-6">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-400">Edit details</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600"
            />
            <input
              type="text"
              defaultValue={user?.full_name || ""}
              placeholder="Full name"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-wallet-primary/25"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-wallet-primary/25"
            />
            <button
              type="button"
              className="mt-2 w-full rounded-2xl bg-wallet-primary py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-wallet-mid"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
