import React from "react";
import {
  PieChart,
  TrendingUp,
  CreditCard,
  DollarSign,
  PlusCircle,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-8 bg-[#171717]">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-whitesmoke">Dashboard</h1>
        {/* Add Transaction Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-whitesmoke rounded-lg shadow-lg hover:bg-blue-700 transition">
              <PlusCircle className="w-5 h-5" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#1f1f1f] text-whitesmoke rounded-lg shadow-lg p-6 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Add New Transaction
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                Fill in the details of the transaction you want to add.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="transaction-name"
                  className="text-sm text-gray-400"
                >
                  Transaction Name
                </label>
                <input
                  type="text"
                  id="transaction-name"
                  className="w-full p-2 bg-[#171717] text-whitesmoke rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Grocery Shopping"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="transaction-amount"
                  className="text-sm text-gray-400"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="transaction-amount"
                  className="w-full p-2 bg-[#171717] text-whitesmoke rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 100"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="transaction-type"
                  className="text-sm text-gray-400"
                >
                  Type
                </label>
                <select
                  id="transaction-type"
                  className="w-full p-2 bg-[#171717] text-whitesmoke rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                  <option value="saving">Saving</option>
                  <option value="investment">Investment</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-whitesmoke rounded-lg shadow-lg hover:bg-green-600 transition"
              >
                Add Transaction
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Income Card */}
        <Card className="bg-[#1f1f1f] border-none ">
          <CardHeader className="flex items-center justify-between">
            <div className="p-4 bg-green-100 text-green-500 rounded-full">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white">
                Income
              </CardTitle>
              <p className="text-sm text-gray-400">$12,400</p>
            </div>
          </CardHeader>
        </Card>

        {/* Expenses Card */}
        <Card className="bg-[#1f1f1f] border-none ">
          <CardHeader className="flex items-center justify-between">
            <div className="p-4 bg-red-100 text-red-500 rounded-full">
              <CreditCard className="w-8 h-8" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white">
                Expenses
              </CardTitle>
              <p className="text-sm text-gray-400">$8,200</p>
            </div>
          </CardHeader>
        </Card>

        {/* Savings Card */}
        <Card className="bg-[#1f1f1f] border-none">
          <CardHeader className="flex items-center justify-between">
            <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white">
                Savings
              </CardTitle>
              <p className="text-sm text-gray-400">$4,200</p>
            </div>
          </CardHeader>
        </Card>

        {/* Investments Card */}
        <Card className="bg-[#1f1f1f] border-none">
          <CardHeader className="flex items-center justify-between">
            <div className="p-4 bg-purple-100 text-purple-500 rounded-full">
              <PieChart className="w-8 h-8" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white">
                Investments
              </CardTitle>
              <p className="text-sm text-gray-400">$15,000</p>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Recent Activity or Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="bg-[#1f1f1f] border-none ">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between text-sm text-gray-400">
                <span>Starbucks Coffee</span>
                <span className="text-red-500">- $5.40</span>
              </li>
              <li className="flex justify-between text-sm text-gray-400">
                <span>Salary</span>
                <span className="text-green-500">+ $1,500</span>
              </li>
              <li className="flex justify-between text-sm text-gray-400">
                <span>Amazon Purchase</span>
                <span className="text-red-500">- $120.30</span>
              </li>
              <li className="flex justify-between text-sm text-gray-400">
                <span>Netflix Subscription</span>
                <span className="text-red-500">- $15.99</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Expense Breakdown */}
        <Card className="bg-[#1f1f1f] border-none ">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Expense Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 bg-gray-800 h-64 flex items-center justify-center rounded-lg">
              {/* Placeholder for Chart */}
              {/* <p className="text-gray-400 text-sm">Chart Placeholder</p> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
