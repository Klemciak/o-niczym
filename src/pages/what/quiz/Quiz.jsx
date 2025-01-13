import React, { useState } from "react";
import "./Quiz.scss";

const questionsList = [
  "Czy lubisz programowanie?",
  "Czy jesz śniadanie codziennie?",
  "Czy uprawiasz sport regularnie?",
  "Czy oglądasz filmy sci-fi?",
  "Czy umiesz pływać?",
  "Czy wierzysz w życie pozaziemskie?",
  "Czy podróżowanie sprawia Ci radość?",
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isYes) => {
    if (isYes) setScore(score + 1);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questionsList.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = () => {
    switch (score) {
      case 0:
        return "0 punktów! Wygląda na to, że jesteś mistrzem unikania odpowiedzi. To talent sam w sobie!";
      case 1:
        return "1 punkt! Masz potencjał, ale wygląda na to, że Twoim ulubionym zajęciem jest liczenie chmur.";
      case 2:
        return "2 punkty! Hmm, może pora zacząć dzień od kawy? To może pomóc w koncentracji!";
      case 3:
        return "3 punkty! Z naszych badań wynika, że powinieneś uwielbiać pierogi. Smacznego!";
      case 4:
        return "4 punkty! Gratulacje, prawdopodobnie wierzysz w jednorożce i masz ich plakat w pokoju.";
      case 5:
        return "5 punktów! Nieźle! Jesteś typem człowieka, który zawsze ma przy sobie zapasowy długopis.";
      case 6:
        return "6 punktów! Fantastycznie! Prawdopodobnie umiesz rozwiązać kostkę Rubika w mniej niż 3 minuty.";
      case 7:
        return "7 punktów! Absolutna perfekcja! Jesteś jak ninja w świecie quizów!";
      default:
        return "Coś poszło nie tak! Spróbuj jeszcze raz.";
    }
  };

  return (
    <div className="quiz-wrap">
      <h2>Może masz ochotę na szybki quiz ?</h2>
      {!showResult ? (
        <div className="question-container">
          <h3>
            Pytanie {currentQuestionIndex + 1} / {questionsList.length}
          </h3>
          <p>{questionsList[currentQuestionIndex]}</p>
          <div className="buttons">
            <button onClick={() => handleAnswer(true)}>Tak</button>
            <button onClick={() => handleAnswer(false)}>Nie</button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3>
            Twój wynik: {score}/{questionsList.length}
          </h3>
          <p>{getResultMessage()}</p>
          <button onClick={restartQuiz}>Rozpocznij ponownie</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
