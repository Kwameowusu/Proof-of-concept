export const DigitsPrefix = <T extends number | string>(aNumber: T): string | undefined => {
	if (isNaN(Math.floor(Number(aNumber)))) return;
	const num: string = Math.floor(Number(aNumber)).toString();
	if (num.length >= 4) return getThousand<string>(num);
	else if (num.length < 4) return num;
};

const getThousand = <T extends string>(thousand: T): string | undefined => {
	if (thousand.length >= 7) return getMillion<string>(thousand);
	else if (thousand.length < 7) {
		if ([4, 5, 6].some((n) => n === thousand.length)) {
			const sliced = thousand.slice(0, -2);
			const checkZero: Boolean = Number(sliced.slice(-1)) === 0;
			return checkZero
				? `${sliced.slice(0, sliced.length - 1)}k`
				: `${sliced.slice(0, sliced.length - 1)}.${sliced.slice(-1)}k`;
		}
	}
};

const getMillion = <T extends string>(million: T): string | undefined => {
	if (million.length >= 10) return getBillion<string>(million);
	else if (million.length < 10) {
		if ([7, 8, 9].some((n) => n === million.length)) {
			const sliced = million.slice(0, -5);

			const checkZero = Number(sliced.slice(-1)) === 0;
			return checkZero
				? `${sliced.slice(0, sliced.length - 1)}M`
				: `${sliced.slice(0, sliced.length - 1)}.${sliced.slice(-1)}M`;
		}
	}
};
const getBillion = <T extends string>(billion: T): string | undefined => {
	if ([10, 11, 12].some((n) => n === billion.length)) {
		const sliced = billion.slice(0, -8);
		const checkZero: boolean = Number(sliced.slice(-1)) === 0;
		return checkZero
			? `${sliced.slice(0, sliced.length - 1)}B`
			: `${sliced.slice(0, sliced.length - 1)}.${sliced.slice(-1)}B`;
	}
};
