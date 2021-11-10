import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SinginPage from './pages/singin';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/signin' component={SinginPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
