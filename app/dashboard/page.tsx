"use client";

import Sidebar from "@/components/Sidebar";
import SummaryCards from "@/components/SummaryCards";
import IncomeExpensesChart from "@/components/IncomeExpensesChart";
import ExpensesBreakdownChart from "@/components/ExpensesBreakdownChart";
import TransactionsTable from "@/components/TransactionsTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8">
        <SummaryCards />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <IncomeExpensesChart />
          <ExpensesBreakdownChart />
        </div>
        <TransactionsTable />
      </main>
    </div>
  );
}
