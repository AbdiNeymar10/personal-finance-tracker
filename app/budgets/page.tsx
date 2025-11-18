"use client";
import React, { useState } from "react";

type BudgetPeriod = "MONTHLY" | "YEARLY";

const categories = [
  { id: "1", name: "Groceries" },
  { id: "2", name: "Utilities" },
  { id: "3", name: "Entertainment" },
];

export default function BudgetsPage() {
  const [categoryId, setCategoryId] = useState("");
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState<BudgetPeriod>("MONTHLY");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        { categoryId, amount, period, startDate, endDate },
        null,
        2
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create a Budget</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <select
              className="peer w-full border-2 border-gray-200 rounded-lg p-3 focus:border-indigo-500 focus:outline-none bg-white appearance-none transition"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <label className="absolute left-3 top-[-10px] bg-white px-1 text-xs text-gray-500 pointer-events-none transition-all duration-200 peer-focus:text-indigo-600 peer-focus:top-[-10px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
              Category
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              className="peer w-full border-2 border-gray-200 rounded-lg p-3 focus:border-indigo-500 focus:outline-none bg-white transition"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={0}
              required
              placeholder=" "
            />
            <label className="absolute left-3 top-[-10px] bg-white px-1 text-xs text-gray-500 pointer-events-none transition-all duration-200 peer-focus:text-indigo-600 peer-focus:top-[-10px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
              Amount
            </label>
          </div>
          <div className="relative">
            <select
              className="peer w-full border-2 border-gray-200 rounded-lg p-3 focus:border-indigo-500 focus:outline-none bg-white appearance-none transition"
              value={period}
              onChange={(e) => setPeriod(e.target.value as BudgetPeriod)}
            >
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>
            <label className="absolute left-3 top-[-10px] bg-white px-1 text-xs text-gray-500 pointer-events-none transition-all duration-200 peer-focus:text-indigo-600 peer-focus:top-[-10px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
              Period
            </label>
          </div>
          <div className="relative">
            <input
              type="date"
              className="peer w-full border-2 border-gray-200 rounded-lg p-3 focus:border-indigo-500 focus:outline-none bg-white transition"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              placeholder=" "
            />
            <label className="absolute left-3 top-[-10px] bg-white px-1 text-xs text-gray-500 pointer-events-none transition-all duration-200 peer-focus:text-indigo-600 peer-focus:top-[-10px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
              Start Date
            </label>
          </div>
          <div className="relative">
            <input
              type="date"
              className="peer w-full border-2 border-gray-200 rounded-lg p-3 focus:border-indigo-500 focus:outline-none bg-white transition"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              placeholder=" "
            />
            <label className="absolute left-3 top-[-10px] bg-white px-1 text-xs text-gray-500 pointer-events-none transition-all duration-200 peer-focus:text-indigo-600 peer-focus:top-[-10px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
              End Date
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:from-indigo-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
          >
            Create Budget
          </button>
        </form>
      </div>
    </div>
  );
}
