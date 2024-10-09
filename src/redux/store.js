import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // використовуємо локальне сховище
import rootReducer from "./rootReducer"; // ваш кореневий редюсер

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // зберігаємо тільки auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
