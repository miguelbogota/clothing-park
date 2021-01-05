import React, { FC } from 'react';
import './directory.styles.scss';
import { MenuItem } from 'components/menu-item/menu-item.component';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from 'core/state/directory/directory.selectors';

export const Directory: FC = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
