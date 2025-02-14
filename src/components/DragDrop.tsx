"use client";

import { useState, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const terms = [
  { id: "variable", text: "Variable", match: "A symbol that represents a number" },
  { id: "coefficient", text: "Coefficient", match: "A number that multiplies a variable" },
  { id: "expression", text: "Expression", match: "A combination of numbers, variables, and operations" },
  { id: "equation", text: "Equation", match: "A statement that two expressions are equal" },
];

export default function DragDrop({ setDragCompleted }: { setDragCompleted: (value: boolean) => void }) {
  const [matched, setMatched] = useState<Record<string, boolean>>({});

  // Check if all terms are matched
  useEffect(() => {
    if (Object.keys(matched).length === terms.length) {
      setDragCompleted(true); // Notify QuizPage
    }
  }, [matched, setDragCompleted]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Match the Algebraic Terms</h2>

      {/* Drag Items */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {terms.map((term) => (
          <DraggableItem key={term.id} id={term.id} text={term.text} />
        ))}
      </div>

      {/* Drop Zones */}
      <div className="space-y-4">
        {terms.map((term) => (
          <DropZone key={term.id} term={term} matched={matched} setMatched={setMatched} />
        ))}
      </div>
    </div>
  );
}

/* Draggable Term */
function DraggableItem({ id, text }: { id: string; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "term",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [ref, drag]);

  return (
    <div
      ref={ref}
      className={`p-3 bg-purple-600 text-white rounded-lg shadow-md cursor-pointer transition ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {text}
    </div>
  );
}

/* Drop Zone */
function DropZone({
  term,
  matched,
  setMatched,
}: {
  term: { id: string; text: string; match: string };
  matched: Record<string, boolean>;
  setMatched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "term",
    drop: (item: { id: string }) => {
      if (item.id === term.id) {
        setMatched((prev) => ({ ...prev, [term.id]: true }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border-2 rounded-lg transition ${
        matched[term.id] ? "border-green-500 bg-green-100" : isOver ? "border-blue-500 bg-blue-100" : "border-gray-300"
      }`}
    >
      <p className="text-gray-700">{term.match}</p>
    </div>
  );
}
