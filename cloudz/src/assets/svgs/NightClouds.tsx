import React from "react";

const NightClouds = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="1em"
			height="1em"
			viewBox="0 0 259 231"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M136.032 0C133.623 2.90645 131.438 6.08071 129.518 9.51046C112.861 39.2767 122.56 77.0147 151.182 93.8007C179.804 110.587 216.51 100.064 233.167 70.2979C240.219 57.6968 242.547 43.6671 240.716 30.403C222.221 52.7211 190.568 59.2472 165.244 44.3954C148.739 34.7155 138.526 18.0682 136.032 0Z"
				fill="url(#paint0_linear_81_1053)"
			/>
			<path
				d="M86.3513 199.651C103.736 218.659 131.799 231 163.458 231C216.224 231 259 196.716 259 154.425C259 120.064 230.763 90.9895 191.873 81.2931C177.133 69.976 156.946 62.9984 134.68 62.9984C99.058 62.9984 68.7588 80.8569 57.567 105.772C25.474 107.211 0 128.651 0 154.889C0 182.058 27.3146 204.083 61.0089 204.083C70.0506 204.083 78.6329 202.497 86.3513 199.651Z"
				fill="url(#paint1_linear_81_1053)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_81_1053"
					x1="91.8452"
					y1="284.314"
					x2="176.87"
					y2="16.3477"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#B9B9B9" />
					<stop offset="1" stopColor="#FFF6EB" />
					<stop offset="1" stopColor="#F9F8F7" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_81_1053"
					x1="129.5"
					y1="62.9983"
					x2="129.5"
					y2="231"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#BBDEFF" />
					<stop offset="1" stopColor="white" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default NightClouds;
