import { useEffect, useRef, useState } from 'react';

export default function useInput(responsible: string, onUpdate: (value: string) => void) {
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

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
	return {
		handleKeyDown,
		handleChangeOnInput,
		handleBlur,
		handleChange,
		value,
		isEdit,
		isError,
		inputRef,
	};
}
