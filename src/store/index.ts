import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Configuración del store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Tipos de estado y de dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
