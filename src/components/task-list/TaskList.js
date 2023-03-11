import React from "react";

import { TaskItem } from "../task-item/TaskItem";

import './TaskList.css';

function TaskList ({tasks, onDeleteTask}) {
  return(
    <div className="task-list">
      {tasks.map(task => {
        return(
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
          />
        )
      })}
    </div>
  )
}

export {TaskList};