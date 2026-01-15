import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

import {useTranslation} from 'react-i18next';


export default function GNB(){
  const { t } = useTranslation('menu');

  return (
    <>
      <StyledGNB>
        <ul>
          <StyledItem><NavLink to='/'>{t('MAIN')}</NavLink></StyledItem>
          <StyledItem><NavLink to='/sample'>{t('SAMPLE')}</NavLink></StyledItem>
        </ul>
      </StyledGNB>
    </>
  )
}

const StyledGNB = styled.nav`

`
const StyledItem = styled.li`

`;