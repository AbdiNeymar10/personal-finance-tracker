import {
  HomeIcon,
  WalletIcon,
  TrendingUpIcon,
  TargetIcon,
  BarChart2Icon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { name: "Budgets", icon: WalletIcon, href: "/budgets" },
  { name: "Goals", icon: TargetIcon, href: "/goals" },
  { name: "Reports", icon: BarChart2Icon, href: "/reports" },
  { name: "Settings", icon: SettingsIcon, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen flex flex-col py-8 px-6 border-r border-gray-100">
      <div className="mb-10 flex items-center gap-2">
        <TrendingUpIcon className="text-indigo-600" size={28} />
        <span className="text-xl font-bold tracking-tight text-gray-800">
          FinTrack
        </span>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition font-medium"
          >
            <Icon className="w-5 h-5 text-indigo-500" />
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
