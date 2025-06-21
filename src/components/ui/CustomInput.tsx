import React from 'react';

interface CustomInputProps {
	dateValue: string;
	timeValue: string;
	onClick: () => void;
}

const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(({ dateValue, timeValue, onClick }, ref) => (
	<div ref={ref} onClick={onClick} className='flex items-center flex-col bg-white/30 w-fit rounded-full py-3 px-6'>
		<span className='font-semibold text-4xl leading-[133%]'>{timeValue}</span>
		<span className=' text-white/80 text-[14px]'>{dateValue}</span>
	</div>
));

export default CustomInput;
