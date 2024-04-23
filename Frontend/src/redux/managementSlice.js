// managementSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getEntriesOfPTA, deleteEntryPTA, createEntryPTA, deleteEntrySMC, createEntrySMC} from '../Actions/panel'

const initialState = {
  ptaEntries: null,
  loading: false,
  error: null,
  message: null,
};

const managementSlice = createSlice({
  name: "management",
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
      .addCase(createEntryPTA.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEntryPTA.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(createEntryPTA.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getEntriesOfPTA.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEntriesOfPTA.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.ptaEntries = action.payload.entries;
      })
      .addCase(getEntriesOfPTA.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteEntryPTA.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEntryPTA.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteEntryPTA.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(createEntrySMC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEntrySMC.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(createEntrySMC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  
      .addCase(deleteEntrySMC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEntrySMC.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteEntrySMC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  },
});

export const { clearErrors, clearMessage } = managementSlice.actions;

export default managementSlice.reducer;
