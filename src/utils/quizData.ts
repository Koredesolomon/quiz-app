export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // The index of the correct option
}

export const questions: Question[] = [
  {
    question: "What do plants need for photosynthesis?",
    options: ["Oxygen & Sugar", "Sunlight, Water & Carbon Dioxide", "Protein & Soil"],
    correctAnswer: 1, // Index of the correct answer
  },
  {
    question: "What is the role of sunlight in photosynthesis?",
    options: ["It provides energy to make food", "It helps plants absorb water", "It turns leaves green"],
    correctAnswer: 0,
  },
];
