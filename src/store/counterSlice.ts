import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definir el tipo de estado
interface CounterState {
  value: number;
}

// Estado inicial
const initialState: CounterState = {
  value: 0,
};

// Crear un slice de Redux
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Exportar las acciones generadas
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exportar el reducer
export default counterSlice.reducer;
