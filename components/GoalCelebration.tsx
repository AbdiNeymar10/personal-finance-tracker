import React from "react";

export default function GoalCelebration({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="text-6xl animate-bounce">🎉 Goal Achieved! 🎉</div>
    </div>
  );
}
