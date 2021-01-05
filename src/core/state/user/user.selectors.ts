import { createSelector } from 'reselect';
import { RootState } from '../root.models';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector([selectUser], cart => cart.currentUser);
