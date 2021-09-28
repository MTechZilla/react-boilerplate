import { MutationFunction, useMutation } from "react-query";
import queryClient from "../utils/client";
import { TPostResponse } from "../types/index";

const useMutationHandler = <TData, TError, TVariables>(
  fetcher: MutationFunction<TPostResponse<TData>, TVariables>,
  invalidators?: string[],
  removeQuery?: boolean
) => {
  const { mutateAsync, data, isSuccess, isLoading, isError, error } =
    useMutation<TPostResponse<TData>, TError, TVariables>(
      (values: TVariables) => fetcher(values),
      {
        onSuccess: (data: TPostResponse<TData>) => {
          const respStatus = data?.status;
          if (respStatus) {
            invalidators?.forEach((invalidator: string) => {
              if (removeQuery) {
                queryClient.removeQueries(invalidator);
              } else {
                queryClient.invalidateQueries(invalidator);
              }
            });
          }
        },
      }
    );

  return { mutateAsync, data, isSuccess, isLoading, isError, error };
};
export default useMutationHandler;
