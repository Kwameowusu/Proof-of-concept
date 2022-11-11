import React from "react";

const SunnyCloudy = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="1em"
			height="1em"
			viewBox="0 0 169 143"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M139.809 71.5C139.809 110.988 108.512 143 69.9045 143C31.2973 143 0 110.988 0 71.5C0 32.0116 31.2973 0 69.9045 0C108.512 0 139.809 32.0116 139.809 71.5Z"
				fill="url(#paint0_linear_16_14)"
			/>
			<path
				d="M102.943 93.6618C109.595 101.662 120.332 106.857 132.445 106.857C152.634 106.857 169 92.4265 169 74.6255C169 60.1627 158.196 47.9247 143.317 43.8434C137.677 39.0798 129.953 36.1429 121.434 36.1429C107.805 36.1429 96.2122 43.6598 91.9301 54.1468C79.6511 54.7526 69.9045 63.777 69.9045 74.8208C69.9045 86.2567 80.3553 95.5272 93.247 95.5272C96.7065 95.5272 99.9901 94.8597 102.943 93.6618Z"
				fill="url(#paint1_linear_16_14)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_16_14"
					x1="141.143"
					y1="131.214"
					x2="43.5725"
					y2="3.74225"
					gradientUnits="userSpaceOnUse">
					<stop offset="0.458333" stopColor="#FF8515" />
					<stop offset="1" stopColor="#FFC635" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_16_14"
					x1="119.452"
					y1="36.1429"
					x2="119.452"
					y2="106.857"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#BBDEFF" />
					<stop offset="1" stopColor="white" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default SunnyCloudy;
