import DropDownButton from './DropDownButton';

type DropDownOptionsListProps<T extends string> = {
	text: string;
	options: T[]; // входящий, исходящий
	onSelect: (option: T) => void;
	getColor: (option: T) => 'blue' | 'green' | 'gray' | 'red';
};

function DropDownOptionsList<T extends string>({ text, options, onSelect, getColor }: DropDownOptionsListProps<T>) {
	return (
		<div className='absolute bg-blue-dark w-fit py-2 rounded-[12px] top-11'>
			<p className='whitespace-nowrap text-white-80 px-5'>{text}</p>
			<ul className='flex flex-col'>
				{options.map(option => (
					<li className='hover:bg-green-hover py-2 px-5'>
						<DropDownButton select={option} onClick={() => onSelect(option)} color={getColor(option)} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default DropDownOptionsList;
