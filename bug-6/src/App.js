import React from "react";

const questionsWithMultipleAnswers = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    userAnswer: null,
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Madrid",
    userAnswer: null,
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Berlin",
    userAnswer: null,
  },
  {
    question: "What is the capital of England?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "London",
    userAnswer: null,
  },
];

const Quiz = () => {
  const [answers, setAnswers] = React.useState([]);
  const handleOptionChange = (answer, i) => {
    questionsWithMultipleAnswers[i].userAnswer = answer;
  };

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    setAnswers(
      questionsWithMultipleAnswers.map(
        (question) => question.userAnswer === question.correctAnswer
      )
    );
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <form onSubmit={handleFormSubmit}>
            {questionsWithMultipleAnswers.map((question, questionIndex) => (
              <div className="form-check" key={question.question}>
                {question.question}
                <span>
                  {answers[questionIndex] === true
                    ? "✅"
                    : answers[questionIndex] === false
                    ? "❌"
                    : ""}
                </span>

                <br />
                <label>
                  {question.answers.map((answer, answerIndex) => (
                    <span key={answer + questionIndex + answerIndex}>
                      <input
                        type="radio"
                        value={answer}
                        onChange={() =>
                          handleOptionChange(answer, questionIndex)
                        }
                        style={{ marginLeft: "20px" }}
                      />
                      {answer}
                    </span>
                  ))}
                </label>
              </div>
            ))}

            <div className="form-group">
              <button className="btn btn-primary mt-2" type="submit">
                Check Answers
              </button>
              <button
                className="btn btn-danger mt-2 ml-2"
                type="reset"
                onClick={() => setAnswers([])}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
