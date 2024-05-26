// Result.js
import React from 'react';
import './App.css';

const Result = ({ marks }) => {
  const calculateGrade = (marks) => {
    const totalMarks = marks.mse * 0.3 + marks.ese * 0.7;
    if (totalMarks >= 90) return 'S';
    if (totalMarks >= 80) return 'A';
    if (totalMarks >= 70) return 'B';
    if (totalMarks >= 60) return 'C';
    if (totalMarks >= 50) return 'D';
    if (totalMarks >= 40) return 'E';
    return 'F';
  };

  return (
    <div className="result">
      <h2>Result</h2>
      <div className="grades">
        <p>CN Grade: {calculateGrade(marks.subject1)}</p>
        <p>WT Grade: {calculateGrade(marks.subject2)}</p>
        <p>AI Grade: {calculateGrade(marks.subject3)}</p>
        <p>CS Grade: {calculateGrade(marks.subject4)}</p>
      </div>
    </div>
  );
};

export default Result;
