"use client";
import React, { useState } from "react";

export type BudgetPeriod = "MONTHLY" | "YEARLY";

export interface BudgetFormProps {
  categories: { id: string; name: string }[];
  onSubmit: (data: {
    categoryId: string;
    amount: number;
    period: BudgetPeriod;
    startDate: string;
    endDate: string;
  }) => void;
  initialData?: {
    categoryId: string;
    amount: number;
    period: BudgetPeriod;
    startDate: string;
    endDate: string;
  };
}

export const BudgetForm: React.FC<BudgetFormProps> = ({
  categories,
  onSubmit,
  initialData,
}) => {
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || "");
  const [amount, setAmount] = useState(initialData?.amount || 0);
  const [period, setPeriod] = useState<BudgetPeriod>(
    initialData?.period || "MONTHLY"
  );
  const [startDate, setStartDate] = useState(initialData?.startDate || "");
  const [endDate, setEndDate] = useState(initialData?.endDate || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ categoryId, amount, period, startDate, endDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded shadow"
    >
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          className="w-full border rounded p-2"
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
      </div>
      <div>
        <label className="block mb-1 font-medium">Amount</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={0}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Period</label>
        <select
          className="w-full border rounded p-2"
          value={period}
          onChange={(e) => setPeriod(e.target.value as BudgetPeriod)}
        >
          <option value="MONTHLY">Monthly</option>
          <option value="YEARLY">Yearly</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Start Date</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">End Date</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {initialData ? "Update Budget" : "Create Budget"}
      </button>
    </form>
  );
};
