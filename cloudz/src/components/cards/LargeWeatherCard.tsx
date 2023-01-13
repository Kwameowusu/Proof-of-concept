import React, { useContext, useEffect, useState } from "react";
import "./../../styles/components/cards/largeweathercard.css";


import useCheckWeatherIcon from "../../libs/usehooks/useCheckWeatherIcon";
import useCheckWeatherImage from "../../libs/usehooks/useCheckWhetherImage";


interface ConditionValues {
	wind: string;
	humidity: string;
	pressure: string;
	visibility: string | undefined;
	sunrise: number;
	sunset: number;
}

type Props = {
	temperatureValue?: string;
	feelsLikeValue?: string;
	weatherPrediction?: string;
	weatherConditionsValue?: ConditionValues;
	weatherCondition: string;
	weatherIcon: Function;
} & React.ComponentProps<"div">;

const LargeWeatherCard = ({
	temperatureValue,
	feelsLikeValue,
	weatherPrediction,
	weatherConditionsValue,
	weatherCondition,
	weatherIcon: WeatherIcon,
	...props
}: Props) => {
	const [weatherDate, setweatherDate] = useState("");

	useEffect(() => {
		const id = setInterval(() => {
			setweatherDate(new Date(new Date()).toLocaleTimeString("en-us"));
		}, 100);
		return () => clearInterval(id);
	}, []);

	const { checkWeatherIcon } = useCheckWeatherIcon();
	const { checkWeatherImage } = useCheckWeatherImage();

	return (
		<div {...props} className="cloudz-largeweathercard-container">
			<div className="cloudz-largeweathercard-background-image">
				<img
					onError={(e: any) => (e.target.style.visibility = "hidden")}
					onLoad={(e: any) => (e.target.style.visibility = "visible")}
					src={checkWeatherImage(weatherCondition)}
					alt=""
				/>
			</div>
			<div className="cloudz-largeweathercard-content-container">
				<div className="cloudz-largeweathercard-current-weather-container">
					<div className="cloudz-largeweathercard-current-weather-head">
						<span className="current-weather">CURRENT WEATHER</span>
						<span className="time">{weatherDate}</span>
						<div className="cloudz-largeweathercard-icon-temp-text">
							<div className="cloudz-largeweathercard-icon-temp">
								<div className="icon-container">
									{checkWeatherIcon(weatherCondition)}
									{/* <WeatherIcon /> */}
								</div>
								<div className="large-temp-container">
									<span className="temperature">{temperatureValue || ""}</span>
									<span className="degree-celcious">°C</span>
								</div>
							</div>
							<div className="weather-condition">
								<span className="mostly-text">{weatherCondition}</span>
								<span className="feels-like">FEELS LIKE {feelsLikeValue || ""}°</span>
							</div>
						</div>
					</div>
				</div>
				<div className="cloudz-largeweathercard-weather-conditions-container">
					<span className="weather-prediction-text">
						<p>{weatherPrediction}</p>
					</span>
					<div className="cloudz-largeweathercard-weather-conditions-list">
						<span className="cloudz-largeweathercard-weather-conditions-metrics">
							<span className="condition">WIND</span>
							<span className="metric-value">{weatherConditionsValue?.wind} km/hr</span>
						</span>
						<span className="cloudz-largeweathercard-weather-conditions-metrics">
							<span className="condition">HUMIDITY</span>
							<span className="metric-value">{weatherConditionsValue?.humidity}%</span>
						</span>{" "}
						<span className="cloudz-largeweathercard-weather-conditions-metrics">
							<span className="condition">PRESSURE</span>
							<span className="metric-value">{weatherConditionsValue?.pressure} mb</span>
						</span>
						<span className="cloudz-largeweathercard-weather-conditions-metrics">
							<span className="condition">VISIBILITY</span>
							<span className="metric-value">{weatherConditionsValue?.visibility} km</span>
						</span>
						<span className="cloudz-largeweathercard-weather-conditions-metrics">
							<span className="condition">SUNRISE</span>
							<span className="metric-value">
								{weatherConditionsValue?.sunrise &&
									new Date(weatherConditionsValue?.sunrise * 1000).toLocaleTimeString(
										"en-us"
									)}
							</span>
						</span>{" "}
						<span className="cloudz-largeweathercard-weather-conditions-metrics">
							<span className="condition">SUNSET</span>
							<span className="metric-value">
								{weatherConditionsValue?.sunset &&
									new Date(weatherConditionsValue?.sunset * 1000).toLocaleTimeString(
										"en-us"
									)}
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LargeWeatherCard;

// LargeWeatherCard.propTypes = {
// 	temperatureValue: PropTypes.string,
// 	feelsLikeValue: PropTypes.string,
// 	weatherPrediction: PropTypes.string,
// 	weatherCondition: PropTypes.string,
// 	weatherConditionsValue: PropTypes.shape({
// 		wind: PropTypes.string,
// 		humidity: PropTypes.string,
// 		pressure: PropTypes.string,
// 		visibility: PropTypes.string,
// 	}),
// 	weatherIcon: PropTypes.func,
// };
