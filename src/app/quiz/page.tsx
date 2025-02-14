"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/utils/quizData";
import DragDrop from "@/components/DragDrop";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [dragCompleted, setDragCompleted] = useState(false); // For drag-and-drop
  const router = useRouter();

  const question = questions[currentQuestion];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (question.type === "multiple-choice" && selectedOption === question.answer) {
      setScore(score + 10);
    } else if (question.type === "drag-and-drop" && dragCompleted) {
      setScore(score + 10);
    }

    setSelectedOption(null);
    setDragCompleted(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push(`/quiz/result?score=${score + (selectedOption === question.answer || dragCompleted ? 10 : 0)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h2 className="text-xl font-semibold text-purple-700">Goal: 30 Points</h2>
      <h2 className="text-xl font-semibold text-gray-700">Current Points: {score}</h2>

      <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-medium">{question.question}</h3>

        {question.type === "multiple-choice" ? (
          <div className="mt-4 space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full px-4 py-3 border rounded-lg ${
                  selectedOption === option
                    ? option === question.answer
                      ? "bg-green-200 border-green-500"
                      : "bg-red-200 border-red-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <DragDrop setDragCompleted={setDragCompleted} />
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedOption && !dragCompleted}
        className={`mt-6 px-6 py-3 rounded-lg text-lg font-semibold transition ${
          selectedOption || dragCompleted
            ? "bg-purple-700 text-white hover:bg-purple-800"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {currentQuestion < questions.length - 1 ? "Next Question →" : "See Results →"}
      </button>
    </div>
  );
}
