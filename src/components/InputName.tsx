import React, { useEffect, useRef, useState } from 'react';

function InputName() {
	const [value, setValue] = useState<string>('Фамилия Имя участника');
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	console.log(value);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (/\d/.test(e.key)) {
			e.preventDefault();
		}
		if (e.key === 'Enter') {
			setIsEdit(false);
		}
	};

	useEffect(() => {
		if (isEdit && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isEdit]);

	// const isEditName = () => {};

	return (
		<div>
			{isEdit ? (
				<input
					ref={inputRef}
					onBlur={() => setIsEdit(false)}
					className='border border-solid border-[rgba(255,255,255,0.4)] rounded-full px-4 w-fit  pt-1 pb-1.5 bg-[rgba(255,255,255,0.04)] text-sm placeholder:w-fit'
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder='Фамилия Имя участника'
				/>
			) : (
				<p onClick={() => setIsEdit(true)} className='border border-solid border-[rgba(255,255,255,0.4)] w-fit rounded-full px-4 pt-1 pb-1.5 bg-[rgba(255,255,255,0.04)] text-sm whitespace-nowrap'>
					{value}
				</p>
			)}
		</div>
	);
}

export default InputName;
