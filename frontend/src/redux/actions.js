import axios from 'axios';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';

export const addAccount = (account) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/add-account', account);
  dispatch({
    type: ADD_ACCOUNT,
    payload: response.data,
  });
};
