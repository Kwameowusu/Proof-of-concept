import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Props {
	children?: ReactNode;
}

type ThemeContextType = {
	dashtheme: string;
};
const ThemeContext = createContext<ThemeContextType | null | string>("");
export const useThemeProvider = () => {
	return useContext(ThemeContext) as ThemeContextType;
};

const ThemeProvider = ({ children }: Props) => {
	const [dashtheme, setdashtheme] = useState("");

	useEffect(() => {
		let meta: [...HTMLMetaElement[]] | any = [...document.querySelectorAll("meta")].find(
			(e) => e.name === "theme-color"
        );
        // console.log(meta)

		if (dashtheme) {
			localStorage.setItem("theme", dashtheme);
			document.documentElement.setAttribute("theme", dashtheme);

			if (document.documentElement.getAttribute("theme") === "dark") {
				meta.content = "#676767";
				document.head.appendChild(meta);
				return;
			}
			if (document.documentElement.getAttribute("theme") === "light") {
				meta.content = "#5C9DFF";
				document.head.appendChild(meta);
				return;
			}
		}
	}, [dashtheme]);

	let hour: number = new Date().getHours();

	useEffect(() => {
		let DayNight: string = hour >= 7 && hour <= 17 ? "day" : "night";

		if (DayNight === "night") {
			setdashtheme("dark");
		} else setdashtheme("light");

		// console.log(DayNight);
	}, [hour]);

	return <ThemeContext.Provider value={{ dashtheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
