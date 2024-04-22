// facultiesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { listOffaculties, salareisOfFaculties} from '../Actions/panel'

const initialState = {
  faculties: null,
  loading: false,
  error: null,
  message: null,
};

const facultiesSlice = createSlice({
  name: "faculties",
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
      .addCase(listOffaculties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listOffaculties.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.faculties = action.payload.faculties;
      })
      .addCase(listOffaculties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(salareisOfFaculties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(salareisOfFaculties.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.faculties = action.payload.faculties;
      })
      .addCase(salareisOfFaculties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  },
});

export const { clearErrors, clearMessage } = facultiesSlice.actions;

export default facultiesSlice.reducer;
