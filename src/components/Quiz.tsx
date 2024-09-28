import { useState } from "react";
import { IUserAnswer, Questions } from "./Constant";
import { Question } from "./Question";
import { useQuiz } from "../context/context";

export const Quiz = () => {
  const [questions, setQuestions] = useState(Questions);
  const [counter, setCounter] = useState(0);

  const [hasQuizEnded, setHasQuizEnded] = useState(false);

  const { score } = useQuiz();

  const goBack = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
    }
  };
  const next = () => {
    if (counter + 1 < questions.length) {
      setCounter(counter + 1);
    } else {
      setHasQuizEnded(true);
    }
  };

  const handlePlayAgain =()=>{
    // reset state
  }

  return (
    <main>
      {hasQuizEnded ? (
        <div className="score">
          <h3>Your Score</h3>
          <h4>
            {score}/{questions.length}
          </h4>

          <button type="button" onClick={handlePlayAgain}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="questions">
            <Question {...questions[counter]} key={questions[counter].id} />
          </div>

          <div className="btns">
            <button type="button" onClick={goBack}>
              prev
            </button>
            <button type="button" onClick={next}>
              {counter + 1 >= questions.length ? "finish" : "next"}
            </button>
          </div>
        </>
      )}
    </main>
  );
};
