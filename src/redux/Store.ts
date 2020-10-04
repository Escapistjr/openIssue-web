import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';

const getConfiguredStore = () =>
	configureStore({
		reducer: rootReducer,
	});

const store = getConfiguredStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
