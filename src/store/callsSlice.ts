import { createSlice } from '@reduxjs/toolkit';
import { Calls, CallsList } from '../types/types';
import data from '../calls.json';
import { v4 as uuidv4 } from 'uuid';

const dataWithId = data.map(item => ({
	...item,
	id: uuidv4(),
}));
const initialState: CallsList = {
	list: dataWithId as Calls[],
};

const callsSlice = createSlice({
	name: 'calls',
	initialState,
	reducers: {
		addEventsInData(state, action) {
			state.list.unshift(action.payload);
		},
	},
});

export const { addEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
