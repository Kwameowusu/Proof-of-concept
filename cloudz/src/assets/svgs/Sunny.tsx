import React from "react";

const Sunny = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="1em"
			height="1em"
			viewBox="0 0 159 149"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M159 74.5C159 115.645 123.407 149 79.5 149C35.5934 149 0 115.645 0 74.5C0 33.3548 35.5934 0 79.5 0C123.407 0 159 33.3548 159 74.5Z"
				fill="url(#paint0_linear_21_1051)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_21_1051"
					x1="34"
					y1="17"
					x2="159"
					y2="126.5"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFC635" />
					<stop offset="0.399022" stopColor="#FF8515" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Sunny;
