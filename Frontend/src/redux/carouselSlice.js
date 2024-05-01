// carouselSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { uploadCarousel, getCarouselSlides} from '../Actions/carousel'

const initialState = {
  slides: null,
  loading: false,
  footer: true,
  error: null,
  message: null,
};

const carouselSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    setFooter: (state) => {
      state.footer = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadCarousel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadCarousel.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(uploadCarousel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getCarouselSlides.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCarouselSlides.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.slides = action.payload.slides;
      })
      .addCase(getCarouselSlides.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

  },
});

export const { clearErrors, clearMessage,setFooter } = carouselSlice.actions;

export default carouselSlice.reducer;
