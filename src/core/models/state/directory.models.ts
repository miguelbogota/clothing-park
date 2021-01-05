import { ReduxDispatch } from './root.models';
import { ShopDirectory } from '../directory.model';

/** Type with the actions for the directory. */
export type DirectoryStateActions = '';

/** Dispatch interface for the directory.  */
export type DirectoryActions = ReduxDispatch<DirectoryStateActions>

/** Model for the state the directory will have */
export interface DirectoryState {
  sections: ShopDirectory[];
}
