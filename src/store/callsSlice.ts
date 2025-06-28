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
			const newCall = action.payload;

			const updateList = [newCall, ...state.list];
			state.list = recalculatePriority(updateList, newCall.responsible, newCall.date);
		},
		deleteEventsInData(state, action) {
			const { id } = action.payload;
			const deleteCall = state.list.find(call => call.id === id);
			if (!deleteCall) return;

			const newList = state.list.filter(call => call.id !== id);
			console.log('newList', newList);

			state.list = recalculatePriority(newList, deleteCall.responsible, deleteCall.date);
		},

		updateCallInfo(state, action) {
			const { id, responsible, type, date, time, priority } = action.payload;
			const item = state.list.find(call => call.id === id);
			if (!item) return;
			if (time && isLunch(time)) {
				alert('Обеденное время');
				return;
			}

			// const oldResponsible = item.responsible;
			// const oldDate = item.date;

			if (responsible !== undefined) item.responsible = responsible;
			if (type !== undefined) item.type = type;
			if (date !== undefined) item.date = date;
			if (time !== undefined) item.time = time;

			if (priority !== undefined) {
				item.priority = priority;
				item.isManualPriority = true;
			}

			// state.list = recalculatePriority(state.list, oldResponsible, oldDate);
			state.list = recalculatePriority(state.list, item.responsible, item.date);
		},
	},
});

export const { addEventsInData, updateCallInfo, deleteEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
