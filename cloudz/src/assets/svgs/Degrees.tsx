import React from 'react'

const Degrees = ({...props}) => {
  return (
		<svg
        {...props}
			width="1em"
			height="1em"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRrule="evenodd"
				d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
				fill="white"
			/>
		</svg>
  );
}

export default Degrees