import React from "react";

const PartialClouds = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="1em"
			height="1em"
			viewBox="0 0 232 206"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M205 74.5C205 115.645 169.407 149 125.5 149C81.5934 149 46 115.645 46 74.5C46 33.3548 81.5934 0 125.5 0C169.407 0 205 33.3548 205 74.5Z"
				fill="url(#paint0_linear_18_88)"
			/>
			<path
				d="M77.3494 178.57C92.9222 195.201 118.059 206 146.418 206C193.684 206 232 176.002 232 138.997C232 108.932 206.707 83.492 171.871 75.0077C158.667 65.1053 140.585 59 120.64 59C88.7315 59 61.5909 74.626 51.5658 96.4265C22.8184 97.6857 0 116.446 0 139.403C0 163.176 24.4671 182.448 54.6489 182.448C62.748 182.448 70.4357 181.06 77.3494 178.57Z"
				fill="url(#paint1_linear_18_88)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_18_88"
					x1="49.6101"
					y1="23.5034"
					x2="223.41"
					y2="184.184"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFC635" />
					<stop offset="0.399022" stopColor="#FF8515" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_18_88"
					x1="116"
					y1="59"
					x2="116"
					y2="206"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#BBDEFF" />
					<stop offset="1" stopColor="white" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default PartialClouds;
