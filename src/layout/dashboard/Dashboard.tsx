import { Page, Stack } from '../../elements';
import { TicketListItem } from '../../features';
import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<Page>
			<Stack alignment='baseline' spacing='extraTight'>
				<div>Dashboard view</div>
			</Stack>
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
			<TicketListItem title='test Ticket' status='open' modified='2 days ago' type='bug' ticketKey='TYR-243' />
		</Page>
	);
};
