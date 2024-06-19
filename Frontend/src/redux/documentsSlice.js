// documentsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { uploadDocuments, getDocuments, deleteByIdDocuments,updateDocuments} from '../Actions/documents'

const initialState = {
  documents: null,
  loading: false,
  error: null,
  message: null,
};

const documentsSlice = createSlice({
  name: "documents",
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
      .addCase(uploadDocuments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(uploadDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(updateDocuments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(updateDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getDocuments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.documents = action.payload.documents;
      })
      .addCase(getDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteByIdDocuments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteByIdDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteByIdDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

  },
});

export const { clearErrors, clearMessage } = documentsSlice.actions;

export default documentsSlice.reducer;
