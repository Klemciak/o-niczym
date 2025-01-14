import React, { useState } from "react";
import "./Quiz.scss";
import { useTranslations } from "../../../translations/useTranslations";

const Quiz = () => {
  const t = useTranslations("what"); // Pobierz tłumaczenia dla klucza "about"
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Obsługa odpowiedzi
  const handleAnswer = (isYes) => {
    if (isYes) setScore(score + 1);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < t.quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // Restart quizu
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  // Pobierz wiadomość na podstawie wyniku
  const getResultMessage = () => {
    return t.quizResults[score.toString()] || t.quizResults.default;
  };

  return (
    <div className="quiz-wrap">
      <h2>{t.quizTitle}</h2>
      {!showResult ? (
        <div className="question-container">
          <h3>
            {t.quizNumber} {currentQuestionIndex + 1} / {t.quizQuestions.length}
          </h3>
          <p>{t.quizQuestions[currentQuestionIndex]}</p>
          <div className="buttons">
            <button onClick={() => handleAnswer(true)}>{t.quizYes}</button>
            <button onClick={() => handleAnswer(false)}>{t.quizNo}</button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3>
            {t.quizScore}: {score}/{t.quizQuestions.length}
          </h3>
          <p>{getResultMessage()}</p>
          <button onClick={restartQuiz}>{t.quizAgain}</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
