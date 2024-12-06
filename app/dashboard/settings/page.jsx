"use client";

import React from "react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#171717] p-6 text-whitesmoke">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Budget Settings */}
      <section className="mb-6 p-6 bg-[#1f1f1f] rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Budget Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="monthly-budget" className="block text-sm mb-2">
              Monthly Budget Limit
            </label>
            <input
              type="number"
              id="monthly-budget"
              className="w-full bg-[#171717] border border-whitesmoke text-whitesmoke p-2 rounded"
              placeholder="Enter your monthly budget"
            />
          </div>
        </div>
        <button className="mt-4 w-full py-2 bg-[#171717] text-whitesmoke border border-whitesmoke rounded hover:bg-whitesmoke transition duration-300">
          Save Budget
        </button>
      </section>

      {/* Notifications Settings */}
      <section className="mb-6 p-6 bg-[#1f1f1f] rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Receive Expense Alerts</span>
            <input type="checkbox" className="w-5 h-5 accent-whitesmoke" />
          </div>
          <div className="flex items-center justify-between">
            <span>Receive Budget Limit Warnings</span>
            <input type="checkbox" className="w-5 h-5 accent-whitesmoke" />
          </div>
        </div>
      </section>

      {/* Theme Settings */}
      <section className="mb-6 p-6 bg-[#1f1f1f] rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Theme Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Enable Dark Mode</span>
            <input type="checkbox" className="w-5 h-5 accent-whitesmoke" />
          </div>
        </div>
      </section>

      <button className="mt-6 bg-whitesmoke text-[#171717] px-6 py-3 rounded-lg font-bold hover:bg-[#e0e0e0]">
        Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;
