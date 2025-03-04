import "./styles.css";

import { useState } from "react";

const tasks = [
  "Gather Requirements 📋",
  "Develop Features 💻",
  "Deploy Application 🚀",
];

export default function App() {
  const [task, setTask] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  function handleNext() {
    if(task <= [tasks.length - 1]) {
      setTask(task + 1)
    }
    
  }
  
  function handlePrevious() {
    if(task >= [tasks.length - 1]) {
      setTask(task - 1)
    }
  }

  return (
    <div>
      <button className="toggle">&times;</button>

      <div className="task-tracker">
        <div className="progress">
          {["A","B","C"].map(num => (
          <div className={task >= num ? "active" : ""}>{num}</div>
          ))}
        </div>

        <div className="message">
          <h3>Task {task}</h3>
          {tasks[task - 1]}
        </div>

        <div className="actions">
          <button style={{ backgroundColor: "#e7e7e7", color: "#333" }}>
            How to
          </button>
        </div>

        <div className="actions">
          <button 
          onClick={handlePrevious}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}>
            <span>👈</span> Previous
          </button>

          <button 
          onClick={handleNext}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}>
            Next <span>👉</span>
            <span>🚀</span>
          </button>
        </div>
      </div>
    </div>
  );
}
