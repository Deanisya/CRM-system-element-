import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formatDateTime from '../../utils/formatDateTime';
import { Calls } from '../../types/types';
import useCallUpdater from '../../hooks/useCallUpdater';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';
import CustomInput from '../ui/CustomInput';
interface DatePickerCustomProps {
	call: Calls;
}
export default function DatePickerCustom({ call: { id, date, time } }: DatePickerCustomProps) {
	const { handleUpdateDateAndTime } = useCallUpdater(id);

	const minTime = new Date();
	minTime.setHours(9, 0, 0, 0);
	const maxTime = new Date();
	maxTime.setHours(17, 0, 0, 0);

	return (
		<DatePicker
			selected={new Date(`${date}T${time}`)}
			onChange={(dateObj: Date | null): void => {
				if (!dateObj) return;
				const { date: newDate, time: newTime } = formatDateTime(dateObj);
				handleUpdateDateAndTime(newDate, newTime);
			}}
			minDate={new Date()}
			minTime={minTime}
			maxTime={maxTime}
			showTimeSelect
			timeFormat='HH:mm'
			timeIntervals={15}
			// popperClassName='!absolute !z-[9999]'
			// wrapperClassName='w-full'
			portalId='root-portal'
			popperPlacement='bottom-start'
			customInput={<CustomInput onClick={() => {}} dateValue={date ? format(new Date(`${date}T${time}`), 'dd MMM yyyy', { locale: ru }) : 'Выберите дату'} timeValue={time} />}
		/>
	);
}
