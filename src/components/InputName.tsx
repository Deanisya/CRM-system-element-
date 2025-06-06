import React, { useEffect, useRef, useState } from 'react';
interface InputNameProps {
	responsible: string;
	onUpdate: (value: string) => void;
}
function InputName({ responsible, onUpdate }: InputNameProps) {
	const [value, setValue] = useState<string>(responsible);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (/\d/.test(e.key)) {
			e.preventDefault();
		}
		if (e.key === 'Enter') {
			validateAndClose();
		}
	};

	useEffect(() => {
		if (isEdit && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isEdit]);

	const handleChangeOnInput = () => {
		setIsEdit(true);
		setIsError(false);
	};

	const validateAndClose = () => {
		if (value.trim().length < 1) {
			setIsError(true);
			return;
		}
		setIsEdit(false);
		setIsError(false);
		onUpdate(value);
	};

	const handleBlur = () => {
		validateAndClose();
	};

	return (
		<div className='w-full'>
			{isEdit ? (
				<input
					ref={inputRef}
					onBlur={handleBlur}
					className={`border border-solid rounded-full px-4 pt-1 pb-1.5 bg-[rgba(255,255,255,0.04)] text-sm w-full ${isError ? 'border-red-500' : 'border-[rgba(255,255,255,0.4)]'}`}
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder='Фамилия Имя участника'
				/>
			) : (
				<p onClick={handleChangeOnInput} className='border border-solid border-[rgba(255,255,255,0.4)] rounded-full px-4 pt-1 pb-1.5 bg-[rgba(255,255,255,0.04)] text-sm whitespace-nowrap'>
					{value}
				</p>
			)}
		</div>
	);
}

export default InputName;
