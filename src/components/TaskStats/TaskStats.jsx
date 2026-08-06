import "./TaskStats.css";

function TaskStats({ tasks }) {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;


    const progress = total === 0
        ? 0
        : Math.round((completed / total) * 100);


    return (

        <div className="task-stats">

            <div>
                📋 Total: {total}
            </div>

            <div>
                ⏳ Pendentes: {pending}
            </div>

            <div>
                ✅ Concluídas: {completed}
            </div>


            <div className="progress-container">

                <div
                    className="progress-bar"
                    style={{
                        width: `${progress}%`
                    }}
                >
                    {progress}%
                </div>

            </div>


        </div>

    );

}

export default TaskStats;