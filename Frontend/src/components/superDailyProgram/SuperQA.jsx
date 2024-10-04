import React, { useState } from "react";
import "./SuperQA.css";
import { superQA } from "../../assets/data/superQA";

function SuperQA() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="super-qa">
      <h1>FQAs</h1>
      <div className="super-qa-list">
        <button className="super-qa-list-btn">Program</button>
        <div className="super-qa-cards">
          {superQA.map((data) => (
            <div
              key={data.id}
              className={`super-qa-card ${
                activeQuestion === data.id ? "active" : ""
              }`}
            >
              <h2 onClick={() => toggleQuestion(data.id)}>{data.ques}</h2>
              {activeQuestion === data.id && <p>{data.ans}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuperQA;
