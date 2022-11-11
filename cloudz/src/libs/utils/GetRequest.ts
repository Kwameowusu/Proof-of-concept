// import useSWR, { Fetcher } from "swr";

// interface DataProps {
// 	data?: [];
// 	error: any;
// }

// const fetcher: Fetcher = (url: any) => fetch(url).then((res) => res.json());
// export const GetRequest = (args: any): DataProps => {
// 	// console.log(args);
// 	const { data, error } = useSWR(args, fetcher, { refreshInterval: 1000 });

// 	return { data, error } as DataProps;
// };

import useSWR, { Fetcher } from "swr";

interface DataPaylaod {
	[key: string]: any;
}

interface DataResponse {
    data: any;
    error:any
}
const fetcher: Fetcher = (url: any) => fetch(url).then((res) => res.json());

export const GetRequest = (args: string): DataResponse => {
	const { data ,error } = useSWR(args, fetcher, { refreshInterval: 1000 });
	return {
		data,
		error,
	};
};
