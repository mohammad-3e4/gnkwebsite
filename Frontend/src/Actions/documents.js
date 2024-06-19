import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseUrl";

export const uploadDocuments = createAsyncThunk(
  "documents/uploadDocuments",
  async ({ formData, token }, thunkAPI) => {
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    try {
      const response = await fetch(
        `${baseUrl}/api/v2/documents/upload/certificates`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log("Response Data: ", responseData);

      if (!response.ok) {
        console.log("Error Response Data: ", responseData);
        throw new Error(responseData.error || "Error uploading documents");
      }

      return responseData; // Return data on success
    } catch (error) {
      console.error("Catch Error: ", error);
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getDocuments = createAsyncThunk(
  "documents/getDocuments",
  async ({ docType, token }, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/documents/${docType}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

export const updateDocuments = createAsyncThunk(
  "documents/updateDocuments",
  async ({ id, class_name, time, fees, token }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("class_name", class_name);
      formData.append("time", time);
      formData.append("fees", fees);

      const response = await fetch(`${baseUrl}/api/v2/documents/update/fees`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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
