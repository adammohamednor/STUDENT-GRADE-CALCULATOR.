import React, { useState } from 'react';
import './StudentGradeCalculator.css';

function StudentGradeCalculator() {
    const [subjects, setSubjects] = useState([{ name: '', grade: '' }]);
    const [average, setAverage] = useState(null);

    const handleInputChange = (index, event) => {
        const newSubjects = [...subjects];
        newSubjects[index][event.target.name] = event.target.value;
        setSubjects(newSubjects);
    };

    const handleAddSubject = () => {
        setSubjects([...subjects, { name: '', grade: '' }]);
    };

    const handleCalculateAverage = () => {
        const total = subjects.reduce((acc, curr) => acc + parseFloat(curr.grade || 0), 0);
        setAverage(total / subjects.length);
    };

    const getLetterGrade = (grade) => {
        if (grade >= 90) return 'A';
        if (grade >= 80) return 'B';
        if (grade >= 70) return 'C';
        if (grade >= 60) return 'D';
        return 'F';
    };

    return (
        <div>
            <h1>Student Grade Calculator</h1>
            {subjects.map((subject, index) => (
                <div className="assignment" key={index}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Subject Name"
                        value={subject.name}
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <input
                        type="number"
                        name="grade"
                        placeholder="Grade"
                        value={subject.grade}
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    {subject.grade && (
                        <span className="letter-grade">
                            {getLetterGrade(subject.grade)}
                        </span>
                    )}
                </div>
            ))}
            <button onClick={handleAddSubject}>Add Subject</button>
            <button onClick={handleCalculateAverage}>Calculate Average</button>
            {average !== null && (
                <h2>
                    Your average grade is: {average.toFixed(2)} (
                    {getLetterGrade(average)})
                </h2>
            )}
        </div>
    );
}

export default StudentGradeCalculator;
