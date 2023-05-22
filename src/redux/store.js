import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], // Specify the reducers to persist
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor }