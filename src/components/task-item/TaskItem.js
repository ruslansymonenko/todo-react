import React from "react";


import './TaskItem.css';

function TaskItem({task, onDeleteTask}) {

  function handleDelete() {
    onDeleteTask(task.id);
  }

  return(
    <div className="task-item">
      <h2 className="task-item__text">
        {task.text}
      </h2>
      <button 
        className="task-item__delete"
        onClick={handleDelete}
        >X
      </button>
    </div>
  )
}

export {TaskItem};