import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Definir el tipo de estado
interface QuoteState {
  quote: string;
  author: string;
  status: 'idle' | 'loading' | 'failed';
}

// Estado inicial
const initialState: QuoteState = {
  quote: '',
  author: '',
  status: 'idle',
};

// Crear una acción asíncrona
export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async () => {
    const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
    return response.data[0]; // La API devuelve un array, tomamos el primer elemento
  }
);

// Crear un slice de Redux
export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    resetQuote: (state) => {
        state.quote = '';
        state.author = '';
        state.status = 'idle';
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action: PayloadAction<{ quote: string, author: string }>) => {
        state.status = 'idle';
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { resetQuote } = quoteSlice.actions;
// Exportar el reducer
export default quoteSlice.reducer;

