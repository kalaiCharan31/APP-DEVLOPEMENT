// userActions.js

// Action type to set the user's username
export const SET_USER_NAME = 'SET_USER_NAME';

// Action creator to set the user's username
export const setUserName = (username) => {
  return {
    type: SET_USER_NAME,
    payload: username,
  };
};
// actions.js
export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };
  

// Action type to clear user data
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

// Action creator to clear user data
export const clearUserData = () => {
  return {
    type: CLEAR_USER_DATA,
  };
};