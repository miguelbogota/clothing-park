import React, { FC } from 'react';
import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, linkUrl, size }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <MenuItemContainer size={size ? size : '380px'} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};
