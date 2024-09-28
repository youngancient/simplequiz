import { createContext, useContext, useState, ReactNode } from "react";
import { IUserAnswer } from "../components/Constant";

// Define types for context values
interface QuizContextType {
  score: number;
  setScore: (score: number) => void;
  userAnswers: IUserAnswer[] | null;
  setUserAnswers: (answers: IUserAnswer[] | null) => void;
}

// Create the context with default values
export const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Hook to easily use the context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
