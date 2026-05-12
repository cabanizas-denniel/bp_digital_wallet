import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Send,
  CircleUserRound,
  Wallet,
  X,
  Eye,
  EyeOff,
  ChevronRight,
} from "lucide-react";

const SITE_NAME = "Digital Wallet";

/**
 * UI maps to Group 5 endpoints (wire fetch when backend exists):
 * - POST /api/payments/send          → Send money modal
 * - POST /api/wallets               → Cash in / create wallet modal
 * - GET  /api/wallets/{wallet_id}   → Wallet details modal
 * History lives on /transactions → GET /api/payments/history/{user_id}
 */

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition-shadow placeholder:text-slate-400 focus:border-wallet-primary/40 focus:ring-2 focus:ring-wallet-primary/25";

const HomePage = () => {
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [walletId] = useState("WL-101902121112");

  const [transactions, setTransactions] = useState([
    { name: "John Doe", date: "2024-06-01", amount: "-PHP 1,200" },
    { name: "Jane Smith", date: "2024-05-28", amount: "+PHP 3,500" },
    { name: "Acme Corp.", date: "2024-05-25", amount: "-PHP 2,750" },
  ]);

  const [showCashInModal, setShowCashInModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const [cashInAmount, setCashInAmount] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [sendRecipient, setSendRecipient] = useState("");

  const totalBalance = useMemo(() => {
    return transactions.reduce((acc, tx) => {
      const clean = tx.amount.replace("PHP", "").replace(/,/g, "").trim();
      return acc + Number(clean);
    }, 0);
  }, [transactions]);

  const balanceFormatted = totalBalance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const recentThree = transactions.slice(0, 3);

  return (
    <div className="w-full">
      <div className="w-full max-w-none space-y-6 px-4 py-4 lg:space-y-8 lg:px-10 lg:py-8">
        {/* Desktop title */}
        <div className="mb-8 hidden lg:block">
        <h1 className="text-3xl font-extrabold text-[#062447]">Home</h1>
        <p className="mt-1 text-sm text-gray-500">Overview your wallet and recent transactions</p>
   
      </div>

        {/* Main wallet card — navy gradient (matches Login / Register hero) */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-wallet-primary via-wallet-mid to-wallet-navy p-5 text-white shadow-wallet sm:p-6">
          <div className="mb-5 inline-flex rounded-full bg-white/20 p-1">
            <span className="rounded-full bg-white px-6 py-2 text-center text-sm font-bold text-wallet-primary shadow-sm">
              Wallet
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/85">
                  Available balance
                </span>
                <button
                  type="button"
                  onClick={() => setBalanceHidden((v) => !v)}
                  className="rounded-lg p-1 text-white/90 hover:bg-white/10"
                  aria-label={balanceHidden ? "Show balance" : "Hide balance"}
                >
                  {balanceHidden ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-xl font-semibold">PHP</span>
                <span className="text-[clamp(1.75rem,6vw,2.75rem)] font-black leading-none tracking-tight">
                  {balanceHidden ? "••••••" : balanceFormatted}
                </span>
              </div>
              <p className="mt-4 font-mono text-[11px] text-white/75">Wallet · {walletId}</p>
            </div>

            {/* Cash in → POST /api/wallets */}
            <button
              type="button"
              onClick={() => setShowCashInModal(true)}
              className="flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-bold text-wallet-primary shadow-lg transition hover:bg-white/95 active:scale-[0.98] sm:self-center"
            >
              <Plus className="h-5 w-5 stroke-[2.5]" />
              Cash In
            </button>
          </div>
        </section>

        {/* Quick actions — minimal set */}
        <section className="mt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">Payments & wallet</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setShowSendModal(true)}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white py-6 shadow-sm transition active:scale-[0.98]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wallet-primary/10 text-wallet-primary">
                <Send className="h-7 w-7" strokeWidth={2} />
              </span>
              <span className="text-sm font-bold text-[#062447]">Send</span>
            </button>
            <button
              type="button"
              onClick={() => setShowWalletModal(true)}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white py-6 shadow-sm transition active:scale-[0.98]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wallet-primary/10 text-wallet-primary">
                <Wallet className="h-7 w-7" strokeWidth={2} />
              </span>
              <span className="text-sm font-bold text-[#062447]">Wallet</span>
            </button>
          </div>
        </section>

        {/* Recent activity preview */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <h2 className="font-bold text-[#062447]">Recent</h2>
            <Link
              to="/transactions"
              className="flex items-center gap-0.5 text-sm font-semibold text-wallet-primary"
            >
              See all
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-gray-50">
            {recentThree.map((tx, i) => (
              <li key={i} className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wallet-sky text-wallet-primary">
                    <CircleUserRound className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-gray-900">{tx.name}</p>
                    <p className="text-xs text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <span
                  className={`shrink-0 text-sm font-bold ${
                    tx.amount.startsWith("+") ? "text-emerald-600" : "text-gray-900"
                  }`}
                >
                  {tx.amount}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Cash In — POST /api/wallets */}
      {showCashInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2 className="text-lg font-extrabold text-[#062447]">Cash In</h2>
              <button
                type="button"
                onClick={() => setShowCashInModal(false)}
                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 p-5">
              <p className="text-xs text-gray-600">
                Credits your wallet balance. Backend integration:{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px]">POST /api/wallets</code>
              </p>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Amount (PHP)</label>
                <input
                  type="number"
                  className={inputClass}
                  placeholder="0.00"
                  value={cashInAmount}
                  onChange={(e) => setCashInAmount(e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!cashInAmount) return;
                  setTransactions((prev) => [
                    {
                      name: "Cash in",
                      date: new Date().toISOString().slice(0, 10),
                      amount: `+PHP ${cashInAmount}`,
                    },
                    ...prev,
                  ]);
                  setCashInAmount("");
                  setShowCashInModal(false);
                }}
                className="w-full rounded-2xl bg-wallet-primary py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-wallet-mid"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send — POST /api/payments/send */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2 className="text-lg font-extrabold text-[#062447]">Send money</h2>
              <button
                type="button"
                onClick={() => setShowSendModal(false)}
                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 p-5">
              <p className="text-xs text-gray-600">
                Outgoing transfers use{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px]">POST /api/payments/send</code>
              </p>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Amount (PHP)</label>
                <input
                  type="number"
                  className={inputClass}
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase text-gray-500">
                  Recipient / wallet ID
                </label>
                <input
                  className={inputClass}
                  value={sendRecipient}
                  onChange={(e) => setSendRecipient(e.target.value)}
                  placeholder="Mobile or ID"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!sendAmount || !sendRecipient) return;
                  setTransactions((prev) => [
                    ...prev,
                    {
                      name: sendRecipient,
                      date: new Date().toISOString().slice(0, 10),
                      amount: `-PHP ${sendAmount}`,
                    },
                  ]);
                  setSendAmount("");
                  setSendRecipient("");
                  setShowSendModal(false);
                }}
                className="w-full rounded-2xl bg-wallet-primary py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-wallet-mid"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet details — GET /api/wallets/{wallet_id} */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2 className="text-lg font-extrabold text-[#062447]">Wallet</h2>
              <button
                type="button"
                onClick={() => setShowWalletModal(false)}
                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3 p-5 text-sm">
              <p className="text-xs text-gray-600">
                Wallet details are retrieved with{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px]">
                  {"GET /api/wallets/{wallet_id}"}
                </code>
              </p>
              <div className="rounded-xl bg-wallet-sky p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">Wallet ID</p>
                <p className="mt-1 font-mono font-bold text-[#062447]">{walletId}</p>
              </div>
              <div className="rounded-xl bg-wallet-sky p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">Available balance</p>
                <p className="mt-1 text-lg font-black text-[#062447]">PHP {balanceFormatted}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
