import React, { useState } from 'react';

function InputName() {
	const [value, setValue] = useState<string>('');
	console.log(value);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (/\d/.test(e.key)) {
			e.preventDefault();
		}
	};

	return (
		<div>
			<input type='text' value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown} />
		</div>
	);
}

export default InputName;
