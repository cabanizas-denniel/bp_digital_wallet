import React, { useEffect, useMemo, useState } from "react";
import { CircleUserRound } from "lucide-react";

/**
 * Payment history UI — backend: GET /api/payments/history/{user_id}
 */
const TransactionsPage = () => {
  const [user, setUser] = useState(null);
  const [items] = useState([
    { id: "1", counterparty: "John Doe", date: "2024-06-01", amount: -1200 },
    { id: "2", counterparty: "Jane Smith", date: "2024-05-28", amount: 3500 },
    { id: "3", counterparty: "Acme Corp.", date: "2024-05-25", amount: -2750 },
    { id: "4", counterparty: "Utility Bill", date: "2024-05-20", amount: -890 },
    { id: "5", counterparty: "Salary credit", date: "2024-05-15", amount: 18500 },
  ]);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const sorted = useMemo(
    () => [...items].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [items]
  );

  return (
    <div className="w-full px-4 py-4 lg:px-10 lg:py-8">
      <div className="hidden items-center justify-between lg:flex">
      <div className="mb-8 hidden lg:block">
        <h1 className="text-3xl font-extrabold text-[#062447]">History</h1>
        <p className="mt-1 text-sm text-gray-500">View your full transaction history</p>
   
      </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <ul className="divide-y divide-gray-100">
          {sorted.map((tx) => (
            <li key={tx.id} className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wallet-sky text-wallet-primary">
                  <CircleUserRound className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">{tx.counterparty}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <span
                className={`shrink-0 text-sm font-bold tabular-nums ${
                  tx.amount >= 0 ? "text-emerald-600" : "text-gray-900"
                }`}
              >
                {tx.amount >= 0 ? "+" : "−"}PHP{" "}
                {Math.abs(tx.amount).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionsPage;
