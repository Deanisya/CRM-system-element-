import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
