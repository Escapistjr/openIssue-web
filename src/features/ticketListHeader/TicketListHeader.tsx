import { Button, Dropdown, Icon, Stack, Text } from '../../elements';
import { filter } from '../../assets/icons';
import React, { useState } from 'react';
import './TicketListHeader.scss';

export const TicketListHeader = () => {
	const [showFilterDropdown, setShowFilterDropdown] = useState(false);

	const handleShowFilterDropdown = () => {
		setShowFilterDropdown((showFilterDropdown) => !showFilterDropdown);
	};

	const statusFilterList = {
		allTickets: { name: 'All tickets', icon: filter },
		openTickets: { name: 'Open tickets', icon: filter },
		resolvedTickets: { name: 'Resolved tickets', icon: filter },
	};

	const [selectedStatusFilter, setSelectedStatusFilter] = useState('allTickets');

	const handleStatusFilterChange = (newStatusFilter) => {
		setSelectedStatusFilter(newStatusFilter);
	};

	return (
		<div className='TicketListHeader'>
			<Stack alignment='center' distribution='equalSpacing'>
				<div className='TicketListHeader--Filter-Item' onClick={() => handleShowFilterDropdown()}>
					<Stack spacing='tight'>
						<Icon source={statusFilterList[selectedStatusFilter].icon} />
						<Text>{statusFilterList[selectedStatusFilter].name}</Text>
					</Stack>
					{showFilterDropdown ? (
						<Dropdown offsetTop='2px' offsetLeft='10px' show={showFilterDropdown} onClose={() => setShowFilterDropdown(false)}>
							{Object.entries(statusFilterList).map(([key, value], index) => {
								return key === selectedStatusFilter ? null : (
									<div
										key={index}
										onClick={() => handleStatusFilterChange(key)}
										className='TicketListHeader--Filter-Item TicketListHeader--Filter-Item-Option'>
										<Stack spacing='tight'>
											<Icon source={value.icon} />
											<Text>{value.name}</Text>
										</Stack>
									</div>
								);
							})}
						</Dropdown>
					) : null}
				</div>
				<Button primary size='slim'>
					New Ticket
				</Button>
			</Stack>
		</div>
	);
};
