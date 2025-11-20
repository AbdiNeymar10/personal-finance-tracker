import React from 'react';

export default function GoalProgressBar({ percent, color }: { percent: number; color: string }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="h-3 rounded-full transition-all duration-500"
        style={{ width: `${percent}%`, background: color }}
      />
    </div>
  );
}
