import { ADD_ACCOUNT } from './actions';

const initialState = {
  accounts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;