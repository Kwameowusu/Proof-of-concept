import React, { ReactNode } from "react";
// import PropTypes from "prop-types";
import "./../../styles/components/buttons/iconbutton.css";
import { createIconRipple } from "./buttonutils/buttonFuncs";

interface Props extends React.ComponentProps<"button"> {
	classNames?: string;
	children?: ReactNode;
	handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = ({
	classNames,
	children,
	handleClick,
	...props
}: Props) => {
	let myAttributes = { effect: "ripple" };
	return (
		<>
			<button
			
				onClick={(e) => {
					handleClick?.(e);
					createIconRipple(e);
				}}
				{...myAttributes}
				className={`
                cloudz-iconbutton-container
                ${classNames}`}
				{...props}>
				{children}
			</button>
		</>
	);
};
