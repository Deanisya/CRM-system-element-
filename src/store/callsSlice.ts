import { createSlice } from '@reduxjs/toolkit';
import { Calls, CallsList } from '../types/types';
import data from '../calls.json';
import { v4 as uuidv4 } from 'uuid';

const savedData = localStorage.getItem('calls');
const dataWithId = data.map(item => ({
	...item,
	id: uuidv4(),
}));
const initialState: CallsList = {
	list: savedData ? (JSON.parse(savedData) as Calls[]) : (dataWithId as Calls[]),
};

const callsSlice = createSlice({
	name: 'calls',
	initialState,
	reducers: {
		addEventsInData(state, action) {
			state.list.unshift(action.payload);
		},
		updateCallInfo(state, action) {
			const { id, responsible, type, priority } = action.payload;
			const item = state.list.find(call => call.id === id);
			if (item) {
				if (responsible !== undefined) item.responsible = responsible;
				if (type !== undefined) item.type = type;
				if (priority !== undefined) item.priority = priority;
			}
			localStorage.setItem('calls', JSON.stringify(state.list));
		},
	},
});

export const { addEventsInData, updateCallInfo } = callsSlice.actions;
export default callsSlice.reducer;
