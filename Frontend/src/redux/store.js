// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import documentReducer from "./documentsSlice";
import carouselReducer from "./carouselSlice";
import facultiesReducer from "./facultiesSlice";
import salariesReducer from "./salariesSlice";
import managementReducer from "./managementSlice";

const rootReducer = combineReducers({
  user: userReducer,
  documents: documentReducer,
  carousels: carouselReducer,
  faculties:facultiesReducer,
  management:managementReducer,
  salaries:salariesReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
