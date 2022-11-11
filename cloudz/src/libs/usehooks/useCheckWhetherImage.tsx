// import React from "react";
import daysky from "./../../assets/image/daysky.png";
import nightsky from "./../../assets/image/nightsky.png";

import rainyday from "./../../assets/image/rainyday.png";
import rainynight from "./../../assets/image/rainynight.png";

import cloudyday from "./../../assets/image/cloudyday.png";
import cloudynight from "./../../assets/image/cloudynight.png";

import thurnder from "./../../assets/image/thunder.jpg";

import { useThemeProvider } from "../../contextapis/ThemeProvider";

/**
 * This hook checks the weather condition and returns weather or atmosphere's image
 * @returns ReactElement or undefined
 *
 */
const useCheckWeatherImage = () => {
	const { dashtheme } = useThemeProvider();

	const checkWeatherImage = (theWeather: string): string | undefined =>
		({
			fog: dashtheme === "light" ? cloudyday : dashtheme === "dark" ? cloudynight : "",
			"clear sky": dashtheme === "light" ? daysky : dashtheme === "dark" ? nightsky : "",
			"scattered clouds": dashtheme === "light" ? daysky : dashtheme === "dark" ? nightsky : "",
			"overcast clouds": dashtheme === "light" ? cloudyday : dashtheme === "dark" ? cloudynight : "",
			"light rain": dashtheme === "light" ? rainyday : dashtheme === "dark" ? rainynight : "",
			"few clouds": dashtheme === "light" ? cloudyday : dashtheme === "dark" ? cloudynight : "",
			"broken clouds": dashtheme === "light" ? cloudyday : dashtheme === "dark" ? cloudynight : "",
			"light intensity drizzle":
				dashtheme === "light" ? cloudyday : dashtheme === "dark" ? cloudynight : "",
			"thunderstorm with rain": dashtheme === "light" ? thurnder : dashtheme === "dark" ? thurnder : "",
		}[theWeather]);
	return { checkWeatherImage };
};

export default useCheckWeatherImage;

/**
	{
			fog: dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"clear sky": dashtheme === "light" ? <PartialClouds /> : <NightClouds />,
			"scattered clouds": dashtheme === "light" ? <PartialClouds /> : <NightClouds />,
			"overcast clouds": dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"light rain": dashtheme === "light" ? <RainyDay /> : <RainyNight />,
			"few clouds": dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"broken clouds": dashtheme === "light" ? <DayClouds /> : <NightClouds />,
			"light intensity drizzle": dashtheme === "light" ? <Sunny /> : <NightClouds />,
		},


        clear: "clear sky", "scattered clouds", ,"light intensity drizzle"
        cloudy: "broken clouds","overcast clouds","fog","few clouds"
        rainy: "light rain"

*/
