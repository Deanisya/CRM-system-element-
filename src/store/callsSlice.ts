import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Calls, CallsList } from '../types/types';
import data from '../calls.json';
import { v4 as uuidv4 } from 'uuid';
import recalculatePriority from '../utils/recalculatePriority';
import isLunch from '../utils/isLunch';
import isFriday from '../utils/isFriday';

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
		addEventsInData(state, action: PayloadAction<Calls>) {
			const newCall = action.payload;

			if (isFriday(state.list, newCall.date)) {
				alert('В пятницу можно только два звонка на весь день.');
				return;
			}

			const sameDayCalls = state.list.filter(call => call.responsible === newCall.responsible && call.date === newCall.date);
			const [first, second] = sameDayCalls;

			if (first?.type === newCall.type && second?.type === newCall.type && newCall.type !== 'входящий') {
				alert('Нельзя ставить два звонка одного типа подряд у одного ответственного в один день.');
				return;
			}

			const updateList = [newCall, ...state.list];
			state.list = recalculatePriority(updateList, newCall.responsible, newCall.date);
		},
		deleteEventsInData(state, action: PayloadAction<Calls>) {
			const { id } = action.payload;
			const deleteCall = state.list.find(call => call.id === id);
			if (!deleteCall) return;

			const newList = state.list.filter(call => call.id !== id);
			console.log('newList', newList);

			state.list = recalculatePriority(newList, deleteCall.responsible, deleteCall.date);
		},

		updateCallInfo(state, action: PayloadAction<Calls>) {
			const { id, responsible, type, date, time, priority } = action.payload;
			const item = state.list.find(call => call.id === id);
			if (!item) return;
			if (time && isLunch(time)) {
				alert('Обеденное время с 12:00 до 14:00');
				return;
			}

			if (
				date &&
				isFriday(
					state.list.filter(call => call.id !== id),
					date
				)
			) {
				alert('В пятницу можно только два звонка на весь день.');
				return;
			}

			// if (responsible !== undefined) {
			// 	const newResponsible = responsible;
			// 	const newType = type !== undefined ? type : item.type;
			// 	const newDate = date !== undefined ? date : item.date;

			// 	const sameTypeCalls = state.list.filter(
			// 		call =>
			// 			call.id !== item.id && // исключаем сам item
			// 			call.responsible === newResponsible &&
			// 			call.type === newType &&
			// 			call.date === newDate
			// 	);

			// 	if (sameTypeCalls.length >= 1) {
			// 		alert('Нельзя ставить два звонка одного типа подряд у одного ответственного в один день.');
			// 		// не обновляем имя
			// 	} else {
			// 		item.responsible = newResponsible;
			// 	}
			// }

			if (responsible !== undefined) item.responsible = responsible;
			if (type !== undefined) item.type = type;
			if (date !== undefined) item.date = date;
			if (time !== undefined) item.time = time;

			if (priority !== undefined) {
				item.priority = priority;
				item.isManualPriority = true;
			}

			state.list = recalculatePriority(state.list, item.responsible, item.date);
		},
	},
});

export const { addEventsInData, updateCallInfo, deleteEventsInData } = callsSlice.actions;
export default callsSlice.reducer;
