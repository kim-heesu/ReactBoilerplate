import { api } from '@/api/core/axios';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseApiGet, UseApiMutation, HttpMethod, QueryKey, ApiErrorType } from "@/types/api/core/apiType";

// queryKey 생성
export const buildKey = (
  method: HttpMethod,
  url: string,
  params?: Record<string, unknown>
) => [method, url, params] as const;

// get요청
export const useApiGet = <T>({
    method = "GET",
    url,
    params,
    enabled = true
}: UseApiGet<T>) => {
    const queryKey: QueryKey = buildKey(method, url, params);

    return useQuery<T> ({
        queryKey: queryKey,
        queryFn: async ()=>{
            const res = await api.get(url,{params});
            return res.data;
        },
        enabled: enabled
    })
}

// mutation 공통
const useApiMutation = <T, V>({
  url,
  method,
  onSuccess,
  invalidateKeys,
}: UseApiMutation<T, V>) => {
  const queryClient = useQueryClient();

  return useMutation<T, ApiErrorType, V>({
    mutationFn: async (body: V) => {
      const res = await api.request<T>({
        url,
        method,
        data: body,
      });
      return res.data;
    },
    onSuccess: () => {
      if (onSuccess) onSuccess();
      if (invalidateKeys) {
        invalidateKeys?.forEach(key => 
            queryClient.invalidateQueries({ queryKey: Array.isArray(key) ? key : [key] })
        );
      }
    },
    onError: (error) => {
      console.log(error)
    }
  });
};

// post
export const useApiPost = <T, V>(options: UseApiMutation<T, V>) => {
  return useApiMutation<T,V>({...options, method: "POST"});
}

// PUT
export const useApiPut = <T, V>(options: UseApiMutation<T, V>) => {
  return useApiMutation<T,V>({...options, method: "PUT"});
}

// DELETE
export const useApiDelete = <T, V>(options: UseApiMutation<T, void>) => {
  return useApiMutation<T,V>({...options, method: "DELETE"});
}