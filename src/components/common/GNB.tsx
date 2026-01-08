import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


export default function GNB(){
  return (
    <>
      <StyledGNB>
        <ul>
          <StyledItem><NavLink to='/'>Main</NavLink></StyledItem>
          <StyledItem><NavLink to='/sample'>SamplePage</NavLink></StyledItem>
        </ul>
      </StyledGNB>
    </>
  )
}

const StyledGNB = styled.nav`

`
const StyledItem = styled.li`

`;