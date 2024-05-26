// SubjectInput.js
import React from 'react';
import './App.css';

const SubjectInput = ({ subject, marks, setMarks }) => {
  const calculateGrade = () => {
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
    <div className="subject-input">
      <h2>{subject}</h2>
      <div className="marks-input">
        <label>MSE Marks:</label>
        <input
          type="number"
          value={marks.mse}
          onChange={(e) => setMarks({ ...marks, mse: parseInt(e.target.value) || 0 })}
        />
      </div>
      <div className="marks-input">
        <label>ESE Marks:</label>
        <input
          type="number"
          value={marks.ese}
          onChange={(e) => setMarks({ ...marks, ese: parseInt(e.target.value) || 0 })}
        />
      </div>
      <div className="result">
        <p>Grade: {calculateGrade()}</p>
      </div>
    </div>
  );
};

export default SubjectInput;
