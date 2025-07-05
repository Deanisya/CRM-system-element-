import { Calls } from '../types/types';

export default function isFriday(list: Calls[], newDate: string): boolean {
	const isFriday = new Date(newDate).getDay() === 5;
	if (!isFriday) return false;

	const fridayCalls = list.filter(call => new Date(call.date).getDay() === 5);
	if (fridayCalls.length >= 2) {
		return true;
	}
	return false;
}
