export type TodoType = {
	e: React.FormEvent;
	dispatch: (args: { type: string; payload: object }) => void;
	getTodo: string;
	setgetTodo: (arg: string) => void;
	state: {
		todo: any;
	};
};

export type DeleteTodoType = {
	dispatch: (args: { type: string; payload: object }) => void;
	todoId: string;
	state: {
		todo: any;
    };

};

export type UpdateTodoType = {
	dispatch: (args: { type: string; payload: object }) => void;
	todoId: string;
	state: {
		todo: any;
	};
	done: string;
};


export type DeleteAllType = {
	dispatch: (args: { type: string; payload: object }) => void;
};
