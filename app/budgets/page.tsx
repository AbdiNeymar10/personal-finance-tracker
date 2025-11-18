import React from "react";
import { BudgetForm } from "../../components/BudgetForm";

// Dummy categories for demonstration; replace with real data fetching
const categories = [
  { id: "1", name: "Groceries" },
  { id: "2", name: "Utilities" },
  { id: "3", name: "Entertainment" },
];

import type { BudgetPeriod } from "../../components/BudgetForm";

type BudgetFormData = {
  categoryId: string;
  amount: number;
  period: BudgetPeriod;
  startDate: string;
  endDate: string;
};

export default function BudgetsPage() {
  const handleBudgetSubmit = (data: BudgetFormData) => {
    // TODO: Connect to API endpoint
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create a Budget</h1>
      <BudgetForm categories={categories} onSubmit={handleBudgetSubmit} />
    </div>
  );
}
