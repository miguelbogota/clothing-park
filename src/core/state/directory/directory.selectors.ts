import { createSelector } from 'reselect';
import { RootState } from '../../models/state/root.models';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections);
