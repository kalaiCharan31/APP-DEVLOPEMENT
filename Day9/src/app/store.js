import { createStore, combineReducers } from 'redux';
import userReducer from '../app/reducer';
import { setUserName, setEmail } from '../app/actions';

const storedUsername = localStorage.getItem('username');
const storedEmail = localStorage.getItem('email'); // Add email storage

const initialState = {
  user: {
    username: storedUsername || '',
    email: storedEmail || '', // Initialize email with the stored value
  },
};

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, initialState);

if (storedUsername) {
  store.dispatch(setUserName(storedUsername));
}

if (storedEmail) {
  store.dispatch(setEmail(storedEmail)); // Dispatch setEmail action for stored email
}

export default store;
