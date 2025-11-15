import {
  ArrowDownCircle,
  ArrowUpCircle,
  PiggyBank,
  TrendingUp,
  Wallet,
} from "lucide-react";

const kpis = [
  {
    label: "Total Balance",
    value: "$12,500",
    icon: Wallet,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    label: "Monthly Income",
    value: "$4,200",
    icon: ArrowUpCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    label: "Monthly Expenses",
    value: "$2,900",
    icon: ArrowDownCircle,
    color: "bg-red-100 text-red-600",
  },
  {
    label: "Savings Rate",
    value: "31%",
    icon: PiggyBank,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Net Cash Flow",
    value: "$1,300",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600",
  },
];

export default function SummaryCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {kpis.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className="bg-white rounded-2xl shadow-sm p-5 flex flex-col items-start gap-3 border border-gray-100"
        >
          <span className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-6 h-6" />
          </span>
          <span className="text-2xl font-semibold text-gray-900">{value}</span>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {label}
          </span>
        </div>
      ))}
    </section>
  );
}
