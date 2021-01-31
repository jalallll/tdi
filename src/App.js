import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import About from './components/pages/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
