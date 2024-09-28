import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { IOption, IQuestion, IUserAnswer } from "./Constant";
import { useQuiz } from "../context/context";

export const Question: React.FC<IQuestion> = ({
  id,
  question,
  options,
  answer,
}) => {
  return (
    <div className="question">
      <h4>{question}</h4>

      <div className="options">
        {options.map((ele) => (
          <Option {...ele} key={ele.id} questionId={id} answerId={answer} />
        ))}
      </div>
    </div>
  );
};

interface IOptionFunc extends IOption {
  questionId: number;
  answerId: number;
}
export const Option: React.FC<IOptionFunc> = ({
  questionId,
  id,
  text,
  answerId,
}) => {
  const { score, setScore, userAnswers, setUserAnswers } = useQuiz();

  // we will check if the user has selected the answer before

  const existingAnswerIndex = useMemo(() => {
    return userAnswers
      ? userAnswers.findIndex((answer) => answer.questionId === questionId)
      : -1;
  }, [userAnswers, questionId]);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (existingAnswerIndex !== -1 && userAnswers) {
      setIsSelected(userAnswers[existingAnswerIndex].answerId === id);
    } else {
      setIsSelected(false);
    }
  }, [existingAnswerIndex, userAnswers, id]);

  const handleOptionClick = () => {
    // check if the userAnswers array is empty
    if (!userAnswers) {
      setUserAnswers([{ questionId: questionId, answerId: id }]);
    } else {
      if (existingAnswerIndex !== -1) {
        // If user already answered this question, update the answer
        const updatedAnswers = [...userAnswers];
        updatedAnswers[existingAnswerIndex].answerId = id;
        setUserAnswers(updatedAnswers);
        if (id == answerId) {
          setScore(score + 1);
        } else {
          setScore(score - 1);
        }
      } else {
        // If user hasn't answered this question yet, add the new answer
        setUserAnswers([
          ...userAnswers,
          { questionId: questionId, answerId: id },
        ]);
      }
    }

    setIsSelected(true);

    if (id == answerId) {
      setScore(score + 1);
    }
  };

  return (
    <button
      type="button"
      onClick={handleOptionClick}
      className={isSelected ? "selected" : ""}
    >
      {text}
    </button>
  );
};
