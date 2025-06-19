export default function formatDateTime(date: Date) {
	const newDate = date.toISOString();
	const newTime = date.toTimeString();

	return {
		date: newDate.slice(0, 10),
		time: newTime.slice(0, 5),
	};
}
