type AddEventProps = {
	onClick: () => void;
};

function AddEvent({ onClick }: AddEventProps) {
	return (
		<div>
			<button onClick={onClick}>Add Event</button>
		</div>
	);
}

export default AddEvent;
