import { ReactNode, useState } from "react";
import { IUserAnswer } from "../components/Constant";
import { QuizContext } from "./context";

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<IUserAnswer[] | null>(null);
  
    return (
      <QuizContext.Provider value={{ score, setScore, userAnswers, setUserAnswers }}>
        {children}
      </QuizContext.Provider>
    );
  };
  