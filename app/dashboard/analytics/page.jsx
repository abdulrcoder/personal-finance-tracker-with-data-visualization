"use client";

import React from "react";
import { TrendingUp, TrendingDown, DollarSign, Wallet } from "lucide-react";

const summaryData = {
  totalIncome: "$12,345",
  totalExpense: "$8,900",
  balance: "$3,445",
};

const expenseBreakdown = [
  { category: "Food", amount: "$1,200", icon: "🍔" },
  { category: "Rent", amount: "$2,500", icon: "🏠" },
  { category: "Transport", amount: "$300", icon: "🚗" },
  { category: "Entertainment", amount: "$400", icon: "🎬" },
];

const recentTransactions = [
  {
    id: 1,
    description: "Grocery Shopping",
    amount: "-$200",
    date: "24 Nov 2024",
  },
  { id: 2, description: "Salary", amount: "+$5,000", date: "23 Nov 2024" },
  {
    id: 3,
    description: "Netflix Subscription",
    amount: "-$15",
    date: "22 Nov 2024",
  },
  { id: 4, description: "Gym Membership", amount: "-$50", date: "21 Nov 2024" },
];

const AnalyticsPage = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-[#171717] text-gray-100">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white">Expense Tracker</h1>
        <p className="text-gray-400 mt-2">
          Monitor your income, expenses, and transactions.
        </p>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Total Income */}
        <div className="bg-green-800 text-green-100 p-6 rounded-lg shadow-xl transition-all hover:scale-105">
          <div className="flex items-center space-x-4">
            <DollarSign className="h-8 w-8 text-green-400" />
            <div>
              <h2 className="text-lg font-semibold">Total Income</h2>
              <p className="text-2xl font-bold">{summaryData.totalIncome}</p>
            </div>
          </div>
        </div>

        {/* Total Expense */}
        <div className="bg-red-800 text-red-100 p-6 rounded-lg shadow-xl transition-all hover:scale-105">
          <div className="flex items-center space-x-4">
            <TrendingDown className="h-8 w-8 text-red-400" />
            <div>
              <h2 className="text-lg font-semibold">Total Expense</h2>
              <p className="text-2xl font-bold">{summaryData.totalExpense}</p>
            </div>
          </div>
        </div>

        {/* Balance */}
        <div className="bg-blue-800 text-blue-100 p-6 rounded-lg shadow-xl transition-all hover:scale-105">
          <div className="flex items-center space-x-4">
            <Wallet className="h-8 w-8 text-blue-400" />
            <div>
              <h2 className="text-lg font-semibold">Balance</h2>
              <p className="text-2xl font-bold">{summaryData.balance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expense Breakdown Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Expense Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {expenseBreakdown.map((item, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] text-gray-200 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-2xl transition-all"
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold">{item.category}</h3>
                <p className="text-gray-400">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">All Transactions</h2>
        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t border-gray-700  transition-all"
                >
                  <td className="py-3 px-4">{transaction.description}</td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      transaction.amount.startsWith("-")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
