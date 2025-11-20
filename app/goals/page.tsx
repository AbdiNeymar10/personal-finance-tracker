"use client"
import React, { useState } from 'react';
import GoalForm from '@/components/GoalForm';
import GoalCard from '@/components/GoalCard';
import GoalCelebration from '@/components/GoalCelebration';

const initialGoals = [
  // Example static data; replace with API fetch later
  {
    id: 1,
    name: 'Emergency Fund',
    targetAmount: 2000,
    currentAmount: 500,
    targetDate: '2026-06-01',
    category: 'Emergency Fund',
    color: '#f87171',
  },
];

export default function GoalsPage() {
  const [goals, setGoals] = useState(initialGoals);
  const [celebrateId, setCelebrateId] = useState<number|null>(null);

  const handleCreate = (goal: any) => {
    setGoals([
      ...goals,
      {
        ...goal,
        id: Date.now(),
        targetAmount: parseFloat(goal.targetAmount),
        currentAmount: parseFloat(goal.currentAmount) || 0,
        category: goal.category === 'custom' ? 'Custom' : goal.category,
      },
    ]);
  };

  const handleContribute = (id: number, amount: number) => {
    setGoals(goals => goals.map(g => g.id === id ? { ...g, currentAmount: g.currentAmount + amount } : g));
  };

  const handleCelebrate = (id: number) => {
    setCelebrateId(id);
    setTimeout(() => setCelebrateId(null), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Financial Goals</h1>
      <GoalForm onSubmit={handleCreate} />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {goals.map(goal => (
          <div key={goal.id} className="relative">
            <GoalCard goal={goal} onContribute={handleContribute} onCelebrate={handleCelebrate} />
            <GoalCelebration show={celebrateId === goal.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
