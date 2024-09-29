import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/slice"; // Переконайся, що тут правильно
import filtersReducer from "./filters/slice"; // Переконайся, що тут правильно
import { authReducer } from "./auth/slice"; // Переконайся, що тут правильно

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts", "auth"], // Додай auth, якщо потрібно
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer, // Переконайся, що тут правильно
    auth: authReducer, // Додай authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
