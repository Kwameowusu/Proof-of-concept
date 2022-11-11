import React from "react";

import "./../../styles/components/navigation/navigation.css";
import Cloudz from "../../assets/svgs/Cloudz";

interface Props extends React.ComponentProps<"div"> {
	
}
const Navigationbar = ({ ...props }:Props) => {
	return (
		<>
			<div {...props} className="cloudz-navigationsbar-container">
				<div className="cloudz-navigationsbar-logo-container">
					<Cloudz />
				</div>
			</div>
		</>
	);
};

export default Navigationbar;

