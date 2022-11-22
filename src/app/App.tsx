import './App.scss';

import { Routes, Route } from 'react-router';
import Menu from 'components/menu/menu.component';


const App = () => {
	return (
		<div className={'App tw-self-center'}>

			<Menu />

			<Routes>
				<Route path={'/'} element={ <div />	} />
			</Routes>

		</div>
	);
}

export default ( App );