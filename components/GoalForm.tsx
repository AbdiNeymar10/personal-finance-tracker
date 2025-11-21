import React, { useState } from "react";

const categories = [
  { label: "Emergency Fund", value: "emergency", color: "#f87171" },
  { label: "Vacation", value: "vacation", color: "#60a5fa" },
  { label: "Down Payment", value: "downpayment", color: "#fbbf24" },
  { label: "Custom", value: "custom", color: "#34d399" },
];

export default function GoalForm({
  onSubmit,
}: {
  onSubmit: (goal: any) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    targetDate: "",
    category: categories[0].value,
    color: categories[0].color,
    currentAmount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "category") {
      const cat = categories.find((c) => c.value === e.target.value);
      if (cat) setForm((f) => ({ ...f, color: cat.color }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  // Render form

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block font-medium">Goal Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Target Amount</label>
        <input
          name="targetAmount"
          type="number"
          value={form.targetAmount}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Current Amount</label>
        <input
          name="currentAmount"
          type="number"
          value={form.currentAmount}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Target Date</label>
        <input
          name="targetDate"
          type="date"
          value={form.targetDate}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium">Color</label>
        <input
          name="color"
          type="color"
          value={form.color}
          onChange={handleChange}
          className="w-12 h-8 p-0 border-none"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Create Goal
      </button>
    </form>
  );
}
