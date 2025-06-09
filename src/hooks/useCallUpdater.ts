import { deleteEventsInData, updateCallInfo } from '../store/callsSlice';
import { Calls } from '../types/types';
import { useAppDispatch } from './redux';

export default function useCallUpdater(id: string) {
	const dispatch = useAppDispatch();
	const handleUpdateName = (responsible: string) => {
		dispatch(updateCallInfo({ id, responsible }));
	};
	const handleUpdateType = (type: Calls['type']) => {
		dispatch(updateCallInfo({ id, type }));
	};
	const handleUpdatePriority = (priority: Calls['priority']) => {
		dispatch(updateCallInfo({ id, priority }));
	};
	const handleUpdateDateAndTime = (date: string, time: string) => {
		dispatch(updateCallInfo({ id, date, time }));
	};
	const deleteEvent = () => {
		dispatch(deleteEventsInData({ id }));
	};
	return {
		handleUpdateName,
		handleUpdateType,
		handleUpdatePriority,
		handleUpdateDateAndTime,
		deleteEvent,
	};
}
