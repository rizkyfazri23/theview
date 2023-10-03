import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Ganti ini dengan alamat reducer Anda
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  // tambahkan konfigurasi tambahan jika diperlukan
});

export default store;
