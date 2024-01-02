import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
    auth: authReducer,
});

//https://github.com/rt2zz/redux-persist#transforms
// const SetTransform = createTransform(
//     (inboundState) => {
//         return { ...inboundState, mySet: [...inboundState.mySet] };
//     },
//     (outboundState) => {
//         return { ...outboundState, mySet: new Set(outboundState.mySet) };
//     },
//     { whitelist: ["auth"] }
// );
const persistConfig = {
    key: "root",
    storage,
    // transforms: [SetTransform],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.VITE_APP_NODE_ENV !== "production",
});

let persistor = persistStore(store);

export { store, persistor };
