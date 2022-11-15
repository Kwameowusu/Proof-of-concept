import React from "react";
import "../../style/components/addtodo/addtodo.css";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";

type FormProps = {
	handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	getTodo?: string;
	setgetTodo?: (arg: string) => void;
} & React.ComponentProps<"form">;

const AddTodo = ({ handleSubmit, getTodo, setgetTodo, ...props }: FormProps) => {
	return (
		<form {...props} onSubmit={handleSubmit} className="homepage-input-submit-container">
			<InputField
				handleChange={(e) => setgetTodo?.(e.target.value)}
				value={getTodo || ""}
				type="text"
				placeholder="Enter todo"
			/>
			<Button type="submit">Add</Button>
		</form>
	);
};

export default React.memo(AddTodo);
