import React, { useEffect, useMemo, useRef, useState } from "react";

import RainyDay from "../../assets/svgs/RainyDay";
import LargeWeatherCard from "../../components/cards/LargeWeatherCard";
import LocationCard from "../../components/cards/LocationCard";

import DaysForcast from "../../components/foreCast/DaysForcast";
import Navigationbar from "../../components/navigation/Navigationbar";
import { DigitsPrefix } from "../../libs/utils/DigitsPrefix";

import { GetRequest } from "../../libs/utils/GetRequest";
import "./../../styles/home/homepage.css";

const HomePage = () => {
	const { data: locData, error: locError } = GetRequest("https://ipinfo.io/?token=5675de78f2553f");

	const { data: WeatherData, error: WeatherError } = GetRequest(
		locData
			? `${import.meta.env.VITE_API_URL}/weather/?q=
${locData?.city}&${locData?.country}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`
			: ""
	);

	// const { data: WeatherDat, error: WeatherErro } = GetRequest<string>("http://localhost:3000/api/hello");
	// console.log(WeatherDat);

	return (
		<>
			<div className="cloudz-homepage-container">
				<div className="cloudz-homepage-cover">
					<Navigationbar />

					<div className="cloudz-homepage-large-cards-container">
						<LargeWeatherCard
							temperatureValue={String(Math.floor(WeatherData?.main?.temp || ""))}
							feelsLikeValue={String(Math.floor(WeatherData?.main?.feels_like || ""))}
							weatherPrediction="Watch for scattered rain showers. The high will
							reach 31° on this humid day."
							weatherConditionsValue={{
								wind: String(Math.floor(WeatherData?.wind?.speed || "")),
								humidity: String(Math.floor(WeatherData?.main?.humidity || "")),
								pressure: String(Math.floor(WeatherData?.main?.pressure || "")),
								visibility: DigitsPrefix<number>(WeatherData?.visibility)?.slice(
									0,
									(DigitsPrefix(WeatherData?.visibility)?.length || 0) - 1
								),
								sunrise: WeatherData?.sys?.sunrise,
								sunset: WeatherData?.sys?.sunset,
							}}
							weatherCondition={WeatherData?.weather[0]?.description || ""}
							weatherIcon={RainyDay}
						/>
						<LocationCard city={locData?.city} country={locData?.country} />
					</div>
					<div className="cloudz-homepage-today-daily-cards-header-container">
						<span className="cloudz-homepage-header-container">
							<p>7 DAYS FORECAST</p>
						</span>
						<DaysForcast WeatherData={WeatherData} />
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;

/**
     * const translations = {
  'fog': 'neblina',
  'clear sky': 'despejado',
  'overcast clouds': 'nublado',
  'light rain': 'lluvia ligera',
  'few clouds': 'ligeramente nuboso',
  'broken clouds': 'parcialmente nuboso',
  'light intensity drizzle': 'llovizna ligera',
}
     */
// const [lat, setLat] = useState([]);
// const [long, setLong] = useState([]);
// useEffect(() => {
// 	navigator.geolocation.getCurrentPosition(
// 		(position) => {
// 			setLat(position.coords.latitude);
// 			setLong(position.coords.longitude);
// 		},
// 		() => {},
// 		{
// 			enableHighAccuracy: true,
// 			timeout: 10000,
// 		}
// 	);
// 	console.log("Latitude is:", lat);
// 	console.log("Longitude is:", long);
// }, [lat, long]);

// const config = useMemo(
// 	() => ({
// 		headers: {
// 			"X-RapidAPI-Key":
// 				"d13a992f8bmshc5ea759e3a1ce1fp1e6503jsn86b193835e33",
// 			"X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
// 		},
// 	}),
// 	[]
// );

// const { data: WeatherData2, error: WeatherError2 } = GetRequest([
// 	`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}`,
// 	config,
// ]);
// console.log(WeatherData2);
