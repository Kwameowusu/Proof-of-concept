import { useEffect, useRef, useState } from "react";

export const useView = <T extends HTMLElement, U extends IntersectionObserverInit>(
	detectButton: T,
	options: U
) => {
	const [inView, setinView] = useState(false);

	const getEntry = useRef<IntersectionObserverEntry>();
	const CallbackFunc = ([entry]: IntersectionObserverEntry[]) => {
		getEntry.current = entry;
		if (entry.isIntersecting === true) setinView(true);
		else if (entry.isIntersecting === false) setinView(false);
	};

	useEffect(() => {
		let observer = new IntersectionObserver(CallbackFunc, options);
		if (detectButton) observer.observe(detectButton);

		return () => {
			if (detectButton) observer.unobserve(detectButton);
		};
	}, [detectButton, options]);
	return { inView, entry: getEntry.current };
};
