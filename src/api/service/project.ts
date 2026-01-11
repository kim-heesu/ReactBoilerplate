import { useApiGet, useApiPost, useApiPut, useApiDelete, buildKey } from "@/api/core/useApi";
import type { UpdateListBody, UpdateListParams, UpdateListResponse, MutateParams, QueryKey } from "@/types/index";

// GET /list 요청
export const useGetList = () => {
  return useApiGet<{ id: string, name: string, age: string }[]>({
    url: "/list",
  });
}

// POST /list 추가요청
export const useAddList = () => {
  const invalidateKeys: QueryKey[] = [buildKey("GET", "/list")];

  const mutation = useApiPost<
    UpdateListBody,
    UpdateListResponse
  >({
    url: "/list",
    invalidateKeys,
  });

  return {
    ...mutation,
    mutateAsync: (body: { name: string; age: string }) =>
      mutation.mutateAsync({ body }),
  };
};

// PUT /list 수정요청
export const useUpdateList = () => {
  const invalidateKeys: QueryKey[] = [buildKey("GET", "/list")];

  const mutation = useApiPut<
    UpdateListBody,
    UpdateListResponse
  >({
    url: "/list",
    invalidateKeys,
  });
  return {
    ...mutation,
    mutateAsync: ({id,...body}:UpdateListParams) => {
      return mutation.mutateAsync({
        path: id,
        body
      })
    }
  }
}

// DELETE /list/:id → 항목 삭제
export const useDeleteList = () => {
  const invalidateKeys: QueryKey[] = [buildKey("GET", "/list")];
  const mutation = useApiDelete<
    UpdateListBody,
    void
  >({
    url: "/list",
    invalidateKeys,
  });
  return {
    ...mutation,
    mutateAsync: ({id}:MutateParams) => {
      return mutation.mutateAsync({
        path: id,
      })
    }
  }
}