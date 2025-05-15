import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[] | []>([]);
    const [todoText, setTodoText] = useState("");
    const [updatedTodoText, setUpdatedTodoText] = useState("");
    const [currentUpdatingId, setCurrentUpdatingId] = useState<number | null>(
        null,
    );

    useEffect(() => {
        const todosFromLocalStorage = localStorage.getItem("todos");
        if (todosFromLocalStorage) {
            const parseLocalTodos = JSON.parse(todosFromLocalStorage);
            setTodos(parseLocalTodos);
        }
    }, []);

    function handleAdd() {
        if (!todoText.trim()) {
            alert("Todo text cannot be empty");
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: todoText,
            isCompleted: false,
        };

        const updatedTodos = [...todos, newTodo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
        setTodoText("");
    }

    function toggleComplete(id: number) {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        );

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    }

    function handleDelete(id: number) {
        const updatedTodo = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodo);
        localStorage.setItem("todos", JSON.stringify(updatedTodo));
    }

    function handleUpdate(id: number) {
        const updatedTodo = todos.map((todo) =>
            todo.id === id ? { ...todo, text: updatedTodoText } : todo,
        );

        localStorage.setItem("todos", JSON.stringify(updatedTodo));
        setTodos(updatedTodo);
    }

    return (
        <TodoForm
            setTodoText={setTodoText}
            todoText={todoText}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            todos={todos}
            toggleComplete={toggleComplete}
            handleUpdate={handleUpdate}
            updatedTodoText={updatedTodoText}
            setUpdatedTodoText={setUpdatedTodoText}
            currentUpdatingId={currentUpdatingId}
            setCurrentUpdatingId={setCurrentUpdatingId}
        />
    );
};

export default TodoApp;
