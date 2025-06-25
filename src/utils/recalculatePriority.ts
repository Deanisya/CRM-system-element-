import { Calls } from '../types/types';

export default function recalculatePriority(list: Calls[], responsible: string, date: string) {
	const filteredCalls = list.filter(call => call.responsible === responsible && call.date === date);
	const isUrgent = filteredCalls.length >= 4;

	return list.map(call => {
		if (call.responsible === responsible && call.date === date) {
			return {
				...call,
				priority: (isUrgent ? 'срочный' : 'обычный') as 'срочный' | 'обычный',
			};
		}
		return call;
	});
}
