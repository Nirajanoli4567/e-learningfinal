import { useState } from "react";
import { TodoCard } from "../../components/common/TodoCard";
import { TaskForm } from "../../components/common/TaskForm";

export const TodoForm = () => {
    const [todoItems, setTodoItems] = useState([
        { id: 1, title: "Task 1", status: 'Done' },
        { id: 2, title: "Task 2", status: 'Todo' },
        { id: 3, title: "Task 3", status: 'Todo' },
        { id: 4, title: "Task 4", status: 'Todo' },
        { id: 5, title: "Task 5", status: 'Todo' },
    ]);

    const [task, setTask] = useState({
        id: -1,
        title: '',
        status: 'Todo'
    })

    const submitForm = (e) => {
        e.preventDefault();
        if (task.id === -1) {
            const tempTask = {
                id: (new Date()).toString(),
                title: task.title,
                status: task.status
            }
            setTodoItems([...todoItems, tempTask])
        } else {
            const taskIndex = todoItems.findIndex(v => v.id === task.id);
            const tempTodo = [...todoItems];
            tempTodo[taskIndex] = task;
            setTodoItems(tempTodo);
        }
        resetForm();
    }

    const inputHandler = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setTask({
            id: -1,
            title: '',
            status: 'Todo'
        })
    }

    const deleteTask = (index) => {
        setTodoItems(todoItems.filter((v, key) => key !== index))
    }


    const selectTask = (key) => {
        // console.log(key);
        // console.log(todoItems[key]);
        // setTask({
        //     id: todoItems[key].id,
        //     status: todoItems[key].status,
        //     title: todoItems[key].title,
        // });
        setTask(todoItems[key]);
    }

    return <main className="form-section">
        <div className="form-area">
            <div className="text-md bold">Todo form</div>
            <TaskForm task={task} inputHandler={inputHandler} submitForm={submitForm}/>
        </div>
        <div className="todo-area">
            <div className="text-md bold">Todo List</div>
            <div className="todo-list">
                {todoItems.map((v, key) => (
                    <TodoCard data={v} key={key} index={key}
                        selectTask={() => selectTask(index)}
                        deleteTask={() => deleteTask(index)}
                    />
                ))}
            </div>
        </div>
    </main>
}