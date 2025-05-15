import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Logs, Trash2 } from "lucide-react";
import React, { SetStateAction } from "react";

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface Props {
    setTodoText: React.Dispatch<SetStateAction<string>>;
    todoText: string;
    handleAdd: () => void;
    todos: Todo[];
    toggleComplete: (id: number) => void;
    handleDelete: (id: number) => void;
    handleUpdate: (id: number) => void; // Updated to accept updated text
    updatedTodoText: string;
    setUpdatedTodoText: React.Dispatch<SetStateAction<string>>;
    currentUpdatingId: number | null;
    setCurrentUpdatingId: React.Dispatch<SetStateAction<number | null>>;
}

const TodoForm = ({
    setTodoText,
    todoText,
    handleAdd,
    todos,
    toggleComplete,
    handleDelete,
    handleUpdate,
    updatedTodoText,
    setUpdatedTodoText,
    currentUpdatingId,
    setCurrentUpdatingId,
}: Props) => {
    return (
        <div className="w-[30rem] h-96 py-6 px-8 overflow-y-scroll element">
            <section className="relative flex gap-3">
                <Logs className="text-gray-400 size-4 absolute top-[9px] left-2" />
                <Input
                    placeholder="Add a task"
                    className="text-gray-400 text-sm pl-8 "
                    onChange={(e) => setTodoText(e.target.value)}
                    value={todoText}
                />
                <Button className="cursor-pointer" onClick={handleAdd}>
                    Add
                </Button>
            </section>
            <section className="mt-6 w-full">
                {todos &&
                    todos.length > 0 &&
                    todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex items-center mt-2 gap-2 w-full justify-between"
                        >
                            <div className="flex gap-3 items-center w-full">
                                <input
                                    type="checkbox"
                                    checked={todo.isCompleted}
                                    onChange={() => toggleComplete(todo.id)}
                                    className="cursor-pointer"
                                />
                                <Input
                                    className={cn(
                                        "w-full h-7 border-none text-xs",
                                        todo.isCompleted && "line-through",
                                    )}
                                    value={
                                        currentUpdatingId === todo.id
                                            ? updatedTodoText
                                            : todo.text
                                    }
                                    onFocus={() => {
                                        setCurrentUpdatingId(todo.id); // Track which todo is being edited
                                        setUpdatedTodoText(todo.text); // Initialize the updated text with the current todo's text
                                    }}
                                    onChange={(e) => {
                                        setUpdatedTodoText(e.target.value); // Update local state while typing
                                    }}
                                    onBlur={() => {
                                        if (currentUpdatingId === todo.id) {
                                            handleUpdate(todo.id); // Save changes when input loses focus
                                            setCurrentUpdatingId(null); // Exit editing mode
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleUpdate(todo.id); // Save changes when Enter is pressed
                                            setCurrentUpdatingId(null); // Exit editing mode
                                        }
                                    }}
                                />
                            </div>
                            <Trash2
                                className="size-4 text-red-500 cursor-pointer ml-4"
                                onClick={() => handleDelete(todo.id)}
                            />
                        </div>
                    ))}
            </section>
        </div>
    );
};

export default TodoForm;
