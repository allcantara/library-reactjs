import styled from 'styled-components'

import { Props } from './index'

export const Div = styled.div`
  background-color: ${({backgroundColor}: Props) => backgroundColor};

  width: 100vw;
  height: 20px;
  padding: 30px 40px;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({color}: Props) => color};
`;
