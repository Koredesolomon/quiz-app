export interface Question {
  type: string; // Add this property
  question: string;
  options: string[];
  correctAnswer: number; // The index of the correct option
}

export const questions: Question[] = [
  {
    type: "multiple-choice", // Example type
    question: "What do plants need for photosynthesis?",
    options: ["Oxygen & Sugar", "Sunlight, Water & Carbon Dioxide", "Protein & Soil"],
    correctAnswer: 1,
  },
  {
    type: "multiple-choice", // Example type
    question: "What is the role of sunlight in photosynthesis?",
    options: ["It provides energy to make food", "It helps plants absorb water", "It turns leaves green"],
    correctAnswer: 0,
  },
];
