interface TodoState {
	todo: [];
}

interface TodoAction {
	payload: any;
	type: string;
}

export const todoReducers = (state: TodoState, action: TodoAction) => {
	switch (action.type) {
		case "TODO_DATA":
			return {
				...state,
				todo: action.payload,
            };
        

		default:
			throw new Error(`Unknwon action type: ${action.type}`);
	}
};
