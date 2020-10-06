import { TicketStatuses, TicketTypes } from '../../shared/utilities/Types';
import { TicketListItem } from '../ticketListItem/TicketListItem';
import mockTicketListItems from './mockDataListItems.json';
import { Stack } from '../../elements';
import React from 'react';

export const TicketList = () => {
	return (
		<div className='TicketList'>
			<Stack vertical spacing='extraTight'>
				{mockTicketListItems?.map((ticket, index) => {
					return (
						<TicketListItem
							key={index}
							ticketKey={ticket.key}
							title={ticket.title}
							status={ticket.status as TicketStatuses}
							type={ticket.type as TicketTypes}
							lastModifiedAt={ticket.lastModifiedAt}
						/>
					);
				})}
			</Stack>
		</div>
	);
};
