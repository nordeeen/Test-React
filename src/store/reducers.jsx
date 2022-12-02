import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../service';

const initialState = {
  items: '',
  favoriteQuote: '',
  addQoute: '',
};

export const getQuote = createAsyncThunk(
  'quote',
  async (param, { rejectWithValue }) => {
    try {
      const response = await service.getQuote();
      console.log(response);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const datasSlicer = createSlice({
  name: 'dataSlicer',
  initialState: { ...initialState },
  reducers: {
    setItems: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      console.log('data api', action.payload);
      console.log('data api', action.payload.quote);
      state.items = action.payload.quote;
    });
  },
});

export default datasSlicer.reducer;
