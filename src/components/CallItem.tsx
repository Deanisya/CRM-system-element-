import AddEvent from './ui/AddEvent';
import InputEvent from './InputName';
import { Calls } from '../types/types';
import { useAppDispatch } from '../hooks/redux';
import { addEventsInData } from '../store/callsSlice';

function CallItem() {
	const dispatch = useAppDispatch();
	const newCall: Calls = {
		date: '2025-05-04',
		time: '10:00',
		responsible: 'Фамилия Имя участника',
		type: 'исходящий',
		priority: 'обычный',
	};

	const handleAddToList = () => {
		dispatch(addEventsInData(newCall));
	};

	return (
		<div>
			<AddEvent onClick={handleAddToList} />
			<InputEvent />
		</div>
	);
}

export default CallItem;
