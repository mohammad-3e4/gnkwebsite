import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseUrl";

export const uploadDocuments = createAsyncThunk(
  "panel/uploadDocuments",
  async ({ formData, token }, thunkAPI) => {
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
export const listOffaculties = createAsyncThunk(
  "panel/listOffaculties",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v2/admin/panel/faculties`,
        {}
      );
      const responseData = await response.json(); // Parse response once
  
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

export const salareisOfFaculties = createAsyncThunk(
  "panel/salareisOfFaculties",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v2/admin/panel/salaries`,
        {}
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

export const getSalaries = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/v2/admin/panel/salaries`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch salaries");
  }
};

export const setSalareisOfFaculties = createAsyncThunk(
  "panel/setSalareisOfFaculties",
  async ({values, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/salaries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(values),
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
export const facultiesJoining = createAsyncThunk(
  "panel/facultiesJoining",
  async ({values, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/joining`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(values),
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
export const deleteFacultyEntry = createAsyncThunk(
  "panel/deleteFacultyEntry",
  async ({id, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/faculties/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
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
export const updateFacultyEntry = createAsyncThunk(
  "panel/updateFacultyEntry",
  async ({values, id, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/faculties/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(values),
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

export const deleteFacultySalary = createAsyncThunk(
  "panel/deleteFacultyEntry",
  async ({id, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/salaries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
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

export const createEntryPTA = createAsyncThunk(
  "panel/createEntryPTA",
  async ({values, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/entry-of-pta`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(values),
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
export const getEntriesOfPTA = createAsyncThunk(
  "panel/getEntriesOfPTA",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/entries`);
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
export const deleteEntryPTA = createAsyncThunk(
  "panel/deleteEntryPTA",
  async ({id, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/entries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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
export const createEntrySMC = createAsyncThunk(
  "panel/createEntrySMC",
  async ({values, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/entry-of-smc`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(values),
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
// export const getEntriesOfSMC = createAsyncThunk(
//   "panel/getEntriesOfSMC",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch(`${baseUrl}/api/v2/admin/panel/entries/smc`);
//       const responseData = await response.json(); // Parse response once
//       console.log(responseData);
//       if (!response.ok) {
//         console.log(responseData); // Log error data
//         throw new Error(responseData.error);
//       }

//       return responseData; // Return data on success
//     } catch (error) {
//       console.log(error);
//       // Handle error
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );
export const deleteEntrySMC = createAsyncThunk(
  "panel/deleteEntrySMC",
  async ({id, token}, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v2/admin/panel/entries/smc/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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

export const getEntriesOfSMC = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/v2/admin/panel/entries/smc`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch SMC entries");
  }
};
