import { IssueStatus, IssueStatuses } from '../../shared/utilities/Types';
import React, { useState } from 'react';
import './StatusDropdown.scss';
import { Stack } from '../../elements';
import ClickAwayListener from 'react-click-away-listener';

export interface StatusDropdownProps {
	intialStatus: IssueStatuses;
	issueKey: string;
}

export const StatusDropdown = ({ intialStatus, issueKey }: StatusDropdownProps) => {
	const [showStatusDropdownOptions, setShowStatusDropdownOptions] = useState(false);

	const handleShowStatusDropdownOptions = () => {
		setShowStatusDropdownOptions((showStatusDropdownOptions) => !showStatusDropdownOptions);
	};

	const [issuePreviewStatus, setIssuePreviewStatus] = useState(intialStatus);

	const handleStatusChange = (newStatus: IssueStatuses) => {
		setIssuePreviewStatus(newStatus);
		setShowStatusDropdownOptions(false);
	};

	return (
		<div className='StatusDropdown'>
			<div
				onClick={() => handleShowStatusDropdownOptions()}
				className='StatusDropdown--Status'
				style={{ backgroundColor: IssueStatus[issuePreviewStatus].color }}>
				{IssueStatus[issuePreviewStatus].name}
			</div>
			{showStatusDropdownOptions ? (
				<ClickAwayListener onClickAway={() => setShowStatusDropdownOptions(false)}>
					<div className='StatusDropdown--Options'>
						<Stack vertical spacing='extraTight'>
							{Object.entries(IssueStatus).map(([key, value], index) => {
								return key === issuePreviewStatus ? null : (
									<div
										key={index}
										onClick={() => handleStatusChange(key as IssueStatuses)}
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
