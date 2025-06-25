export default function isLunch(time: string): boolean {
	const [hours] = time.split(':').map(Number);
	return hours === 12 || hours === 13 || hours === 14;
}
