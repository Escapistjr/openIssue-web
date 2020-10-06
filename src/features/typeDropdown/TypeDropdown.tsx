import { IssueType, IssueTypes } from '../../shared/utilities/Types';
import ClickAwayListener from 'react-click-away-listener';
import { Icon, Stack } from '../../elements';
import React, { useState } from 'react';
import './TypeDropdown.scss';

export interface TypeDropdownProps {
	initialType: IssueTypes;
	issueKey: string;
}

export const TypeDropdown = ({ initialType, issueKey }: TypeDropdownProps) => {
	const [showTypeDropdownOptions, setShowTypeDropdownOptions] = useState(false);

	const handleshowTypeDropdownOptions = () => {
		setShowTypeDropdownOptions((showTypeDropdownOptions) => !showTypeDropdownOptions);
	};

	const [issuePreviewType, setIssuePreviewType] = useState(initialType);

	const handleStatusChange = (newType: IssueTypes) => {
		setIssuePreviewType(newType);
		setShowTypeDropdownOptions(false);
	};

	return (
		<div className='TypeDropdown'>
			<div onClick={() => handleshowTypeDropdownOptions()} className='TypeDropdown--Status' title={IssueType[issuePreviewType].name}>
				<Icon source={IssueType[issuePreviewType].icon} color={IssueType[issuePreviewType].colorName} />
			</div>
			{showTypeDropdownOptions ? (
				<ClickAwayListener onClickAway={() => setShowTypeDropdownOptions(false)}>
					<div className='TypeDropdown--Options'>
						<Stack vertical spacing='extraTight'>
							{Object.entries(IssueType).map(([key, value], index) => {
								return key === issuePreviewType ? null : (
									<div
										key={index}
										onClick={() => handleStatusChange(key as IssueTypes)}
										className='TypeDropdown--Status TypeDropdown--Options-Item'
										title={value.name}>
										<Icon source={value.icon} color={value.colorName} />
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
