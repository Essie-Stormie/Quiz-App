import React, { useState } from "react";
import "./App.css";
import { quizData } from "./data/data";



function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} out of {quizData.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>
            Question {currentQuestion + 1} of {quizData.length}
          </h2>
          <p>{quizData[currentQuestion].question}</p>
          <div className="choices">
            {quizData[currentQuestion].choices.map((choice, index) => (
              <button key={index} onClick={() => handleAnswerClick(choice)}>
                {choice}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;