import "./TaskForm.css";

function TaskForm({ task, setTask, addTask, editing }) {
    return (
        <form className="task-form" onSubmit={addTask}>

            <input
                type="text"
                placeholder="Digite uma tarefa..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit">
                {editing ? "Salvar" : "Adicionar"}
            </button>

        </form>
    );
}

export default TaskForm;