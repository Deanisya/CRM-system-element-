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
		addBtn: 'flex gap-6 justify-center items-center',
		deleteBtn: 'bg-red py-2 px-2 rounded-full',
	};

	return (
		<button className={`${className[style]}`} onClick={onClick}>
			{children}
			<span>{text}</span>
		</button>
	);
}

export default ButtonEvent;
