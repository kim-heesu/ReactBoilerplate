import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "@/components/common/Header";
import SampleMain from "@/views/SampleMain";
import SamplePage from "@/views/SamplePage";

import { useGetList } from "@/api/index";

function RouteWrap(){
  return (
    <>
      <Routes>
          <Route path="/" element={<SampleMain/>}></Route>
          <Route path="/sample" element={<SamplePage/>}></Route>
      </Routes>
    </>
  )
}

export default function App() {
  const {data} = useGetList();
  console.log(data)
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouteWrap />
      </BrowserRouter>
    </>
  )
}