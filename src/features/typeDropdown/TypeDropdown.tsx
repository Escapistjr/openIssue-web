import { TicketType, TicketTypes } from '../../shared/utilities/Types';
import { Dropdown, Icon, Stack } from '../../elements';
import React, { useState } from 'react';
import './TypeDropdown.scss';

export interface TypeDropdownProps {
	initialType: TicketTypes;
	ticketKey: string;
}

export const TypeDropdown = ({ initialType, ticketKey }: TypeDropdownProps) => {
	const [showTypeDropdownOptions, setShowTypeDropdownOptions] = useState(false);

	const handleshowTypeDropdownOptions = () => {
		setShowTypeDropdownOptions((showTypeDropdownOptions) => !showTypeDropdownOptions);
	};

	const [ticketType, setTicketType] = useState(initialType);

	const handleStatusChange = (newType: TicketTypes) => {
		setTicketType(newType);
		setShowTypeDropdownOptions(false);
	};

	return (
		<div className='TypeDropdown'>
			<div onClick={() => handleshowTypeDropdownOptions()} className='TypeDropdown--Status' title={TicketType[ticketType].name}>
				<Icon source={TicketType[ticketType].icon} color={TicketType[ticketType].colorName} />
			</div>
			{showTypeDropdownOptions ? (
				<Dropdown show={showTypeDropdownOptions} onClose={() => setShowTypeDropdownOptions(false)} padding='small'>
					<Stack vertical spacing='extraTight'>
						{Object.entries(TicketType).map(([key, value], index) => {
							return key === ticketType ? null : (
								<div
									key={index}
									onClick={() => handleStatusChange(key as TicketTypes)}
									className='TypeDropdown--Status TypeDropdown--Options-Item'
									title={value.name}>
									<Icon source={value.icon} color={value.colorName} />
								</div>
							);
						})}
					</Stack>
				</Dropdown>
			) : null}
		</div>
	);
};
