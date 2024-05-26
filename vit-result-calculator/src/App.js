// App.js
import React, { useState } from 'react';
import './App.css';
import SubjectInput from './SubjectInput';
import Result from './Result';

function App() {
  const [marks, setMarks] = useState({
    subject1: { mse: 0, ese: 0 },
    subject2: { mse: 0, ese: 0 },
    subject3: { mse: 0, ese: 0 },
    subject4: { mse: 0, ese: 0 },
  });

  return (
    <div className="app-container">
      <h1>VIT Semester Result Calculator</h1>
      <div className="input-container">
        <SubjectInput
          subject="CN"
          marks={marks.subject1}
          setMarks={(newMarks) => setMarks({ ...marks, subject1: newMarks })}
        />
        <SubjectInput
          subject="WT"
          marks={marks.subject2}
          setMarks={(newMarks) => setMarks({ ...marks, subject2: newMarks })}
        />
        <SubjectInput
          subject="AI"
          marks={marks.subject3}
          setMarks={(newMarks) => setMarks({ ...marks, subject3: newMarks })}
        />
        <SubjectInput
          subject="CS"
          marks={marks.subject4}
          setMarks={(newMarks) => setMarks({ ...marks, subject4: newMarks })}
        />
      </div>
      <div className="input-container">
        <Result marks={marks} />
      </div>
    </div>
  );
}

export default App;
