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
			let newCall = action.payload;
			const callForOneResponsible = state.list.filter(call => call.responsible === newCall.responsible && call.date === newCall.date);

			if (callForOneResponsible.length >= 3) {
				newCall = {
					...newCall,
					priority: 'срочный',
				};
			} else {
				newCall = {
					...newCall,
					priority: newCall.priority ?? 'обычный',
				};
			}

			state.list.unshift(newCall);
		},
		deleteEventsInData(state, action) {
			const { id } = action.payload;
			state.list = state.list.filter(call => call.id !== id);
		},
		updateCallInfo(state, action) {
			const { id, responsible, type, priority, date, time } = action.payload;
			const item = state.list.find(call => call.id === id);
			if (!item) return;

			if (responsible !== undefined) item.responsible = responsible;
			if (type !== undefined) item.type = type;
			if (date !== undefined) item.date = date;
			if (time !== undefined) item.time = time;

			const callsForResponsibleAndDate = state.list.filter(call => call.responsible === item.responsible && call.date === item.date);

			if (callsForResponsibleAndDate.length >= 4) {
				callsForResponsibleAndDate.forEach(call => {
					call.priority = 'срочный';
				});
			} else {
				callsForResponsibleAndDate.forEach(call => {
					call.priority = 'обычный';
				});
			}
		},
	},
});

export const { addEventsInData, updateCallInfo, deleteEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
