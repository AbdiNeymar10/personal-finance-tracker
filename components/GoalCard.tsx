import React from 'react';
import GoalProgressBar from './GoalProgressBar';

export default function GoalCard({ goal, onContribute, onCelebrate }: any) {
  const percent = Math.min(100, (goal.currentAmount / goal.targetAmount) * 100);
  const daysRemaining = Math.max(0, Math.ceil((new Date(goal.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
  const requiredMonthly = (goal.targetAmount - goal.currentAmount) / (daysRemaining / 30 || 1);
  const isCompleted = percent >= 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-3 border-l-8" style={{ borderColor: goal.color }}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{goal.name}</h3>
        <span className="text-xs px-2 py-1 rounded" style={{ background: goal.color, color: '#fff' }}>{goal.category}</span>
      </div>
      <GoalProgressBar percent={percent} color={goal.color} />
      <div className="flex justify-between text-sm">
        <span>{percent.toFixed(1)}% complete</span>
        <span>{daysRemaining} days left</span>
      </div>
      <div className="text-xs text-gray-500">Required monthly: ${requiredMonthly > 0 ? requiredMonthly.toFixed(2) : 0}</div>
      <div className="flex gap-2 mt-2">
        <input type="number" min="1" placeholder="Add funds" className="input input-bordered input-sm w-24" id={`contrib-${goal.id}`} />
        <button className="btn btn-sm btn-success" onClick={() => {
          const val = parseFloat((document.getElementById(`contrib-${goal.id}`) as HTMLInputElement)?.value || '0');
          if (val > 0) onContribute(goal.id, val);
        }}>Contribute</button>
        {isCompleted && (
          <button className="btn btn-sm btn-info animate-bounce" onClick={() => onCelebrate(goal.id)}>🎉</button>
        )}
      </div>
    </div>
  );
}
