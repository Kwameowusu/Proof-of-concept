import React from "react";
import "./../../styles/components/cards/locationcard.css";
interface Props extends React.ComponentProps<"div"> {
	city: string;
	country: string;
}

const LocationCard = ({ city, country, ...props }: Props) => {
	return (
		<div {...props} className="cloudz-locationscard-container">
			<span className="cloudz-locationscard-text-head">
				CURRENT LOCATION
			</span>
			<span className="cloudz-locationscard-text-location">
				{city},{country}
			</span>
			<div className="cloudz-locationscard-location-map">
				<div className="circle"></div>
				<span className="map-location">{city}</span>
			</div>
		</div>
	);
};

export default LocationCard;
//°C
