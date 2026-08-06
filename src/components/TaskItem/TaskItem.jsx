import "./TaskItem.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>

            <div className="task-info">

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />

                <span>{task.title}</span>

            </div>

            <div className="task-actions">

                <button onClick={() => editTask(task)}>
                    <FaEdit />
                </button>

                <button onClick={() => deleteTask(task.id)}>
                    <FaTrash />
                </button>

            </div>

        </div>
    );
}

export default TaskItem;