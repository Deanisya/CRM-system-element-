import { Calls } from '../types/types';
export default function recalculatePriority(list: Calls[], responsible: string, date: string) {
	const filteredCalls = list.filter(call => call.responsible === responsible && call.date === date);

	const hasManualUrgent = filteredCalls.some(call => call.isManualPriority && call.priority === 'срочный');
	console.log('hasManualUrgent', hasManualUrgent);

	let updatedCalls = [...list];

	if (filteredCalls.length < 5 || hasManualUrgent) {
		updatedCalls = list.map(call => {
			if (call.responsible === responsible && call.date === date) {
				return {
					...call,
					priority: call.isManualPriority ? call.priority : 'обычный',
				};
			}
			return call;
		});
	} else if (filteredCalls.length >= 5) {
		const matchedIndexes: number[] = [];

		list.forEach((call, index) => {
			if (call.responsible === responsible && call.date === date) {
				matchedIndexes.push(index);
			}
		});

		const lastFour = matchedIndexes.slice(-4);

		updatedCalls = list.map((call, index) => {
			if (call.responsible === responsible && call.date === date) {
				if (call.isManualPriority) return call;

				return {
					...call,
					priority: lastFour.includes(index) ? 'обычный' : 'срочный',
				};
			}
			return call;
		});
	}

	return updatedCalls;
}
