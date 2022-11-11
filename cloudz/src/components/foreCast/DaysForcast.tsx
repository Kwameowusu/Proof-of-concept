import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets/svgs/icon";
import PartialClouds from "../../assets/svgs/PartialClouds";
import Sunny from "../../assets/svgs/Sunny";
import { useView } from "../../libs/usehooks/useView";
import { IconButton } from "../buttons/IconButton";
import DailyCard from "../cards/DailyCard";
import TodaysCard from "../cards/TodaysCard";
// import PropTypes from "prop-types";

import "./../../styles/components/forecast/daysforecast.css";
import StormCloudy from "../../assets/svgs/StormCloudy";
import StormRain from "../../assets/svgs/StormRain";
import SunnyCloudy from "../../assets/svgs/SunnyCloudy";
interface Props {
	WeatherData: any;
}

const DaysForcast = ({ WeatherData }: Props) => {
	const detectCard = useRef<any>(null);
	const [getNode, setgetNode] = useState<any>(null);

	let options1 = {
		root: detectCard?.current?.parentNode,
		rootMargin: "0px",
		threshold: 0.8,
	};

	let options2 = {
		root: detectCard.current?.parentNode,
		rootMargin: "0px",
		threshold: 0.3,
	};

	useEffect(() => {
		setgetNode(detectCard?.current?.children[0]);
	}, [detectCard.current?.children[0]]);

	const { inView: firstChild, entry: firstEntry } = useView(
		getNode,
		options1
	);
	// console.log(firstChild);

	const { inView: lastChild, entry: lastEntry } = useView(
		detectCard.current?.children[detectCard.current?.children?.length - 1],
		options2
	);

	const scrollToViewRght = () => {
		// detectCard.current?.children[
		// 	detectCard.current?.children?.length - 1
		// ].scrollIntoView(false);
		detectCard.current?.parentNode?.scrollBy({
			left: 370,
			top: 0,
			behaviour: "smooth",
		});
	};

	const scrollToViewLeft = () => {
		// detectCard.current?.children[0].scrollIntoView(false, {
		// 	behavior: "smooth",
		// });
		detectCard.current?.parentNode?.scrollBy({
			left: -500,
			top: 0,
			behaviour: "smooth",
		});
	};

	return (
		<>
			<div className="cloudz-daysforecast-today-daily-cards-fade-container">
				{!firstChild ? (
					<div className="cloudz-daysforecast-fade-left">
						<IconButton
							handleClick={scrollToViewLeft}
							style={{
								width: "40px",
								height: "40px",
								fontSize: "var(--clz-fontsize6)",
								backgroundColor: "#ffffff0f",
							}}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
				) : (
					""
				)}
				{!lastChild ? (
					<div className="cloudz-daysforecast-fade-right">
						<IconButton
							handleClick={scrollToViewRght}
							style={{
								width: "40px",
								height: "40px",
								fontSize: "var(--clz-fontsize6)",
								backgroundColor: "#ffffff0f",
							}}>
							<ChevronRightIcon />
						</IconButton>
					</div>
				) : (
					""
				)}

				<div className="cloudz-daysforecast-today-daily-cards-container">
					<div
						ref={detectCard}
						className="cloudz-daysforecast-today-daily-cards-stretch">
						<TodaysCard
							upperTemperature={
								String(
									Math.floor(WeatherData?.main?.temp_max)
								) || ""
							}
							lowerTemperature={
								String(
									Math.floor(WeatherData?.main?.temp_min)
								) || ""
							}
							percipitation="17"
							weatherCondition={
								WeatherData?.weather[0]?.description || ""
							}
						/>
						<DailyCard
							upperTemperature="32"
							lowerTemperature="28"
							date="Fri 27"
							WeatherIcon={Sunny}
						/>
						<DailyCard
							upperTemperature="32"
							lowerTemperature="28"
							date="Sat 28"
							WeatherIcon={PartialClouds}
						/>
						<DailyCard
							upperTemperature="32"
							lowerTemperature="28"
							date="Sun 29"
							WeatherIcon={StormRain}
						/>
						<DailyCard
							upperTemperature="32"
							lowerTemperature="28"
							date="Mon 30"
							WeatherIcon={Sunny}
						/>
						<DailyCard
							upperTemperature="32"
							lowerTemperature="28"
							date="Wed 32"
							WeatherIcon={SunnyCloudy}
						/>
						<DailyCard
							upperTemperature="32"
							lowerTemperature="28"
							date="Thur 33"
							WeatherIcon={StormCloudy}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DaysForcast;

