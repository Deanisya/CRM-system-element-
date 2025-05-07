import { useEffect, useRef, useState } from 'react';

type DropDownProps<T extends string> = {
	options: T[];
	initial: T;
};
function DropDown<T extends string>({ options, initial }: DropDownProps<T>) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [select, setSelect] = useState<T>(initial);
	const dropDownRef = useRef<HTMLDivElement>(null);
	// const filterOptions = options.filter(option => option !== select);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='relative w-fit mb-1.5' ref={dropDownRef}>
			<button className=' flex gap-2 justify-center items-center border-0 rounded-full bg-[#bcd0f0] px-4 py-1 text-[#253246] ' onClick={() => setIsOpen(!isOpen)}>
				<span className='capitalize font-semibold'>{select}</span>
				{/* {select} */}
				<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M3.52851 5.5286C3.78886 5.26825 4.21097 5.26825 4.47132 5.5286L7.99992 9.05719L11.5285 5.5286C11.7889 5.26825 12.211 5.26825 12.4713 5.5286C12.7317 5.78895 12.7317 6.21106 12.4713 6.47141L8.47132 10.4714C8.21097 10.7318 7.78886 10.7318 7.52851 10.4714L3.52851 6.47141C3.26816 6.21106 3.26816 5.78895 3.52851 5.5286Z'
						fill='#253246'
					/>
				</svg>
			</button>
			{isOpen && (
				<ul className='absolute bg-amber-950'>
					{options.map(option => (
						<li
							key={option}
							onClick={() => {
								setSelect(option);
								setIsOpen(false);
							}}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default DropDown;
