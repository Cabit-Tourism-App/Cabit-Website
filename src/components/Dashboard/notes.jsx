import { useState } from "react";
import "./notes.css";

export default function NotesInput() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="note-box">
      <label className="note-label">Notes</label>
      <div className="note-input-wrapper">
        <input
          type="text"
          placeholder="Write Important Tasks for Your Trip Here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="note-input"
        />
        <button onClick={addTask} className="note-add-btn">+</button>
      </div>
      <ul className="note-list">
        {tasks.map((t, index) => (
          <li key={index} className="notes-item">
            {t}
            <button onClick={() => removeTask(index)} className="note-remove-btn">✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

