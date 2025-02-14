"use client"; // Enables client-side interactions

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-purple-700">Quiz App</h1>
      <p className="mt-4 text-lg text-gray-600">
        Test your knowledge with interactive quizzes!
      </p>
      <button
        onClick={() => router.push("/quiz")}
        className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition"
      >
        Start Quiz →
      </button>
    </div>
  );
}
