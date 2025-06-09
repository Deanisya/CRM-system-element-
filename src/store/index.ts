import { configureStore } from '@reduxjs/toolkit';
import callsReducer from './callsSlice';

const savedCalls = localStorage.getItem('calls');
const preloadedState = savedCalls ? { callsReducer: { list: JSON.parse(savedCalls) } } : undefined;

export const store = configureStore({
	reducer: {
		callsReducer,
	},
	preloadedState,
});

store.subscribe(() => {
	const state = store.getState();
	localStorage.setItem('calls', JSON.stringify(state.callsReducer.list));
});

// window.store = store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
