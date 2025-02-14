import React, { useState } from "react";

interface QuestionMCQProps {
  questionData: {
    question: string;
    options: string[];
    correct: number;
  };
  onNext: (points: number) => void;
}

const QuestionMCQ: React.FC<QuestionMCQProps> = ({ questionData, onNext }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCorrect(index === questionData.correct);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold">{questionData.question}</h2>
      <div className="mt-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={`block w-full text-left p-2 rounded-lg border ${selected === index ? (isCorrect ? "bg-green-200" : "bg-red-200") : "bg-gray-200"}`}
            onClick={() => handleSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
      {selected !== null && (
        <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded" onClick={() => onNext(isCorrect ? 10 : 0)}>Next</button>
      )}
    </div>
  );
};

export default QuestionMCQ;
