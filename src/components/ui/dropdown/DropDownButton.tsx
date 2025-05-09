import { ReactNode } from 'react';

type DropDownButtonProps<T extends string> = {
	select: T;
	onClick: () => void;
	children?: ReactNode;
};

function DropDownButton<T extends string>({ select, onClick, children }: DropDownButtonProps<T>) {
	return (
		<div>
			<button className=' flex gap-2 justify-center items-center border-0 rounded-full bg-[#bcd0f0] px-4 py-1 text-blue-dark-text ' onClick={onClick}>
				<span className='capitalize font-semibold'>{select}</span>
				{children}
			</button>
		</div>
	);
}

export default DropDownButton;
