import styled from 'styled-components';
import { UIButton } from 'components/ui-button/ui-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 290px;
  height: 390px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #1d1d1d;
  background-color: #ffffff;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartDropdownButton = styled(UIButton)`
  margin-top: auto;
`;
