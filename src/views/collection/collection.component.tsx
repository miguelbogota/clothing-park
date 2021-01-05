import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import './collection.styles.scss';

export const CollectionPage: FC = () => {
  const match = useRouteMatch();
  return (
    <div className='collection-page'>
    </div>
  );
};
