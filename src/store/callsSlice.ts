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
		deleteEventsInData(state, action) {
			const { id } = action.payload;
			state.list = state.list.filter(call => call.id !== id);
		},
		updateCallInfo(state, action) {
			const { id, responsible, type, priority, date, time } = action.payload;
			const item = state.list.find(call => call.id === id);
			if (item) {
				if (responsible !== undefined) item.responsible = responsible;
				if (type !== undefined) item.type = type;
				if (priority !== undefined) item.priority = priority;
				if (date !== undefined) item.date = date;
				if (time !== undefined) item.time = time;
			}
		},
	},
});

export const { addEventsInData, updateCallInfo, deleteEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
