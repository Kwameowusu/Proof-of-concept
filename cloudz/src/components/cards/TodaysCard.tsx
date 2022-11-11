import React from "react";

import "./../../styles/components/cards/todayscard.css";
import Droplet from "../../assets/svgs/Droplet";
import useCheckWeatherIcon from "../../libs/usehooks/useCheckWeatherIcon";

interface Props extends React.ComponentProps<"div"> {
	upperTemperature: string;
	lowerTemperature: string;
	percipitation: string | number;
	weatherCondition: string;
}

const TodaysCard = ({
	upperTemperature,
	lowerTemperature,
	percipitation,
	weatherCondition,

	...props
}: Props) => {
	const { checkWeatherIcon } = useCheckWeatherIcon();

	return (
		<div {...props} className="cloudz-todayscard-container">
			<span className="cloudz-todayscard-head">Today</span>
			<div className="cloudz-todayscard-icon-temperature">
				<div
					style={{
						display: "flex",
						gap: "20px",
						marginLeft: "20px",
					}}>
					<div className="cloudz-todayscard-icon">
						{checkWeatherIcon(weatherCondition)}
					</div>
					<div className="cloudz-todayscard-upper-lower-temperature">
						<span className="cloudz-todayscard-upper-temperature">
							{upperTemperature}
							<small
								style={{
									marginTop: "-2px",
									position: "absolute",
								}}>
								°
							</small>{" "}
						</span>
						<span className="cloudz-todayscard-lower-temperature">
							{lowerTemperature}
							<small
								style={{
									marginTop: "-2px",
									position: "absolute",
								}}>
								°
							</small>
						</span>
					</div>
				</div>

				<div className="cloudz-todayscard-showers-likely">
					<span className="showers">Rain Showers</span>
					<span className="showers-droplet-percentage">
						<Droplet />
						<span className="showers-percentage">
							{percipitation}%
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default TodaysCard;
