import styled, { css } from 'styled-components';
import { UIButtonProps } from 'core/models/props/ui-button.model';

const buttonStyles = css`
  background-color: #333333;
  color: #ffffff;
  border: 2px solid #333333;

  &:hover {
    background-color: #ffffff;
    color: #333333;
  }
`;

const invertedStyles = css`
  background-color: #ffffff;
  color: #333333;
  border: 2px solid #ffffff;
  
  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  color: #ffffff;
  border: 2px solid #4285f4;

  &:hover {
    background-color: #ffffff;
    color: #4285f4;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }: UIButtonProps) => {
  return isGoogleSignIn ? googleSigninStyles : inverted ? invertedStyles : buttonStyles;
};

export const UIButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px;
  font-size: 0.8rem;
  background-color: #333333;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bolder;
  border: 2px solid #333333;
  outline: none;
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
