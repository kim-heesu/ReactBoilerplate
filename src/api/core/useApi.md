### GET 요청 예시
```
export const useGetList = () => {
  return useApiGet<{ id: string; name: string }[]>({
    url: "/list",
  });
};

// 사용 예시
import { useGetList } from "@/api/index";
const { data:listData, isLoading, error } = useGetList();
```

### POST 요청 예시 + 캐시 자동 갱신
```
export const useAddList = () => {
  const invalidateKeys: QueryKey[] = [buildKey("GET", "/list")];

  return useApiPost<{ success: boolean; message: string }, { id: string }>({
    url: "/list",
    invalidateKeys, // POST 성공 후 GET /list 캐시 갱신
  });
};

API요청시 응답이 이렇게 올것이라 예상하고 타입을 지정함
{
  "success": true,
  "message": "Item created successfully"
}

// 사용시
import { useAddList } from "@/api/index";
const { mutate: addListItem, isLoading, error } = useAddList();

const handleAddList = async (id: string) => {
  try {
    await addListItem({ id }); // body에 id 전송
    alert(`${id} 아이템 추가 완료!`)
  } catch (err) {
    console.error(err);
    alert('아이템 추가 중 오류가 발생했습니다.');
  }
};

// JSX 예시
<AddButton onClick={() => handleAddList(item.id)}>Add</AddButton>

```

### PUT요청 예시
```
export const useUpdateList = () => {
  return useApiPut<{ success: boolean; message: string }, { id: string; name: string }>({
    url: "/list",
  });
};

// 사용시
import { useUpdateList } from "@/api/index";
const { mutate: updateListItem, isLoading, error } = useUpdateList();
const handleUpdatelist = async (id: string, name: string) => {
  try {
    await updateListItem({ id, name });
    alert(`${id} 아이템 수정 완료!`)
  } catch (err) {
    console.error(err);
    alert('아이템 수정 중 오류가 발생했습니다.');
  }
};

<UpdateButton onClick={() => handleUpdatelist(item.id,item.name)}>Update</UpdateButton>
```

### Delete도 동일한 패턴으로 구현가능