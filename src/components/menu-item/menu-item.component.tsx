import React, { FC } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, linkUrl, size }: MenuItemProps) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};
