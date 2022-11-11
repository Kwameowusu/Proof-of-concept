// import React from "react";
import DayClouds from "../../assets/svgs/DayClouds";
import NightClouds from "../../assets/svgs/NightClouds";
import PartialClouds from "../../assets/svgs/PartialClouds";
import RainyDay from "../../assets/svgs/RainyDay";
import RainyNight from "../../assets/svgs/RainyNight";
import StormRain from "../../assets/svgs/StormRain";
import Sunny from "../../assets/svgs/Sunny";
import { useThemeProvider } from "../../contextapis/ThemeProvider";

/**
 * This hook check the weather condition and returns RectElement as SVG for the weather
 * @returns ReactElement or undefined
 *
 */
const useCheckWeatherIcon = () => {
	const { dashtheme } = useThemeProvider();

	const checkWeatherIcon = (theWeather: string): React.ReactElement | undefined =>
		({
			fog: dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"clear sky": dashtheme === "light" ? <PartialClouds /> : <NightClouds />,
			"scattered clouds": dashtheme === "light" ? <PartialClouds /> : <NightClouds />,
			"overcast clouds": dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"light rain": dashtheme === "light" ? <RainyDay /> : <RainyNight />,
			"few clouds": dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"broken clouds": dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"light intensity drizzle": dashtheme === "light" ? <Sunny /> : <NightClouds />,
			"thunderstorm with rain": dashtheme === "light" ? <StormRain /> : <StormRain />,
		}[theWeather]);
	return { checkWeatherIcon };
};

export default useCheckWeatherIcon;
