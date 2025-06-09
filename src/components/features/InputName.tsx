import useInput from '../../hooks/useInput';
interface InputNameProps {
	responsible: string;
	onUpdate: (value: string) => void;
}
function InputName({ responsible, onUpdate }: InputNameProps) {
	const { handleKeyDown, handleChangeOnInput, handleBlur, handleChange, value, isEdit, isError, inputRef } = useInput(responsible, onUpdate);

	return (
		<div className='w-full'>
			{isEdit ? (
				<input
					ref={inputRef}
					onBlur={handleBlur}
					className={`border border-solid rounded-full px-4 pt-1 pb-1.5 bg-[rgba(255,255,255,0.04)] text-sm w-full ${isError ? 'border-red-500' : 'border-[rgba(255,255,255,0.4)]'}`}
					type='text'
					value={value}
					onChange={handleChange}
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
