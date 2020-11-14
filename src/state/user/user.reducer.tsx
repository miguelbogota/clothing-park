import { UserActions, UserState } from 'core/models/state-actions/user-state.model';

const INITIAL_VALUES: UserState = {
  current: null
};

export const userReducer = (state = INITIAL_VALUES, action: UserActions): UserState => {

  switch (action.type) {
    case 'SET_CURRENT_USER': return { ...state, ...action.payload };
    default: return state;
  }

};
