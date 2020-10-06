import { TicketStatuses, TicketTypes } from '../../shared/utilities/Types';
import React from 'react';
import './Ticket.scss';

export interface TicketProps {
	ticketKey: string;
	title: string;
	description?: string;
	type: TicketTypes;
	status: TicketStatuses;
	createdAt: string;
	lastModifiedAt: string;
}

export const Ticket = ({ ticketKey, title, description, type, status }: TicketProps) => {
	return (
		<div>
			<div>Single Issue</div>
		</div>
	);
};
