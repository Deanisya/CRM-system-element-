import { configureStore } from '@reduxjs/toolkit';
import callsSlice from './store/callsSlice';

export const store = configureStore({
	reducer: {
		callsReducer: callsSlice,
	},
});
// window.store = store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
