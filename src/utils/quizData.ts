export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // Ensure this exists
  answer?: string; // Optional property, but needed for clarity
}

export const questions: Question[] = [
  {
    question: "What do plants need for photosynthesis?",
    options: ["Oxygen & Sugar", "Sunlight, Water & Carbon Dioxide", "Protein & Soil"],
    correctAnswer: 1,
    answer: "Sunlight, Water & Carbon Dioxide",
  },
  {
    question: "What is the role of sunlight in photosynthesis?",
    options: ["It provides energy to make food", "It helps plants absorb water", "It turns leaves green"],
    correctAnswer: 0,
    answer: "It provides energy to make food",
  },
];
