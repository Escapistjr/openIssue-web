import { TicketStatuses, TicketTypes } from '../../shared/utilities/Types';
import { Caption, Stack, Text } from '../../elements';
import { StatusDropdown, TypeDropdown } from '..';
import './TicketListItem.scss';
import React from 'react';

export interface TicketListItemProps {
	title: string;
	status: TicketStatuses;
	modified: string;
	type: TicketTypes;
	ticketKey: string;
}

export const TicketListItem = ({ title, status, modified, type, ticketKey }: TicketListItemProps) => {
	return (
		<div className='TicketListItem'>
			<Stack alignment='center' distribution='fill' spacing='none'>
				<Stack.Item keepWidth>
					<TypeDropdown initialType={type} ticketKey={ticketKey} />
				</Stack.Item>
				<div className='TicketListItem--Text'>
					<Stack distribution='equalSpacing' alignment='center' spacing='none'>
						<Text variation='subdued'>{title}</Text>
						<Text variation='subdued'>
							<Caption>{modified}</Caption>
						</Text>
					</Stack>
				</div>
				<Stack.Item keepWidth>
					<StatusDropdown intialStatus={status} ticketKey={ticketKey} />
				</Stack.Item>
			</Stack>
		</div>
	);
};
