import React, { useState } from "react";
import "./ExamForm.css";

const ExamForm = () => {
  const [questions, setQuestions] = useState([
    { type: "Multiple choices", options: ["", ""], mark: "", answer: "" },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { type: "Short Answer", answer: "", mark: "" },
    ]);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answer = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="exam__form__container">
      <div className="overlay"></div>
      <div className="exam-form">
        <div className="top__page">
          <p>Create New Exam</p>
          <p>{"Tuesday 25,Jun"}</p>
        </div>
        <div className="title">
          <h2>Exam Information</h2>
        </div>
        <div className="exam-info">
          <div className="exam__text">
            <input type="text" placeholder="Course Name" />
            <input type="text" placeholder="Level" />
            <input type="text" placeholder="Full Mark" />
          </div>
          <div className="exam__data">
            <input type="date" />
            <input type="time" />
            <input type="text" placeholder="Duration" />
          </div>
        </div>
        <div className="title">
          <h2>Questions</h2>
        </div>
        <div className="questions">
          {questions.map((question, index) => (
            <div className="question-box" key={index}>
              <div className="question-header">
                <input type="text" placeholder={`Question ${index + 1}`} />
                <input type="text" placeholder="Mark" />
              </div>
              <div className="question-content">
                <select value={question.type}>
                  <option value="Multiple choices">Multiple choices</option>
                  <option value="Short Answer">Short Answer</option>
                </select>
                <input type="file" />
                {question.type === "Multiple choices" ? (
                  <>
                    {question.options.map((option, optIndex) => (
                      <div key={optIndex} className="option">
                        <input
                          type="text"
                          placeholder="Option"
                          value={option}
                          onChange={(e) =>
                            handleOptionChange(index, optIndex, e.target.value)
                          }
                        />
                        <button
                          className={optIndex === 0 ? "correct" : "wrong"}
                        >
                          {optIndex === 0 ? "Correct answer" : "Wrong answer"}
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  <textarea
                    placeholder="Answer"
                    value={question.answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="actions">
          <div className="add__btn">
            <button className="add-question" onClick={handleAddQuestion}>
              Add Question
            </button>
          </div>
          <div className="btn__actions">
            <button className="cancel">CANCEL</button>
            <button className="save">SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamForm;
