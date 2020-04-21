import styled from 'styled-components'

import { Props } from './index'

export const Div = styled.div`
  background-color: ${({backgroundColor}: Props) => backgroundColor || '#fad15c'};
  max-width: 100vw;
  padding: 30px 40px;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({color}: Props) => color || '#212121'};
  border: none;
`;
