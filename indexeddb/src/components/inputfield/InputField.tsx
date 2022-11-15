import React, { ReactNode } from "react";
import "../../style/components/inputfield/inputfield.css";

type InputProps = {
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string | number;
	type?: string;
	value?: string;
} & React.ComponentProps<"input">;

const InputField = ({ handleChange, value, placeholder, type, ...props }: InputProps) => {
	return (
		<input
			{...props}
			onChange={handleChange}
			value={value}
			type={type || "text"}
			placeholder={placeholder}
		/>
	);
};

export default React.memo(InputField);
