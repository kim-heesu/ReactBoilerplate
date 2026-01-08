import { useApiGet } from "@/api/core/useApi";

export const useGetList = () => {
  return useApiGet<{ id: string; name: string }[]>({
    url: "/list",
  });
}