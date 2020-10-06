import { Page, Stack } from '../../elements';
import { TicketList } from '../../features';
import React from 'react';
import './Dashboard.scss';
import { TicketListHeader } from '../../features/ticketListHeader/TicketListHeader';

export const Dashboard = () => {
	return (
		<Page>
			<Stack alignment='baseline' spacing='extraTight'>
				<div>Dashboard view</div>
			</Stack>
			<TicketListHeader />
			<TicketList />
		</Page>
	);
};
