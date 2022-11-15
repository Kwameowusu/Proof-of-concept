import React from "react";
import { deleteTodo, updateTodo } from "../../lib/todoData/manipulateTodoData";
import "../../style/components/todo/todo.css";
import Button from "../button/Button";

type TodoProps = {
	done: string;
	task: string;
	dispatch: ({ type, payload }: { type: string; payload: object }) => void;
	todoId: string;
	state: { todo: any };
} & React.ComponentProps<"div">;

const Todo = ({ done, task, dispatch, todoId, state, ...props }: TodoProps) => {
	return (
		<>
			<div {...props} className="homepage-each-todolist">
				<span
					style={{
						textDecoration: done === "yes" ? "line-through" : "none",
					}}>
					{task}
				</span>
				<div className="homepage-each-todolist-controls">
					<Button handleClick={() => updateTodo({ dispatch, todoId, state, done })}>Done</Button>

					<Button handleClick={() => deleteTodo({ dispatch, todoId, state })}>Delete</Button>
				</div>
			</div>
		</>
	);
};

export default React.memo(Todo);
