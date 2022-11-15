import React, { useReducer, useState } from "react";
import { todoInitialData } from "../../lib/reducers/todoInitialData";
import { todoReducers } from "../../lib/reducers/todoReducer";
import { addNewTodo, deleteAll, deleteTodo, todos, updateTodo } from "../../lib/todoData/manipulateTodoData";
import "../../style/home/homepage.css";
import { useLiveQuery } from "dexie-react-hooks";
import Button from "../../components/button/Button";
import InputField from "../../components/inputfield/InputField";
import AddTodo from "../../components/addtodo/AddTodo";
import Todo from "../../components/todo/Todo";

const HomePage = () => {
	const [state, dispatch] = useReducer(todoReducers, todoInitialData);
	const [getTodo, setgetTodo] = useState("");

	const allItems = useLiveQuery(() => todos.toArray(), []);
	console.log(allItems);

	return (
		<>
			<div className="homepage-container">
				<div className="homepage-indexeddb-logo">
					<h1>IndexedDB</h1>
				</div>
				<AddTodo
					handleSubmit={(e: React.FormEvent) =>
						addNewTodo({ e, dispatch, getTodo, setgetTodo, state })
					}
					getTodo={getTodo || ""}
					setgetTodo={setgetTodo}
				/>
				<div className="homepage-todo-list">
					<span
						style={{
							marginTop: "20px",
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}>
						<strong>Todo list</strong>
						<button onClick={() => deleteAll({ dispatch })}>Delete All</button>
					</span>
					{allItems?.map(
						(
							{ task, id: todoId, done }: { task: string; id: string; done: string },
							index: number
						) => (
							<React.Fragment key={index}>
								<Todo
									done={done}
									task={task}
									dispatch={dispatch}
									todoId={todoId}
									state={state}
								/>
							</React.Fragment>
						)
					)}
				</div>
			</div>
			;
		</>
	);
};

export default HomePage;
