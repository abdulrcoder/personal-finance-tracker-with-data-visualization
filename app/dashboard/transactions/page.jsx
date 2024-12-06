import React from "react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: -5.4,
    date: "Nov 24, 2024",
  },
  { id: 2, description: "Salary", amount: 1500, date: "Nov 20, 2024" },
  {
    id: 3,
    description: "Amazon Purchase",
    amount: -120.3,
    date: "Nov 18, 2024",
  },
  {
    id: 4,
    description: "Netflix Subscription",
    amount: -15.99,
    date: "Nov 15, 2024",
  },
  { id: 5, description: "Gym Membership", amount: -50, date: "Nov 10, 2024" },
];

const TransactionsPage = () => {
  return (
    <div className="p-6 min-h-screen bg-[#171717] text-whitesmoke">
      {/* Page Title */}
      <div className="text-3xl font-bold mb-6 text-center">
        Transactions History
      </div>

      {/* Transactions List */}
      <div className="space-y-6">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`bg-[#1f1f1f] p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
              transaction.amount < 0
                ? "border-l-4 border-red-500"
                : "border-l-4 border-green-500"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {transaction.description}
                </h3>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
              <div
                className={`text-xl font-bold ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsPage;
