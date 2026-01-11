import styled from '@emotion/styled';
import { useInput } from "@/hooks";
import { useGetList,useAddList,useDeleteList } from "@/api/index";
import type { UpdateListBody,MutateParams } from "@/types/index";


export default function SamplePage() {
  // get 요청시
  const {data} = useGetList();
  
  // post요청시(추가)
  const [name, setName] = useInput();
  const [age, setAge] = useInput();
  const { mutateAsync: addListItem, isPending } = useAddList();
  const handleAddList = async ({name, age}:UpdateListBody) => {
    try {
      await addListItem({name,age}); // body에 id, age 전송
      alert(`${name} 아이템 추가 완료!`)
    } catch (err) {
      console.error(err);
      alert('아이템 추가 중 오류가 발생했습니다.');
    }
  };

  // delete 요청
  const { mutateAsync: deleteListItem } = useDeleteList();
  const handleDeleteList = async ({id}:MutateParams) => {
    try {
      await deleteListItem({id}); // body에 id, age 전송
      alert(`${name} 삭제완료`)
    } catch (err) {
      console.error(err);
      alert('아이템 삭제 중 오류가 발생했습니다.');
    }
  };
  
  return (
    <>
      <StyledAddBox>
        <input placeholder="name" value={name} onChange={setName}/>
        <input placeholder="age" value={age} onChange={setAge}/>
        <button onClick={()=>{handleAddList({name,age})}}>추가</button>
      </StyledAddBox>
      <div>
        {isPending ? (
          <span>loading</span>
        ) : (
          data?.map(item => (
            <StyledList key={item.id}>
              <span>이름: </span>{item.name} | 
              <span>나이: </span>{item.age} | 
              <button onClick={()=>{handleDeleteList({id:item.id})}}>삭제</button>
            </StyledList>
          ))
        )}
      </div>
      
    </>
  );
}

const StyledAddBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: solid #000;
  border-width: 1px 0;
  input {
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
  }
`;

const StyledList = styled.div`
  display: flex;
  gap:1rem;
`;
