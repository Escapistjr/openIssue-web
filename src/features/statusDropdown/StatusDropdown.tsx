import { TicketStatus, TicketStatuses } from '../../shared/utilities/Types';
import React, { useState } from 'react';
import './StatusDropdown.scss';
import { Stack } from '../../elements';
import ClickAwayListener from 'react-click-away-listener';

export interface StatusDropdownProps {
	intialStatus: TicketStatuses;
	ticketKey: string;
}

export const StatusDropdown = ({ intialStatus, ticketKey }: StatusDropdownProps) => {
	const [showStatusDropdownOptions, setShowStatusDropdownOptions] = useState(false);

	const handleShowStatusDropdownOptions = () => {
		setShowStatusDropdownOptions((showStatusDropdownOptions) => !showStatusDropdownOptions);
	};

	const [ticketStatus, setTicketStatus] = useState(intialStatus);

	const handleStatusChange = (newStatus: TicketStatuses) => {
		setTicketStatus(newStatus);
		setShowStatusDropdownOptions(false);
	};

	return (
		<div className='StatusDropdown'>
			<div
				onClick={() => handleShowStatusDropdownOptions()}
				className='StatusDropdown--Status'
				style={{ backgroundColor: TicketStatus[ticketStatus].color }}>
				{TicketStatus[ticketStatus].name}
			</div>
			{showStatusDropdownOptions ? (
				<ClickAwayListener onClickAway={() => setShowStatusDropdownOptions(false)}>
					<div className='StatusDropdown--Options'>
						<Stack vertical spacing={['tight', 'extraTight']}>
							{Object.entries(TicketStatus).map(([key, value], index) => {
								return key === ticketStatus ? null : (
									<div
										key={index}
										onClick={() => handleStatusChange(key as TicketStatuses)}
										className='StatusDropdown--Status StatusDropdown--Options-Item'
										style={{ backgroundColor: value.color }}>
										{value.name}
									</div>
								);
							})}
						</Stack>
					</div>
				</ClickAwayListener>
			) : null}
		</div>
	);
};
