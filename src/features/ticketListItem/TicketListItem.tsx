import { TicketStatuses, TicketTypes } from '../../shared/utilities/Types';
import { Caption, Stack, Text } from '../../elements';
import { StatusDropdown, TypeDropdown } from '..';
import './TicketListItem.scss';
import React from 'react';

export interface TicketListItemProps {
	title: string;
	status: TicketStatuses;
	lastModifiedAt: string;
	type: TicketTypes;
	ticketKey: string;
}

export const TicketListItem = ({ title, status, lastModifiedAt, type, ticketKey }: TicketListItemProps) => {
	return (
		<div className='TicketListItem'>
			<Stack alignment='center' spacing='none' wrap='noWrap'>
				<TypeDropdown initialType={type} ticketKey={ticketKey} />
				<Stack.Item fill>
					<div className='TicketListItem--Text'>
						<Stack alignment='center' spacing='none' wrap='noWrap'>
							<Stack.Item fill>
								<div className='TicketListItem--Text-Title'>
									<Text variation='strong'>{title}</Text>
								</div>
							</Stack.Item>
							<div className='TicketListItem--Text-Date'>
								<Text variation='subdued'>
									<Caption>{lastModifiedAt}</Caption>
								</Text>
							</div>
						</Stack>
					</div>
				</Stack.Item>
				<StatusDropdown intialStatus={status} ticketKey={ticketKey} />
			</Stack>
		</div>
	);
};
