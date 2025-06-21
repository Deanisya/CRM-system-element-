import { ReactNode } from 'react';
// добавление и удаление события
type ButtonEventProps = {
	text?: string;
	onClick?: () => void;
	children?: ReactNode;
	style: 'addBtn' | 'deleteBtn';
};

function ButtonEvent({ text, onClick, children, style }: ButtonEventProps) {
	const className = {
		addBtn: 'flex gap-6 justify-center items-center border w-[100%] border-dashed border-white-border rounded-full pt-6 pb-6 ',
		deleteBtn: 'bg-red py-2 px-2 rounded-full absolute -left-4 top-11 opacity-0 group-hover:opacity-100',
	};

	return (
		<button className={`${className[style]}`} onClick={onClick}>
			{children}
			<span>{text}</span>
		</button>
	);
}

export default ButtonEvent;
