import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBarContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  font-size: 1.14rem;
  padding: 10px 15px;
`;
