import { IssueStatus, IssueStatusTypes } from '../../shared/utilities/Types';
import React, { useState } from 'react';
import './StatusDropdown.scss';
import { Stack } from '..';

export interface StatusDropdownProps {
	intialStatus: IssueStatusTypes;
}

export const StatusDropdown = ({ intialStatus }: StatusDropdownProps) => {
	const [showDropdownOptions, setShowDropdownOptions] = useState(false);

	const handleShowDropdownOptions = () => {
		setShowDropdownOptions((showDropdownOptions) => !showDropdownOptions);
	};

	const [issuePreviewStatus, setIssuePreviewStatus] = useState(intialStatus);

	const handleStatusChange = (newStatus: IssueStatusTypes) => {
		setIssuePreviewStatus(newStatus);
		setShowDropdownOptions(false);
	};

	return (
		<div className='StatusDropdown'>
			<div
				onClick={() => handleShowDropdownOptions()}
				className='StatusDropdown--Status'
				style={{ backgroundColor: IssueStatus[issuePreviewStatus].color }}>
				{IssueStatus[issuePreviewStatus].name}
			</div>
			{showDropdownOptions ? (
				<div className='StatusDropdown--Options'>
					<Stack vertical spacing='extraTight'>
						{Object.entries(IssueStatus).map(([key, value], index) => {
							return key === issuePreviewStatus ? null : (
								<div
									key={index}
									onClick={() => handleStatusChange(key as IssueStatusTypes)}
									className='StatusDropdown--Status StatusDropdown--Options-Item'
									style={{ backgroundColor: value.color }}>
									{value.name}
								</div>
							);
						})}
					</Stack>
				</div>
			) : null}
		</div>
	);
};
