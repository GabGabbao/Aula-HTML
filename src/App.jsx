import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskStats from "./components/TaskStats/TaskStats";

function App() {

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [task, setTask] = useState("");
    const [editing, setEditing] = useState(null);
    const [filter, setFilter] = useState("all");


    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);


    function addTask(e) {

        e.preventDefault();

        if (task.trim() === "") return;


        if (editing !== null) {

            setTasks(

                tasks.map((item) =>

                    item.id === editing
                        ? {
                            ...item,
                            title: task
                        }
                        : item

                )

            );

            setEditing(null);


        } else {

            const newTask = {

                id: Date.now(),

                title: task,

                completed: false

            };


            setTasks([...tasks, newTask]);

        }


        setTask("");

    }



    function toggleTask(id) {

        setTasks(

            tasks.map((item) =>

                item.id === id

                    ? {
                        ...item,
                        completed: !item.completed
                    }

                    : item

            )

        );

    }



    function deleteTask(id) {

        setTasks(

            tasks.filter((item) => item.id !== id)

        );


        if (editing === id) {

            setEditing(null);

            setTask("");

        }

    }



    function editTask(task) {

        setTask(task.title);

        setEditing(task.id);

    }



    const filteredTasks = tasks.filter((task) => {

        if (filter === "completed") {

            return task.completed;

        }


        if (filter === "pending") {

            return !task.completed;

        }


        return true;

    });



    return (

        <>

            <Header />


            <TaskForm

                task={task}

                setTask={setTask}

                addTask={addTask}

                editing={editing}

            />

            <TaskStats tasks={tasks} />

            <div className="filters"></div>



            <div className="filters">


                <button

                    onClick={() => setFilter("all")}

                    className={filter === "all" ? "active" : ""}

                >

                    Todas

                </button>



                <button

                    onClick={() => setFilter("pending")}

                    className={filter === "pending" ? "active" : ""}

                >

                    Pendentes

                </button>



                <button

                    onClick={() => setFilter("completed")}

                    className={filter === "completed" ? "active" : ""}

                >

                    Concluídas

                </button>


            </div>



            <TaskList

                tasks={filteredTasks}

                toggleTask={toggleTask}

                deleteTask={deleteTask}

                editTask={editTask}

            />


        </>

    );

}


export default App;