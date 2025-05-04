import CallItem from './components/CallItem';
import { useAppSelector } from './hooks/redux';

function App() {
	const calls = useAppSelector(state => state.callsReducer.list);

	return (
		<>
			<div>
				<CallItem />
				{calls.map((call, index) => (
					<div key={index}>
						<p>{call.date}</p>
						<p>{call.type}</p>
						<p>{call.priority}</p>
						<p>{call.responsible}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
