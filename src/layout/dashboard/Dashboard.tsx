import { Page, Stack } from '../../elements';
import { TicketList, TicketListHeader } from '../../features';
import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<Page>
			<Stack alignment='baseline' spacing='extraTight'>
				<div>Tayra.io openTicket page</div>
			</Stack>
			<TicketListHeader />
			<TicketList />
		</Page>
	);
};
