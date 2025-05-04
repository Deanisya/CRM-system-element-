import { createSlice } from '@reduxjs/toolkit';
import { Calls, CallsList } from '../types/types';
import data from '../calls.json';

const initialState: CallsList = {
	list: data as Calls[],
};

const callsSlice = createSlice({
	name: 'calls',
	initialState,
	reducers: {
		addEventsInData(state, action) {
			state.list = [...state.list, action.payload];
		},
	},
});

export const { addEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
