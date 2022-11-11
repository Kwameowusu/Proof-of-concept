import React from "react";

export const ChevronRightIcon = ({ ...props }) => {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 5L16 12L9 19"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ChevronLeftIcon = ({ ...props }) => {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15 19L8 12L15 5"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
