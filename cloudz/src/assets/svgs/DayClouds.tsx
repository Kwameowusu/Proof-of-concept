import React from 'react'

const DayClouds = ({...props}) => {
  return (
		<svg
        {...props}
			width="1em"
			height="1em"
			viewBox="0 0 179 143"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M59.6791 116.316C71.6943 132.495 91.0888 143 112.969 143C149.437 143 179 113.818 179 77.8204C179 48.5734 159.485 23.8255 132.607 15.5722C122.42 5.93921 108.469 0 93.08 0C68.461 0 47.5206 15.2008 39.7857 36.4081C17.6056 37.633 0 55.8824 0 78.2155C0 101.341 18.8777 120.088 42.1644 120.088C48.4133 120.088 54.3448 118.738 59.6791 116.316Z"
				fill="url(#paint0_linear_81_1054)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_81_1054"
					x1="89.5"
					y1="0"
					x2="89.5"
					y2="143"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#BBDEFF" />
					<stop offset="1" stopColor="white" />
				</linearGradient>
			</defs>
		</svg>
  );
}

export default DayClouds