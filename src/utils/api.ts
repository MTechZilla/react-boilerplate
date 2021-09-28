import Axios from "axios";
import type { Method } from "axios";
const timeoutInMilliSeconds = 100000;

export const $axiosV1 = Axios.create({
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
		apiKey: process.env.NEXT_PUBLIC_API_KEY,
		client: "web",
	},
	timeout: timeoutInMilliSeconds,
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

const invokeApi = async (
	axiosInstance: Function,
	path: string,
	method: Method = "GET",
	body: object = {}
) => {
	try {
		const instance = await axiosInstance({
			method: method,
			url: path,
			data: JSON.stringify(body),
		});
		return instance.data;
	} catch (error) {
		throw error;
	}
};
export default invokeApi;
