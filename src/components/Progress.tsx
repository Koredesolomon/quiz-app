export default function Progress({ goal, current }: { goal: number; current: number }) {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-purple-700 text-white text-lg rounded-lg shadow-md">
      <span>Goal: {goal} points</span>
      <span>Current Points: {current}</span>
    </div>
  );
}
