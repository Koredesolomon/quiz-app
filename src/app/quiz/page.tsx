"use client";

import { useState } from "react";
import { questions, Question } from "@/utils/quizData";

export default function QuestionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questionData: Question = questions[currentQuestionIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setIsCorrect(index === questionData.correctAnswer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h2 className="text-xl font-semibold text-gray-800">{questionData.question}</h2>
      <div className="mt-4 w-full max-w-md">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-3 my-2 text-lg font-medium border rounded-lg transition ${
              selectedAnswer !== null
                ? index === questionData.correctAnswer
                  ? "bg-green-500 text-white border-green-500"
                  : index === selectedAnswer
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-200 border-gray-300"
                : "bg-white border-gray-400 hover:bg-gray-100"
            }`}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <div className={`mt-4 text-lg font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
          {isCorrect ? "✅ Right! Well done!" : "❌ Think again!"}
        </div>
      )}

      {selectedAnswer !== null && (
        <p className="mt-2 text-gray-700 text-sm">Correct Answer: {questionData.answer ?? "Not available"}</p>
      )}

      {selectedAnswer !== null && currentQuestionIndex < questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition"
        >
          Next Question →
        </button>
      )}
    </div>
  );
}
