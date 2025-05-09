import DropDownButton from './DropDownButton';

type DropDownOptionsListProps<T extends string> = {
	text: string;
	options: T[];
	onSelect: (option: T) => void;
};

function DropDownOptionsList<T extends string>({ text, options, onSelect }: DropDownOptionsListProps<T>) {
	return (
		<div className='absolute bg-blue-dark w-fit  py-2 rounded-[12px]'>
			<p className='whitespace-nowrap text-white-80 px-5'>{text}</p>
			<ul className='flex flex-col'>
				{options.map(option => (
					<li>
						<DropDownButton
							select={option}
							onClick={() => {
								onSelect(option);
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DropDownOptionsList;
