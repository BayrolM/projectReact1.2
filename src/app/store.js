import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/index';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
export { store };
