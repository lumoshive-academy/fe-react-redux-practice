// src/redux/store.js
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export {store, persistor};
