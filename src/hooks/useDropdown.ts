import { useEffect, useRef, useState } from 'react';

export default function useDropdown<T extends string>(initial: T) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [select, setSelect] = useState<T>(initial);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSelect(initial); // обновляем select, если initial изменился
	}, [initial]);

	const getColor = (option: T) => {
		switch (option) {
			case 'исходящий':
				return 'blue';
			case 'входящий':
				return 'green';
			case 'обычный':
				return 'gray';
			case 'срочный':
				return 'red';
			default:
				return 'blue';
		}
	};

	const toggle = () => setIsOpen(prev => !prev);
	const close = () => setIsOpen(false);

	const handleSelect = (option: T) => {
		setSelect(option);
		close();
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return {
		ref,
		isOpen,
		select,
		toggle,
		// close, ------- если понадобиться закрывать dropdown где то в другом месте
		handleSelect,
		getColor,
	};
}
