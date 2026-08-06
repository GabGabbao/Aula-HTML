import TaskItem from "../TaskItem/TaskItem";

function TaskList({
    tasks,
    toggleTask,
    deleteTask,
    editTask
}) {

    return (

        <div>

            {tasks.map((task) => (

                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />

            ))}

        </div>

    );

}

export default TaskList;