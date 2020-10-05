import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, PageNotFound } from '../../layout';
import { SmartConsole } from '../../features';
import React from 'react';

export const Routes = () => {
	return (
		<Router>
			<SmartConsole />
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route component={PageNotFound} title='Not Found' />
			</Switch>
		</Router>
	);
};
