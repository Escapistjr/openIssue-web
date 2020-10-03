import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, Issue, PageNotFound } from '../../layout';
import React from 'react';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/issue' component={Issue} />
				<Route component={PageNotFound} title='Not Found' />
			</Switch>
		</Router>
	);
};
