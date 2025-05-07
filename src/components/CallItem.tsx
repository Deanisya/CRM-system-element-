// import AddEvent from './ui/AddEvent';
// import InputEvent from './InputName';
// import { Calls } from '../types/types';
// import { useAppDispatch } from '../hooks/redux';
// import { addEventsInData } from '../store/callsSlice';

import { Calls } from '../types/types';
import DropDown from './DropDown';

function CallItem() {
	// const dispatch = useAppDispatch();
	// const newCall: Calls = {
	// 	date: '2025-05-04',
	// 	time: '10:00',
	// 	responsible: 'Фамилия Имя участника',
	// 	type: 'исходящий',
	// 	priority: 'обычный',
	// };

	// const handleAddToList = () => {
	// 	dispatch(addEventsInData(newCall));
	// };

	return (
		<div>
			<h1 className='text-3xl font-bold underline text-amber-400 mb-2'>Hello world!</h1>
			{/* <AddEvent onClick={handleAddToList} /> */}
			{/* <InputEvent /> */}
			<DropDown<Calls['type']> options={['входящий', 'исходящий']} initial='входящий' />
			<DropDown<Calls['priority']> options={['обычный', 'срочный']} initial='обычный' />
		</div>
	);
}

export default CallItem;
