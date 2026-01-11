export type QueryKey = string | readonly unknown[];

// buildKey method type
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// get 요청
export interface UseApiGet<T> {
    method? : HttpMethod;
    url: string;
    params?: Record<string, unknown>;
    enabled?: boolean;
    queryKey?: QueryKey;
}

// mutation 요청
export interface UseApiMutation<T, V> {
  url: string;
  onSuccess?: () => void;
  invalidateKeys?: QueryKey[];
  method? : Exclude<HttpMethod, "GET">;
}

export interface MutationParams<T> {
  path?: string;
  body?: T
}

// 에러 응답타입
export interface ApiErrorType {
    status: number;
    message: string;
}