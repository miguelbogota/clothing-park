import React, { FC } from 'react';
import { DirectoryMenuContainer } from './directory.styles';
import { MenuItem } from 'components/menu-item/menu-item.component';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from 'core/state/directory/directory.selectors';

export const Directory: FC = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};
