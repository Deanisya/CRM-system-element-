import GridContainer from './GridContainer';

export default function TitleColumns() {
	const title = ['Дата и время', 'Ответственные', 'Тип звонка', 'Важность'];
	return (
		<GridContainer>
			{title.map((item, index) => (
				<span key={index} className='px-12 nth-[n+3]:justify-self-end'>
					{item}
				</span>
			))}
		</GridContainer>
	);
}
