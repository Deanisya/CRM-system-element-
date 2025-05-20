import CallItem from './components/CallItem';
import ButtonEvent from './components/ui/ButtonEvent';

function App() {
	return (
		<>
			<div className='flex flex-col gap-5 bg-[#1F232F] py-6 px-6 rounded-[40px]'>
				<ButtonEvent text={'Добавить событие'} style={'addBtn'}>
					<svg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M16.5 5.33333C17.2364 5.33333 17.8334 5.93028 17.8334 6.66666V14.6667H25.8334C26.5698 14.6667 27.1667 15.2636 27.1667 16C27.1667 16.7364 26.5698 17.3333 25.8334 17.3333H17.8334V25.3333C17.8334 26.0697 17.2364 26.6667 16.5 26.6667C15.7637 26.6667 15.1667 26.0697 15.1667 25.3333V17.3333H7.16671C6.43033 17.3333 5.83337 16.7364 5.83337 16C5.83337 15.2636 6.43033 14.6667 7.16671 14.6667H15.1667V6.66666C15.1667 5.93028 15.7637 5.33333 16.5 5.33333Z'
							fill='white'
						/>
					</svg>
				</ButtonEvent>
				<CallItem />
				<CallItem />
			</div>
		</>
	);
}

export default App;
