import { createSlice } from '@reduxjs/toolkit';
import { Calls, CallsList } from '../types/types';
import data from '../calls.json';
import { v4 as uuidv4 } from 'uuid';
import recalculatePriority from '../utils/recalculatePriority';
import isLunch from '../utils/isLunch';

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

			newCall = {
				...newCall,
				priority: (callForOneResponsible.length >= 3 ? 'срочный' : 'обычный') as 'срочный' | 'обычный',
			};

			const updateList = [newCall, ...state.list];
			state.list = recalculatePriority(updateList, newCall.responsible, newCall.date);
		},
		deleteEventsInData(state, action) {
			const { id } = action.payload;
			const deleteCall = state.list.find(call => call.id === id);
			if (!deleteCall) return;

			const newList = state.list.filter(call => call.id !== id);
			state.list = recalculatePriority(newList, deleteCall.responsible, deleteCall.date);
		},

		updateCallInfo(state, action) {
			const { id, responsible, type, date, time } = action.payload;
			const item = state.list.find(call => call.id === id);
			if (!item) return;
			if (time && isLunch(time)) {
				alert('Обеденное время');
				return;
			}

			if (responsible !== undefined) item.responsible = responsible;
			if (type !== undefined) item.type = type;
			if (date !== undefined) item.date = date;
			if (time !== undefined) item.time = time;

			state.list = recalculatePriority(state.list, item.responsible, item.date);
		},
	},
});

export const { addEventsInData, updateCallInfo, deleteEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
