import { useApiGet, useApiPost, useApiPut, buildKey } from "@/api/core/useApi";
import type { QueryKey } from "@/types/api/core/apiType";

// GET /list 요청
export const useGetList = () => {
  return useApiGet<{ id: string; name: string }[]>({
    url: "/list",
  });
}

// POST /list 추가요청
export const useAddList = () => {
  const invalidateKeys: QueryKey[] = [buildKey("GET", "/list")];

  return useApiPost<{ success: boolean; message: string }, { name: string, age: string }>({
    url: "/list",
    invalidateKeys, // POST 성공 후 GET /list 캐시 갱신
  });
};

// PUT /list 요청
export const useUpdateList = () => {
  return useApiPut<{ success: boolean; message: string }, { id: string; name: string }>({
    url: "/list",
  });
};

// PUT /list/:id → id에 해당하는 항목 수정

// DELETE /list/:id → 항목 삭제