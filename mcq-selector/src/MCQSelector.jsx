import React from "react";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is the Capital of France?",
    options: ["Toronto", "Paris", "Venice", "Melbourne"],
  },
  {
    id: 2,
    question: "What is the formula for Suphuric Acid?",
    options: ["H2O", "HCL", "CaCO3", "H2SO4"],
  },
  {
    id: 3,
    question: "Which hook manages state in React?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
  },
  {
    id: 4,
    question: "Which method is used to render lists in React?",
    options: [".filter()", ".map()", ".reduce()", ".find()"],
  },
  {
    id: 5,
    question: "Which HTML tag creates a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
  },
  {
    id: 6,
    question: "Which HTTP method is commonly used to create a resource?",
    options: ["GET", "DELETE", "POST", "HEAD"],
  },
  {
    id: 7,
    question: "Which language is used to query PostgreSQL?",
    options: ["HTML", "SQL", "CSS", "XML"],
  },
  {
    id: 8,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
  },
  {
    id: 9,
    question: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
  },
  {
    id: 10,
    question: "Which hook is used to perform side effects?",
    options: ["useState", "useEffect", "useId", "useMemo"],
  },
];

function MCQSelector() {
  const [answers, setAnswers] = useState({});

  function handleChange(questionId, selectedOption) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all the questions.");
      return;
    }

    console.log("Selected answers:", answers);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>MCQ Selector</h2>

      {questions.map((question) => (
        <div key={question.id}>
          <h3>
            {question.id}. {question.question}
          </h3>

          {question.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={answers[question.id] === option}
                onChange={() =>
                  handleChange(question.id, option)
                }
              />
              {option}
              <br />
            </label>
          ))}

          <br />
        </div>
      ))}

      <button type="submit">Submit Answers</button>
    </form>
  );
}

export default MCQSelector;
