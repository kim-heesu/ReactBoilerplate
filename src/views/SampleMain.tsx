import { useGetList,useAddList } from "@/api/index";

export default function SamplePage() {
  // get 요청시
  const {data} = useGetList();
  
  // post요청시(추가)
  const { mutate: addListItem, isLoading, error } = useAddList();
  const handleAddList = async (name: string, age: string) => {
    try {
      await addListItem({ name, age }); // body에 id, age 전송
      alert(`${name} 아이템 추가 완료!`)
    } catch (err) {
      console.error(err);
      alert('아이템 추가 중 오류가 발생했습니다.');
    }
  };
  return (
    <>
      <button onClick={() => handleAddList("newId", "25")}>추가</button>
      <div>{data?.map(item => <div key={item.id}>{item.name} {item.age}</div>)}</div>
      
    </>
  );
}