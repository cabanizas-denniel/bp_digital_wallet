import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import BlurBackground from "./BlurBackground";
import { Plus, Send, CircleUserRound } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [transactions, setTransactions] = useState([
    { name: "John Doe", date: "2024-06-01", amount: "-PHP 1,200" },
    { name: "Jane Smith", date: "2024-05-28", amount: "+PHP 3,500" },
    { name: "Acme Corp.", date: "2024-05-25", amount: "-PHP 2,750" },
  ]);

  // MODALS
  const [showPlusModal, setShowPlusModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);

  // SAVINGS ACCOUNT
  const [savingsAccount, setSavingsAccount] = useState(null);

  // PLUS FLOW
  const [step, setStep] = useState(0);
  const [savingsName, setSavingsName] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");

  // SEND FLOW
  const [sendAmount, setSendAmount] = useState("");
  const [sendNumber, setSendNumber] = useState("");
  const [sendSource, setSendSource] = useState("balance");

  // TOTAL BALANCE
  const totalBalance = useMemo(() => {
    return transactions.reduce((acc, tx) => {
      const clean = tx.amount
        .replace("PHP", "")
        .replace(/,/g, "")
        .trim();

      return acc + Number(clean);
    }, 0);
  }, [transactions]);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <div className="flex min-h-screen flex-col md:flex-row overflow-hidden">

      <BlurBackground />
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-10 z-10 backdrop-blur-lg">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between 
          bg-[#1a1a40] mt-6 md:mt-0 mb-6 p-6 sm:p-8 md:p-12 
          rounded-[24px] md:rounded-[32px] gap-4">

          <div className="flex items-center gap-4 sm:gap-6">

            <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-32 md:w-32 rounded-full 
              border-2 border-orange-200 flex items-center justify-center
              bg-white/60 text-[#062447] text-xl md:text-2xl font-bold">
              {user?.full_name?.charAt(0)?.toUpperCase() || "?"}
            </div>

            <div>
              <h1 className="text-[clamp(20px,5vw,36px)] font-extrabold text-white">
                Welcome Back!
              </h1>
              <p className="text-[clamp(14px,4vw,20px)] text-[#8B8B83]">
                {user?.full_name || "User"}
              </p>
            </div>

          </div>
        </div>

        {/* BALANCE + ACTIONS */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* BALANCE CARD */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] 
            p-5 sm:p-6 md:p-10 shadow-2xl w-full md:w-[75%] 
            min-h-[160px] sm:min-h-[180px] md:min-h-[270px] 
            flex flex-col justify-between">

            <div>
              <p className="text-gray-500 font-medium">Total Balance</p>

              <div className="flex flex-wrap items-baseline gap-2 mt-2">
                <span className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900">
                  PHP
                </span>
                <span className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900">
                  {totalBalance.toLocaleString()}
                </span>
              </div>

              <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
                ID: 101902121112
              </p>

              {/* SAVINGS ACCOUNT DISPLAY */}
              {savingsAccount && (
                <div className="mt-3 bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm font-bold">{savingsAccount.name}</p>
                  <p className="text-xs text-gray-600">
                    PHP {savingsAccount.balance.toLocaleString()}
                  </p>
                </div>
              )}
            </div>

            <div className="w-full h-2 bg-[#1a1a40] rounded-full mt-4"></div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex md:flex-col gap-4 w-full md:w-[25%]">

            {/* PLUS */}
            <button
              onClick={() => {
                setShowPlusModal(true);
                setStep(0);
              }}
              className="flex-1 bg-white rounded-[18px] md:rounded-[32px] 
              flex items-center justify-center text-[#1a1a40] 
              shadow-xl hover:bg-gray-50 transition p-4"
            >
              <Plus size={24} />
            </button>

            {/* SEND */}
            <button
              onClick={() => setShowSendModal(true)}
              className="flex-1 bg-white rounded-[18px] md:rounded-[32px] 
              flex items-center justify-center gap-2 text-[#1a1a40] 
              shadow-xl hover:bg-gray-50 transition p-4"
            >
              <Send size={20} />
              <span className="text-sm font-bold">Send</span>
            </button>

          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#1a1a40] mb-4">
            Transactions
          </h2>

          <div className="bg-[#1a1a40] rounded-[30px] p-6 min-h-[300px]">

            <div className="flex flex-col gap-4">
              {transactions.map((tx, i) => (
                <div key={i} className="flex justify-between bg-[#1f1d4d] p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CircleUserRound className="text-white" />
                    <div>
                      <p className="text-white">{tx.name}</p>
                      <p className="text-gray-400 text-xs">{tx.date}</p>
                    </div>
                  </div>
                  <p className="text-white">{tx.amount}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* ================= PLUS MODAL ================= */}
      {showPlusModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl">

            {step === 0 && (
              <div className="text-center">
                <h2 className="font-bold mb-4">Create Savings Account?</h2>
                <button onClick={() => setStep(1)} className="bg-[#1a1a40] text-white px-4 py-2 rounded mr-2">Yes</button>
                <button onClick={() => setShowPlusModal(false)} className="bg-gray-300 px-4 py-2 rounded">No</button>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-3">
                <input placeholder="Account Name" className="border p-2"
                  value={savingsName}
                  onChange={(e) => setSavingsName(e.target.value)}
                />

                <input placeholder="Amount" type="number" className="border p-2"
                  value={savingsAmount}
                  onChange={(e) => setSavingsAmount(e.target.value)}
                />

                <button onClick={() => setStep(2)} className="bg-[#1a1a40] text-white p-2">Continue</button>
              </div>
            )}

            {step === 2 && (
              <div className="text-center">
                <p>Confirm create <b>{savingsName}</b>?</p>

                <button
                  onClick={() => {
                    setSavingsAccount({
                      name: savingsName,
                      balance: Number(savingsAmount),
                    });

                    setShowPlusModal(false);
                    setStep(0);
                  }}
                  className="bg-green-600 text-white px-3 py-2 rounded m-2"
                >
                  Confirm
                </button>

                <button onClick={() => setStep(1)} className="bg-gray-300 px-3 py-2 rounded">
                  Back
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= SEND MODAL ================= */}
      {showSendModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl">

            <h2 className="font-bold mb-3">Send Money</h2>

            <input placeholder="Amount" className="border p-2 w-full mb-2"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
            />

            <input placeholder="Number" className="border p-2 w-full mb-2"
              value={sendNumber}
              onChange={(e) => setSendNumber(e.target.value)}
            />

            <select
              className="border p-2 w-full mb-4"
              value={sendSource}
              onChange={(e) => setSendSource(e.target.value)}
            >
              <option value="balance">Total Balance</option>
              {savingsAccount && (
                <option value="savings">{savingsAccount.name}</option>
              )}
            </select>

            <button
              onClick={() => {
                setTransactions([
                  ...transactions,
                  {
                    name: sendNumber,
                    date: new Date().toISOString().split("T")[0],
                    amount: `-PHP ${sendAmount}`,
                  },
                ]);

                setShowSendModal(false);
                alert("Transaction complete!");
              }}
              className="bg-green-600 text-white px-3 py-2 rounded mr-2"
            >
              Confirm
            </button>

            <button onClick={() => setShowSendModal(false)} className="bg-gray-300 px-3 py-2 rounded">
              Cancel
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default HomePage;