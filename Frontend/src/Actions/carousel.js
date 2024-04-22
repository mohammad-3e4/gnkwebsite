import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseUrl";

export const uploadCarousel = createAsyncThunk(
  "carousel/uploadCarousel",
  async ({ formData, token }, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v2/media/upload/carousel`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const responseData = await response.json(); // Parse response once
      console.log(responseData);
      if (!response.ok) {
        console.log(responseData); // Log error data
        throw new Error(responseData.error);
      }

      return responseData; // Return data on success
    } catch (error) {
      console.log(error);
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const getCarouselSlides = createAsyncThunk(
  "carousel/getCarouselSlides",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/media/carousels`, {
    
      });

      const responseData = await response.json(); // Parse response once
      console.log(responseData);
      if (!response.ok) {
        console.log(responseData); // Log error data
        throw new Error(responseData.error);
      }

      return responseData; // Return data on success
    } catch (error) {
      console.log(error);
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteByIdDocuments = createAsyncThunk(
  "documents/deleteByIdDocuments",
  async ({ docID, docType, token }, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v2/documents/${docType}/${docID}`,
        {
          method: "DELETE", // Specify the DELETE method
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json(); // Parse response once
      console.log(responseData);
      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData; // Return data on success
    } catch (error) {
      console.log(error);
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
