"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const score = searchParams.get("score") || "0";
  const maxScore = 30; // Adjust based on total possible points

  const handleRetry = () => {
    router.push("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-2xl font-bold text-purple-700">Quiz Completed! 🎉</h1>
      
      <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700">Your Score</h2>
        <p className="text-4xl font-bold text-purple-700 mt-2">{score} / {maxScore}</p>

        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
          <div
            className="bg-purple-700 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(parseInt(score) / maxScore) * 100}%` }}
          ></div>
        </div>
      </div>

      <button
        onClick={handleRetry}
        className="mt-6 px-6 py-3 rounded-lg text-lg font-semibold bg-purple-700 text-white hover:bg-purple-800 transition"
      >
        Retry Quiz 🔄
      </button>
    </div>
  );
}
