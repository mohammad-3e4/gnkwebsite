// salariesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { setSalareisOfFaculties, deleteFacultySalary} from '../Actions/panel'

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
      .addCase(setSalareisOfFaculties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setSalareisOfFaculties.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(setSalareisOfFaculties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteFacultySalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFacultySalary.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteFacultySalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
    
  },
});

export const { clearErrors, clearMessage } = salariesSlice.actions;

export default salariesSlice.reducer;
