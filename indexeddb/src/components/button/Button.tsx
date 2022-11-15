import React, { ReactNode } from "react";
import "../../style/components/button/button.css";

type ButtonProps = {
	children?: ReactNode;
	handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ComponentProps<"button">;

const Button = ({ type, handleClick, children, ...props }: ButtonProps) => {
	return (
		<button {...props} type={type} onClick={handleClick}>
			{children}
		</button>
	);
};

export default React.memo(Button);
