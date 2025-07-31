import React, { useState, useEffect } from 'react';
import '../Styles/Task.css';

const defaultTasks = [
  { id: 1, name: 'Meditation', completed: false },
  { id: 2, name: 'Journaling', completed: false },
  { id: 3, name: 'Walk outside', completed: false },
  { id: 4, name: 'Drink water', completed: false },
  { id: 5, name: 'Gratitude note', completed: false },
  { id: 6, name: 'Call a friend', completed: false },
  { id: 7, name: 'Sleep 8 hours', completed: false },
];

function WeeklyTask() {
  const [tasks, setTasks] = useState(defaultTasks);

  
  useEffect(() => {
    const today = new Date();
    const storedTasks = JSON.parse(localStorage.getItem('weeklyTasks'));
    const lastReset = localStorage.getItem('lastResetDate');
    const isMonday = today.getDay() === 1;

    if (isMonday && lastReset !== today.toDateString()) {
      localStorage.setItem('weeklyTasks', JSON.stringify(defaultTasks));
      localStorage.setItem('lastResetDate', today.toDateString());
      setTasks(defaultTasks);
    } else if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  
  const handleCheckbox = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('weeklyTasks', JSON.stringify(updatedTasks));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = (completedCount / tasks.length) * 100;

  return (
    <div className="weekly-task-container">
      <h3> Weekly Tasks</h3>

      <div className="task-list">
        {tasks.map(task => (
          <label key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckbox(task.id)}
            />
            {task.name}
          </label>
        ))}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <p>{completedCount}/{tasks.length} tasks completed</p>
    </div>
  );
}

export default WeeklyTask;
