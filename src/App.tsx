import "./App.css";
import { Quiz } from "./components/Quiz";
import { QuizProvider } from "./context/provider";

function App() {
  return (
    <>
      <div className="cont">
        <h1>A simple quiz</h1>
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </div>
    </>
  );
}

export default App;
