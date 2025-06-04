// import AddEvent from './ui/AddEvent';
// import { useAppDispatch } from '../hooks/redux';
// import { addEventsInData } from '../store/callsSlice';
// import ButtonEvent from './ui/ButtonEvent';

import InputEvent from './InputName';
import { Calls } from '../types/types';
import GridContainer from './ui/GridContainer';
import DropDown from './features/Dropdown/DropDown';

interface CallItemProps {
	call: Calls;
}
function CallItem({ call: { date, responsible, type, priority } }: CallItemProps) {
	return (
		<div className='bg-dark-blue-bg rounded-full pb-4 pt-4 px-12'>
			<GridContainer>
				<div className='bg-[#6A7B96] rounded-full py-3 px-6 w-[164px] h-[96px] first:justify-self-start'>{date}</div>
				<InputEvent responsible={responsible} />
				<DropDown<Calls['type']> options={['входящий', 'исходящий']} initial={type || 'исходящий'} text='Выберите тип звонка' />{' '}
				<DropDown<Calls['priority']> options={['обычный', 'срочный']} initial={priority || 'обычный'} text='Выберите важность' />
			</GridContainer>
		</div>
	);
}

export default CallItem;

{
	/* <ButtonEvent style='deleteBtn'>
				<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M7.77678 2.77675C7.58123 2.9723 7.50002 3.18769 7.50002 3.33333V4.16666H12.5V3.33333C12.5 3.18769 12.4188 2.9723 12.2233 2.77675C12.0277 2.58121 11.8123 2.49999 11.6667 2.49999H8.33335C8.18771 2.49999 7.97232 2.58121 7.77678 2.77675ZM14.1667 4.16666V3.33333C14.1667 2.64564 13.8312 2.02769 13.4018 1.59824C12.9723 1.16878 12.3544 0.833328 11.6667 0.833328H8.33335C7.64566 0.833328 7.02772 1.16878 6.59826 1.59824C6.16881 2.02769 5.83335 2.64564 5.83335 3.33333V4.16666H2.50002C2.03978 4.16666 1.66669 4.53976 1.66669 5C1.66669 5.46023 2.03978 5.83333 2.50002 5.83333H3.33335V16.6667C3.33335 17.3544 3.66881 17.9723 4.09826 18.4018C4.52772 18.8312 5.14566 19.1667 5.83335 19.1667H14.1667C14.8544 19.1667 15.4723 18.8312 15.9018 18.4018C16.3312 17.9723 16.6667 17.3544 16.6667 16.6667V5.83333H17.5C17.9603 5.83333 18.3334 5.46023 18.3334 5C18.3334 4.53976 17.9603 4.16666 17.5 4.16666H14.1667ZM5.00002 5.83333V16.6667C5.00002 16.8123 5.08123 17.0277 5.27678 17.2232C5.47232 17.4188 5.68771 17.5 5.83335 17.5H14.1667C14.3123 17.5 14.5277 17.4188 14.7233 17.2232C14.9188 17.0277 15 16.8123 15 16.6667V5.83333H5.00002ZM8.33335 8.33333C8.79359 8.33333 9.16669 8.70642 9.16669 9.16666V14.1667C9.16669 14.6269 8.79359 15 8.33335 15C7.87312 15 7.50002 14.6269 7.50002 14.1667V9.16666C7.50002 8.70642 7.87312 8.33333 8.33335 8.33333ZM11.6667 8.33333C12.1269 8.33333 12.5 8.70642 12.5 9.16666V14.1667C12.5 14.6269 12.1269 15 11.6667 15C11.2064 15 10.8334 14.6269 10.8334 14.1667V9.16666C10.8334 8.70642 11.2064 8.33333 11.6667 8.33333Z'
						fill='white'
					/>
				</svg>
			</ButtonEvent> */
}
