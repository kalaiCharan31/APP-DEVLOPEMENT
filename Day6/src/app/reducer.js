// userReducer.js
const initialState = {
    username: '', // Initial state for the user's username
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_NAME': // Update the action type to 'SET_USER_NAME'
        return {
          ...state,
          username: action.payload, // Store the username in the state
        };
      default:
        return state;
    }
  };
  
  export default userReducer;