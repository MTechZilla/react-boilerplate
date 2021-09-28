import { useQuery } from "react-query";
import type { QueryFunction, QueryKey } from "react-query";
import { TResponse } from "../types/index";

const useQueryHandler = <TData, TError>(
	key: QueryKey,
	fetcher: QueryFunction<TResponse<TData>>
) => {
	const { data, isLoading, isError, error, isSuccess } = useQuery<TResponse<TData>, TError>(
		key,
		fetcher,
		{
			retry: false,
		}
	);

	return { data, isLoading, isError, error, isSuccess };
};

export default useQueryHandler;
