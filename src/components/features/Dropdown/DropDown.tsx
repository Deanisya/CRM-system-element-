import DropDownButton from '../../ui/dropdown/DropDownButton';
import DropDownOptionsList from '../../ui/dropdown/DropDownOptionsList';
import useDropdown from './useDropdown';

type DropDownProps<T extends string> = {
	options: T[];
	initial: T;
	text: string;
	onUpdate: (option: T) => void;
};
function DropDown<T extends string>({ options, initial, text, onUpdate }: DropDownProps<T>) {
	const { ref, isOpen, select, toggle, handleSelect, getColor } = useDropdown<T>(initial);
	const handleSelectAndUpdate = (option: T) => {
		handleSelect(option);
		onUpdate(option);
	};

	return (
		<div className='relative w-fit justify-self-end' ref={ref}>
			<DropDownButton select={select} onClick={toggle} color={getColor(select)}>
				<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M3.52851 5.5286C3.78886 5.26825 4.21097 5.26825 4.47132 5.5286L7.99992 9.05719L11.5285 5.5286C11.7889 5.26825 12.211 5.26825 12.4713 5.5286C12.7317 5.78895 12.7317 6.21106 12.4713 6.47141L8.47132 10.4714C8.21097 10.7318 7.78886 10.7318 7.52851 10.4714L3.52851 6.47141C3.26816 6.21106 3.26816 5.78895 3.52851 5.5286Z'
						fill='currentColor'
					/>
				</svg>
			</DropDownButton>
			{isOpen && <DropDownOptionsList options={options} text={text} onSelect={handleSelectAndUpdate} getColor={getColor} />}
		</div>
	);
}

export default DropDown;
