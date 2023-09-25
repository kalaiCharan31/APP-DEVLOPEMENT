export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = (username) => {

  localStorage.setItem('username', username);

  return {
    type: SET_USER_NAME,
    payload: username,
  };
};
// redux/actions.js
export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
