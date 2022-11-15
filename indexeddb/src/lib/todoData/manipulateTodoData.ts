import React from "react";
import { DeleteAllType, DeleteTodoType, TodoType, UpdateTodoType } from "../@types/todo";
import { uinqId } from "../uniqueId";
import Dexie from "dexie";

const db = new Dexie("todoApp");

db.version(1).stores({ todos: "++id,task,done" });

// @ts-ignore
export const { todos } = db;

export const addNewTodo = async ({ e, dispatch, getTodo, setgetTodo, state }: TodoType) => {
    try {
       
		e.preventDefault();

		if (getTodo === "" || !getTodo) return;
		await todos.add({
			task: getTodo,
			done: "no",
		});
		dispatch({
			type: "TODO_DATA",
			payload: [...state.todo, { task: getTodo, done: "no", id: uinqId() }],
		});
		setgetTodo("");
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodo = async ({ dispatch, todoId, state }: DeleteTodoType) => {
	await todos.delete(todoId);
	const newTodo = state?.todo?.filter(({ id }: { id: string }) => id !== todoId);

	dispatch({ type: "TODO_DATA", payload: [...newTodo] });
};

export const deleteAll = async ({ dispatch }: DeleteAllType) => {
	await todos.where('done').anyOf("yes", "no").delete();

	dispatch({ type: "TODO_DATA", payload: [] });
};

export const updateTodo = async ({ dispatch, todoId, state, done }: UpdateTodoType) => {
	await todos.update(todoId, { done: done === "yes" ? "no" : "yes" });

	interface d {
		task: string;
		id: string;
		done: string;
	}
	const newTodo: object[] = state?.todo?.map(({ task, id, done }: d) => {
		return { task, done, id };
	});
	console.log(newTodo);

	dispatch({ type: "TODO_DATA", payload: [...newTodo] });
};
