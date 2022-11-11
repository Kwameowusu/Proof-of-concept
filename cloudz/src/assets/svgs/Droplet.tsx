import React from "react";

const Droplet = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="1em"
			height="1em"
			viewBox="0 0 7 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.134605 13.1682C0.208951 11.222 2.08862 0.0554135 3.8785 0.123789C5.66837 0.192164 6.69065 11.4696 6.61631 13.4158C6.54196 15.3619 5.03071 16.8842 3.24084 16.8158C1.45097 16.7475 0.0602578 15.1143 0.134605 13.1682Z"
				fill="url(#paint0_linear_19_141)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_19_141"
					x1="3.24084"
					y1="16.8158"
					x2="3.8785"
					y2="0.123789"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#05517B" />
					<stop offset="1" stopColor="#8BC8EA" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Droplet;
