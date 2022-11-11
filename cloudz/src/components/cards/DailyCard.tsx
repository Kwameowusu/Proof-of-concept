import React from "react";
// import PropTypes from "prop-types";
import "./../../styles/components/cards/dailycard.css";

interface Props extends React.ComponentProps<"div"> {
	upperTemperature: string;
	lowerTemperature: string;
	date: string;
	WeatherIcon: React.FC;
}

const DailyCard = ({
	upperTemperature,
	lowerTemperature,
	date,
	WeatherIcon,
	...props
}: Props) => {
	return (
		<div {...props} className="cloudz-dailycard-container">
			<span className="cloudz-dailycard-head">{date}</span>
			<div className="cloudz-dailycard-icon-temperature">
				<div
					style={{
						display: "flex",
						gap: "20px",
					}}>
					<div className="cloudz-dailycard-icon">
						<WeatherIcon />
					</div>
					<div className="cloudz-dailycard-upper-lower-temperature">
						<span className="cloudz-dailycard-upper-temperature">
							{upperTemperature}
							<small
								style={{
									marginTop: "-2px",
									position: "absolute",
								}}>
								°
							</small>{" "}
						</span>
						<span className="cloudz-dailycard-lower-temperature">
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
			</div>
		</div>
	);
};

export default DailyCard;
// DailyCard.propTypes = {
// 	upperTemperature: PropTypes.string,
// 	lowerTemperature: PropTypes.string,
//     date:PropTypes.string,
//     weatherIcon: PropTypes.func,
// };
