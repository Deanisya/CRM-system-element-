import { ReactNode } from 'react';

type DropDownButtonProps<T extends string> = {
	select: T;
	onClick: () => void;
	color: 'blue' | 'green' | 'gray' | 'red';
	children?: ReactNode;
};

function DropDownButton<T extends string>({ select, onClick, children, color }: DropDownButtonProps<T>) {
	const colorMap = {
		blue: 'bg-blue-light',
		green: 'bg-green-bg',
		gray: 'bg-gray-bg text-white-tx',
		red: 'bg-red-bg text-white-tx',
	};

	return (
		<div>
			<button className={` flex gap-2 justify-center items-center border-0 rounded-full px-4 py-1 text-blue-dark-text hover:opacity-80 ${colorMap[color || 'blue']} `} onClick={onClick}>
				<span className='capitalize font-semibold'>{select}</span>
				{children}
			</button>
		</div>
	);
}

export default DropDownButton;
