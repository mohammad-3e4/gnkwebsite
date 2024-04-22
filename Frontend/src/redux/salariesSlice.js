// salariesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { salareisOfFaculties} from '../Actions/panel'

const initialState = {
  salaries: null,
  loading: false,
  error: null,
  message: null,
};

const salariesSlice = createSlice({
  name: "salaries",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(salareisOfFaculties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(salareisOfFaculties.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.salaries = action.payload.salaries;
      })
      .addCase(salareisOfFaculties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
    
  },
});

export const { clearErrors, clearMessage } = salariesSlice.actions;

export default salariesSlice.reducer;
